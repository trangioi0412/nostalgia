// Regenerates the Album (photos + video) shown on Home.html to match
// whatever files currently exist in the Image/ folder.
//
// Run this after adding or removing files in Image/:
//   node update-album.js
//
// Known files keep their curated captions and order (see KNOWN_CAPTIONS
// below); any new file gets a caption guessed from its filename and is
// appended at the end. Edit KNOWN_CAPTIONS to rename/reorder items.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const IMAGE_DIR = path.join(ROOT, 'Image');
const HOME_PATH = path.join(ROOT, 'Home.html');

// Ảnh đã được đổi tên theo số thứ tự 1-11 (tự chọn thứ tự bằng cách đặt
// tên file); caption vẫn giữ lại nhờ đối chiếu đúng nội dung file gốc.
const KNOWN_CAPTIONS = {
  '1.jpg': 'Tổng kết lớp 9',
  '2.jpg': 'Ngày tổng kết',
  '3.jpg': 'Đi chơi Đà Lạt',
  '4.jpg': 'Khoảnh khắc bên nhau',
  '5.jpg': 'Cùng nhau',
  '6.jpg': 'Tâm sự trước nhà',
  '7.jpg': 'Cắm trại lớp 12',
  '8.mp4': 'Sinh nhật lớp 12',
  '9.jpg': 'Tổng kết lớp 12',
  '10.jpg': 'Tết 2026',
  '11.jpg': 'Ảnh tốt nghiệp',
};
const KNOWN_ORDER = Object.keys(KNOWN_CAPTIONS);

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

function prettify(filename) {
  const base = filename.replace(/\.[^.]+$/, '');
  return base.replace(/[_-]+/g, ' ').replace(/\s+\(\d+\)\s*$/, '').trim();
}

// Sắp theo số nếu tên file toàn là số (vd "2.jpg" đứng trước "10.jpg"),
// còn lại thì sắp theo bảng chữ cái như cũ.
function naturalCompare(a, b) {
  const na = parseInt(a, 10), nb = parseInt(b, 10);
  const aIsNum = /^\d+\.[a-z0-9]+$/i.test(a);
  const bIsNum = /^\d+\.[a-z0-9]+$/i.test(b);
  if (aIsNum && bIsNum) return na - nb;
  return a.localeCompare(b, 'vi');
}

function main() {
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error('Không tìm thấy folder Image/ tại', IMAGE_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(IMAGE_DIR).filter((f) => IMAGE_EXT.test(f) || VIDEO_EXT.test(f));
  if (!files.length) {
    console.error('Folder Image/ không có ảnh/video nào.');
    process.exit(1);
  }

  const known = files.filter((f) => KNOWN_ORDER.includes(f))
    .sort((a, b) => KNOWN_ORDER.indexOf(a) - KNOWN_ORDER.indexOf(b));
  const unknown = files.filter((f) => !KNOWN_ORDER.includes(f))
    .sort(naturalCompare);
  const ordered = known.concat(unknown);

  const items = ordered.map((f) => ({
    file: f,
    type: VIDEO_EXT.test(f) ? 'video' : 'image',
    caption: KNOWN_CAPTIONS[f] || prettify(f),
  }));

  console.log('Tìm thấy', items.length, 'file trong Image/:');
  items.forEach((it) => console.log('  -', it.file, '(' + it.type + ')', '->', it.caption));
  if (unknown.length) {
    console.log('\nFile mới (chưa có chú thích sẵn), đã tự đặt tên tạm:');
    unknown.forEach((f) => console.log('  -', f, '->', KNOWN_CAPTIONS[f] || prettify(f)));
    console.log('Muốn đổi chú thích thì sửa trong KNOWN_CAPTIONS ở đầu file update-album.js rồi chạy lại.');
  }

  const html = fs.readFileSync(HOME_PATH, 'utf8');
  const re = /<script type="__bundler\/template">([\s\S]*?)<\/script>/;
  const m = html.match(re);
  if (!m) { console.error('Không tìm thấy bundler template trong Home.html'); process.exit(1); }
  const oldRaw = m[1];
  let tpl = JSON.parse(oldRaw);

  const itemsLiteral = JSON.stringify(items, null, 2).replace(/\n/g, '\n');
  const albumConstRe = /const ALBUM_ITEMS = [\s\S]*?\];\n/;
  const albumConstCode = 'const ALBUM_ITEMS = ' + itemsLiteral + ';\n';
  if (!albumConstRe.test(tpl)) {
    console.error('Không tìm thấy "const ALBUM_ITEMS" trong template — có thể cấu trúc Home.html đã đổi.');
    process.exit(1);
  }
  tpl = tpl.replace(albumConstRe, albumConstCode);

  const newRaw = JSON.stringify(tpl).replace(/\//g, '\\u002F');
  const roundTrip = JSON.parse(newRaw);
  if (roundTrip !== tpl) { console.error('Lỗi mã hoá lại (round-trip mismatch), huỷ bỏ, không ghi file.'); process.exit(1); }

  const updatedHtml = html.replace(oldRaw, function () { return newRaw; });
  if (updatedHtml === html) { console.error('Không có gì thay đổi, kiểm tra lại.'); process.exit(1); }
  fs.writeFileSync(HOME_PATH, updatedHtml, 'utf8');
  console.log('\nĐã cập nhật Home.html với', items.length, 'ảnh/video.');
}

main();
