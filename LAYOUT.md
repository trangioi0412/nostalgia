# Assets & nội dung gốc của website

Gom lại nguyên code các thành phần trực quan (nhân vật, hộp quà, bản đồ...) và nội dung chữ đang có trên site, để đưa thẳng vào Claude Design (hoặc công cụ thiết kế khác) làm tư liệu thiết kế lại.

Nguồn: `index.html` (hành trình mở đầu) và `Home.html` (trang chính).

---

## 1. Nhân vật SVG — `index.html`

Có 2 nhân vật, mỗi nhân vật có 5 giai đoạn trang phục (`data-stage`): `s19` (2019) → `shs` (đi học) → `sgr` (tốt nghiệp) → `s26` (2026) → `ssg` (Sài Gòn). Mỗi giai đoạn là 1 `<g>` riêng, ẩn/hiện bằng `opacity` khi cuộn.

### Nhân vật A (khăn đỏ)
```html
<svg viewBox="0 0 60 150" style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible;">
  <g data-stage="s19">
    <g data-part="legb"><rect x="26" y="88" width="8" height="56" rx="4" fill="#3E4E6B"></rect></g>
    <g data-part="legf"><rect x="26" y="88" width="8" height="56" rx="4" fill="#4A5C7A"></rect></g>
    <g data-part="armb"><rect x="13" y="50" width="7" height="32" rx="3.5" fill="#D9B894"></rect></g>
    <rect x="19" y="45" width="22" height="48" rx="6" fill="#F7F7F9"></rect>
    <path data-part="scarf" d="M22 50 L38 50 L34 62 L30 54 L26 62 Z" fill="#C94A4A"></path>
    <g data-part="armf"><rect x="40" y="50" width="7" height="32" rx="3.5" fill="#E8C9A8"></rect></g>
    <circle cx="30" cy="26" r="11.5" fill="#E8C9A8"></circle>
    <path d="M18 24 C18 12, 26 11, 30 14 C34 10, 43 12, 42 25 C42 19, 35 17, 29 19 C23 21, 19 20, 18 24 Z" fill="#3F3038"></path>
  </g>
  <g data-stage="shs" opacity="0">
    <g data-part="legb"><rect x="26" y="84" width="8" height="60" rx="4" fill="#28313F"></rect></g>
    <g data-part="legf"><rect x="26" y="84" width="8" height="60" rx="4" fill="#2F3A4E"></rect></g>
    <g data-part="armb"><rect x="12" y="44" width="7" height="34" rx="3.5" fill="#D9B894"></rect></g>
    <rect x="18" y="39" width="24" height="50" rx="5" fill="#EDEDF2"></rect>
    <g data-part="armf"><rect x="41" y="44" width="7" height="34" rx="3.5" fill="#E8C9A8"></rect></g>
    <circle cx="30" cy="22" r="11" fill="#E8C9A8"></circle>
    <path d="M18 20 C18 9, 26 8, 30 11 C34 7, 43 9, 42 21 C42 15, 35 13, 29 15 C23 17, 19 16, 18 20 Z" fill="#3F3038"></path>
  </g>
  <g data-stage="sgr" opacity="0">
    <g data-part="legb"><rect x="26" y="100" width="9" height="44" rx="4" fill="#28313F"></rect></g>
    <g data-part="armb"><rect x="14" y="42" width="7" height="42" rx="3.5" fill="#322D46"></rect></g>
    <path d="M18 38 L42 38 L46 122 L14 122 Z" fill="#3B3552"></path>
    <path d="M26 38 L30 62 L34 38 Z" fill="#EFEFF4"></path>
    <g data-part="armf"><rect x="39" y="42" width="7" height="42" rx="3.5" fill="#322D46"></rect></g>
    <circle cx="30" cy="22" r="11" fill="#E8C9A8"></circle>
    <path d="M18 20 C18 10, 26 9, 30 12 C34 8, 43 10, 42 21 C42 15, 35 13, 29 15 C23 17, 19 16, 18 20 Z" fill="#3F3038"></path>
    <rect data-part="cap" x="16" y="11" width="28" height="4" rx="1" fill="#2C2740"></rect>
    <rect data-part="cap" x="26" y="7" width="8" height="5" rx="1" fill="#2C2740"></rect>
  </g>
  <g data-stage="s26" opacity="0">
    <g data-part="legb"><rect x="26" y="100" width="9" height="44" rx="4" fill="#2A2438"></rect></g>
    <g data-part="armb"><rect x="14" y="42" width="7" height="42" rx="3.5" fill="#3E3659"></rect></g>
    <path d="M18 38 L42 38 L46 122 L14 122 Z" fill="#4A4168"></path>
    <path d="M26 38 L30 64 L34 38 Z" fill="#E8DFEF"></path>
    <g data-part="armf"><rect x="39" y="42" width="7" height="42" rx="3.5" fill="#3E3659"></rect></g>
    <circle cx="30" cy="22" r="11" fill="#F0DFC8"></circle>
    <path d="M18 20 C18 10, 26 9, 30 12 C34 8, 43 10, 42 21 C42 15, 35 13, 29 15 C23 17, 19 16, 18 20 Z" fill="#3A2F38"></path>
    <rect x="16" y="11" width="28" height="4" rx="1" fill="#2C2740"></rect>
    <rect x="26" y="7" width="8" height="5" rx="1" fill="#2C2740"></rect>
  </g>
  <g data-stage="ssg" opacity="0">
    <g data-part="legb"><rect x="26" y="86" width="8" height="58" rx="4" fill="#2A2430"></rect></g>
    <g data-part="legf"><rect x="26" y="86" width="8" height="58" rx="4" fill="#2E2836"></rect></g>
    <g data-part="armb"><rect x="12" y="44" width="7" height="34" rx="3.5" fill="#262030"></rect></g>
    <rect x="18" y="39" width="24" height="52" rx="5" fill="#2E2836"></rect>
    <g data-part="armf"><rect x="41" y="44" width="7" height="34" rx="3.5" fill="#262030"></rect></g>
    <circle cx="30" cy="22" r="11" fill="#2E2836"></circle>
    <path d="M18 20 C18 9, 26 8, 30 11 C34 7, 43 9, 42 21 C42 15, 35 13, 29 15 C23 17, 19 16, 18 20 Z" fill="#231E2A"></path>
    <path d="M41 14 C44 20, 44 34, 42 44 L44 44 C46 32, 46 19, 43 13 Z" fill="rgba(255,215,154,.55)"></path>
  </g>
</svg>
```

### Nhân vật B (tóc dài, áo dài trắng ở giai đoạn `shs`)
```html
<svg viewBox="0 0 60 150" style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible;">
  <g data-stage="s19">
    <g data-part="legb"><rect x="27" y="88" width="7" height="56" rx="3.5" fill="#3E4E6B"></rect></g>
    <g data-part="legf"><rect x="27" y="88" width="7" height="56" rx="3.5" fill="#4A5C7A"></rect></g>
    <g data-part="armb"><rect x="13" y="50" width="6.5" height="30" rx="3" fill="#E3C2A4"></rect></g>
    <path d="M21 45 L39 45 L42 92 L18 92 Z" fill="#F7F7F9"></path>
    <path data-part="scarf" d="M23 50 L37 50 L33 62 L30 54 L27 62 Z" fill="#C94A4A"></path>
    <g data-part="armf"><rect x="40.5" y="50" width="6.5" height="30" rx="3" fill="#F0D5BA"></rect></g>
    <circle cx="30" cy="27" r="10.5" fill="#F0D5BA"></circle>
    <path d="M19 26 C19 13, 27 11, 31 13 C38 12, 41 18, 41 27 C41 21, 36 19, 30 20 C24 21, 20 22, 19 26 Z" fill="#33272E"></path>
    <path data-part="hair" d="M26 34 C24 44, 25 54, 28 60 C31 53, 31 42, 29 34 Z" fill="#33272E"></path>
  </g>
  <g data-stage="shs" opacity="0">
    <g data-part="legb"><rect x="27" y="84" width="7" height="60" rx="3.5" fill="#EFEFF4"></rect></g>
    <g data-part="armb"><rect x="12.5" y="44" width="6.5" height="32" rx="3" fill="#E3C2A4"></rect></g>
    <path d="M22 39 L38 39 L41 88 L19 88 Z" fill="#FFFFFF"></path>
    <path data-part="aodai" d="M19 88 L41 88 L44 128 L16 128 Z" fill="rgba(255,255,255,.85)"></path>
    <g data-part="armf"><rect x="41" y="44" width="6.5" height="32" rx="3" fill="#F0D5BA"></rect></g>
    <circle cx="30" cy="23" r="10" fill="#F0D5BA"></circle>
    <path d="M19 22 C19 10, 27 8, 31 10 C38 9, 41 15, 41 23 C41 17, 36 15, 30 16 C24 17, 20 18, 19 22 Z" fill="#33272E"></path>
    <path data-part="hair" d="M26 30 C23 44, 24 58, 28 66 C32 57, 32 42, 30 30 Z" fill="#33272E"></path>
  </g>
  <g data-stage="sgr" opacity="0">
    <g data-part="legb"><rect x="27" y="100" width="8" height="44" rx="4" fill="#28313F"></rect></g>
    <g data-part="armb"><rect x="15" y="42" width="6.5" height="42" rx="3" fill="#322D46"></rect></g>
    <path d="M19 38 L41 38 L45 122 L15 122 Z" fill="#3B3552"></path>
    <path d="M26 38 L30 62 L34 38 Z" fill="#EFEFF4"></path>
    <g data-part="armf"><rect x="39" y="42" width="6.5" height="42" rx="3" fill="#322D46"></rect></g>
    <circle cx="30" cy="23" r="10" fill="#F0D5BA"></circle>
    <path d="M19 22 C19 11, 27 9, 31 11 C38 10, 41 16, 41 23 C41 17, 36 15, 30 16 C24 17, 20 18, 19 22 Z" fill="#33272E"></path>
    <path data-part="hair" d="M25 30 C22 44, 24 58, 28 66 C32 57, 31 42, 29 30 Z" fill="#33272E"></path>
    <rect data-part="cap" x="17" y="12" width="27" height="4" rx="1" fill="#2C2740"></rect>
    <rect data-part="cap" x="26" y="8" width="8" height="5" rx="1" fill="#2C2740"></rect>
  </g>
  <g data-stage="s26" opacity="0">
    <g data-part="legb"><rect x="27" y="100" width="8" height="44" rx="4" fill="#4A4258"></rect></g>
    <g data-part="armb"><rect x="14" y="44" width="6" height="36" rx="3" fill="#8F82A6"></rect></g>
    <path d="M22 40 L38 40 L41 114 L19 114 Z" fill="#6B5F82"></path>
    <g data-part="armf"><rect x="40" y="44" width="6" height="36" rx="3" fill="#8F82A6"></rect></g>
    <circle cx="30" cy="24" r="10" fill="#9A8FAE"></circle>
    <path d="M19 23 C19 12, 27 10, 31 12 C38 11, 41 17, 41 24 C41 18, 36 16, 30 17 C24 18, 20 19, 19 23 Z" fill="#4A4058"></path>
    <path data-part="hair" d="M25 31 C22 45, 24 59, 28 67 C32 58, 31 43, 29 31 Z" fill="#4A4058"></path>
  </g>
  <g data-stage="ssg" opacity="0">
    <g data-part="legb"><rect x="27" y="86" width="7" height="58" rx="3.5" fill="#2A2430"></rect></g>
    <g data-part="legf"><rect x="27" y="86" width="7" height="58" rx="3.5" fill="#2E2836"></rect></g>
    <g data-part="armb"><rect x="12.5" y="44" width="6.5" height="34" rx="3" fill="#262030"></rect></g>
    <path d="M21 39 L39 39 L42 91 L18 91 Z" fill="#2E2836"></path>
    <g data-part="armf"><rect x="41" y="44" width="6.5" height="34" rx="3" fill="#262030"></rect></g>
    <circle cx="30" cy="23" r="10" fill="#2E2836"></circle>
    <path d="M19 22 C19 11, 27 9, 31 11 C38 10, 41 16, 41 23 C41 17, 36 15, 30 16 C24 17, 20 18, 19 22 Z" fill="#231E2A"></path>
    <path data-part="hair" d="M25 30 C22 44, 24 58, 28 66 C32 57, 31 42, 29 30 Z" fill="#231E2A"></path>
    <path d="M40 15 C43 22, 43 36, 41 46 L43 46 C45 34, 45 20, 42 14 Z" fill="rgba(255,215,154,.5)"></path>
  </g>
</svg>
```

---

## 2. Hộp quà (Gift box)

### Bản 1 — `index.html` (màn mở đầu hành trình)
```html
<div id="openTrigger" role="button" tabindex="0" style="cursor: pointer; perspective: 900px; padding: 10px;">
  <div id="gbox" style="position: relative; width: clamp(150px, 30vw, 210px); height: clamp(120px, 24vw, 168px); transform-style: preserve-3d;">
    <div style="position: absolute; left: 50%; top: 50%; width: 150%; height: 150%; transform: translate(-50%, -50%) translateZ(-40px); border-radius: 50%; background: radial-gradient(circle, rgba(124,77,255,.45) 0%, rgba(124,77,255,0) 65%); filter: blur(10px);"></div>
    <div style="position: absolute; inset: 0; border-radius: 8px; background: linear-gradient(145deg, #F4B6C8 0%, #E692AE 55%, #D67C9C 100%); box-shadow: 0 50px 80px -40px rgba(0,0,0,.65), inset 0 0 40px rgba(255,255,255,.25);"></div>
    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 20%; transform: translateX(-50%); background: linear-gradient(90deg, rgba(124,77,255,.9), rgba(158,120,255,.95));"></div>
    <div style="position: absolute; left: 0; right: 0; top: 46%; height: 18%; background: linear-gradient(180deg, rgba(124,77,255,.9), rgba(158,120,255,.95));"></div>
    <div id="glid" style="position: absolute; left: -4%; right: -4%; top: -14%; height: 30%; transform: translateZ(1px); border-radius: 8px; background: linear-gradient(145deg, #FFFFFF 0%, #FBE3EC 60%, #F2C6D6 100%); box-shadow: 0 18px 30px -18px rgba(0,0,0,.5);"></div>
    <div id="gbow" style="position: absolute; left: 50%; top: -22%; width: 30%; height: 30%; transform: translate(-50%, 0) translateZ(3px); border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF, #9E78FF 70%, #7C4DFF 100%); box-shadow: 0 12px 24px -10px rgba(0,0,0,.5);"></div>
  </div>
</div>
<button id="openBtn" style="cursor: pointer; font-size: 13px; font-weight: 400; letter-spacing: .22em; text-transform: uppercase; color: #241A38; background: #FFFFFF; border: 0; border-radius: 999px; padding: 13px 30px; box-shadow: 0 20px 40px -20px rgba(0,0,0,.6);">Open our journey</button>
```
Nền phía sau hộp quà: `radial-gradient(110% 90% at 50% 18%, #3B2A55 0%, #241A38 55%, #1A1228 100%)`. Text phía trên hộp: "Có một món quà cho em".

### Bản 2 — `Home.html` (màn mở đầu trang chính, cùng thiết kế, đổi kích thước)
```html
<div role="button" tabindex="0" style="cursor: pointer; perspective: 900px; padding: 10px;">
  <div style="position: relative; width: clamp(160px, 34vw, 230px); height: clamp(130px, 27vw, 184px); transform-style: preserve-3d; transform: rotateX(16deg) rotateY(-24deg);">
    <div style="position: absolute; inset: 0; border-radius: 8px; background: linear-gradient(145deg, #F4B6C8 0%, #E692AE 55%, #D67C9C 100%); box-shadow: 0 50px 80px -40px rgba(0,0,0,.65), inset 0 0 40px rgba(255,255,255,.25);"></div>
    <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 20%; transform: translateX(-50%); background: linear-gradient(90deg, rgba(124,77,255,.9), rgba(158,120,255,.95));"></div>
    <div style="position: absolute; left: 0; right: 0; top: 46%; height: 18%; background: linear-gradient(180deg, rgba(124,77,255,.9), rgba(158,120,255,.95));"></div>
    <div style="position: absolute; left: -4%; right: -4%; top: -14%; height: 30%; border-radius: 8px; background: linear-gradient(145deg, #FFFFFF 0%, #FBE3EC 60%, #F2C6D6 100%); box-shadow: 0 18px 30px -18px rgba(0,0,0,.5);"></div>
    <div style="position: absolute; left: 50%; top: -22%; width: 30%; height: 30%; transform: translate(-50%, 0) translateZ(3px); border-radius: 50%; background: radial-gradient(circle at 35% 30%, #FFFFFF, #9E78FF 70%, #7C4DFF 100%); box-shadow: 0 12px 24px -10px rgba(0,0,0,.5);"></div>
  </div>
</div>
<button style="cursor: pointer; font-size: 14px; letter-spacing: .22em; text-transform: uppercase; color: #241A38; background: #FFFFFF; border: 0; border-radius: 999px; padding: 14px 32px;">Mở hộp quà</button>
```
Chữ trên: "Có một món quà cho em" — chữ dưới: "29.09.2019". Nền: `radial-gradient(110% 90% at 50% 20%, #3B2A55 0%, #241A38 55%, #1A1228 100%)`.

---

## 3. Bản đồ SVG — `index.html` (đoạn "20.05.2026")
```html
<svg viewBox="0 0 320 200" style="width: min(86%, 760px); height: auto;">
  <path d="M14 22 C90 10, 180 18, 248 40 C286 52, 300 96, 268 140 C230 190, 120 192, 56 168 C10 150, 2 62, 14 22 Z" fill="#E6E0D2"></path>
  <path d="M248 40 C286 52, 300 96, 268 140 C290 120, 316 70, 300 34 C286 24, 262 30, 248 40 Z" fill="#CFDEE6"></path>
  <path d="M56 168 C120 192, 230 190, 268 140 C220 178, 130 180, 70 160 Z" fill="#CFDEE6"></path>
  <path d="M40 60 L120 92 M120 92 L210 76 M120 92 L140 150 M210 76 L246 118" stroke="rgba(120,110,95,.22)" stroke-width="2.5" fill="none" stroke-linecap="round"></path>
  <path d="M232 62 C196 82, 170 78, 140 98 C108 120, 96 118, 66 134" fill="none" stroke="rgba(124,77,255,.22)" stroke-width="5" stroke-linecap="round" stroke-dasharray="5 7"></path>
  <path id="route" d="M232 62 C196 82, 170 78, 140 98 C108 120, 96 118, 66 134" fill="none" stroke="#7C4DFF" stroke-width="5" stroke-linecap="round"></path>
  <circle cx="232" cy="62" r="7" fill="#7C4DFF"></circle>
  <circle cx="66" cy="134" r="7" fill="none" stroke="#7C4DFF" stroke-width="3"></circle>
  <circle cx="232" cy="62" r="5.5" fill="#F4849F"></circle>
  <text x="232" y="36" text-anchor="middle" font-family="Be Vietnam Pro" font-size="9" fill="rgba(70,60,80,.85)">306 Võ Văn Hát</text>
  <text x="232" y="46" text-anchor="middle" font-family="Be Vietnam Pro" font-size="8" fill="rgba(70,60,80,.6)">Long Trường</text>
  <text x="66" y="154" text-anchor="middle" font-family="Be Vietnam Pro" font-size="9" fill="rgba(70,60,80,.85)">Phường 13</text>
  <text x="66" y="164" text-anchor="middle" font-family="Be Vietnam Pro" font-size="8" fill="rgba(70,60,80,.6)">Tân Bình</text>
  <text x="152" y="128" font-family="Be Vietnam Pro" font-size="10" font-weight="500" fill="#7C4DFF">≈ 26 km</text>
</svg>
```

---

## 4. Dữ liệu mốc thời gian (raw) — `Home.html`
```js
milestones: [
  { date: '29 . 09 . 2019', title: 'Ngày mình bắt đầu', note: 'Nơi mọi thứ trong trang này bắt đầu.' },
  { date: 'dd . mm . yyyy', title: 'Lần đầu đi chơi cùng nhau', note: 'Thay ngày và nội dung mốc này bằng chuyện của hai người.' },
  { date: 'dd . mm . yyyy', title: 'Chuyến đi xa đầu tiên', note: 'Thay ngày và nội dung mốc này bằng chuyện của hai người.' },
  { date: 'dd . mm . yyyy', title: 'Một ngày mình không bao giờ quên', note: 'Thay ngày và nội dung mốc này bằng chuyện của hai người.' },
  { date: 'Hôm nay', title: 'Vẫn đang viết tiếp', note: 'Và sẽ còn thêm rất nhiều mốc nữa.' }
]
```
→ 3/5 mốc còn `dd . mm . yyyy` — chưa có nội dung thật.

## 5. Ảnh (Album) — `Home.html`
4 ô ảnh, hiện đều là placeholder trống, chưa gắn ảnh thật:
1. "Ảnh ngày đầu tiên"
2. "Chuyến đi cùng nhau"
3. "Một ngày bình thường"
4. "Ảnh mới nhất"

## 6. Toàn bộ chữ tĩnh khác

**`index.html`** — các dòng chữ nổi lên theo hành trình:
`2019` · `mình bắt đầu hiểu nhau` · `2025` · `20.05.2026` · `anh đi tới đây, vì có em chờ` · `và mình đi tiếp, ở đây` · `Hành trình của chúng mình vẫn chưa kết thúc.`

Màn bàn giao cuối `index.html`:
`Chuyện của chúng mình bắt đầu từ` / `29 . 09 . 2019` / **Trần Văn Giới & Lê Thị Thủy Tiên** / nút `Vào trang chính`

**`Home.html`** — lời nhắn cuối trang:
> Bảy năm, và anh vẫn chọn em.
>
> Mình đã đi qua rất nhiều ngày cùng nhau: những ngày vui, những ngày mệt, những ngày chẳng có gì đặc biệt. Anh nhớ nhất là những ngày chẳng có gì đặc biệt đó.
>
> Cảm ơn em vì đã ở đây, từ 29.09.2019 tới hôm nay. Trang này là của em.
>
> — Giới

Footer: `29 . 09 . 2019 — ∞`

---

## 7. Bảng màu & Font đang dùng

| Vai trò | Mã màu |
|---|---|
| Tím accent chính | `#7C4DFF` |
| Hồng (hộp quà, nhấn phụ) | `#F4B6C8`, `#E692AE`, `#D67C9C`, `#F4849F` |
| Nền trang chính (Home.html) | `#FFF7FA` → `#FDF0F5` → `#F7E9F3` |
| Nền tối (overlay/gate) | `#3B2A55` → `#241A38` → `#1A1228` |
| Chữ chính | `#33262E` |
| Chữ phụ | `#6E5A68`, `#5E4C59`, `#9A7F92`, `#B29CAB` |

- **Be Vietnam Pro** (200/300/400/500/600) — chữ thường.
- **Dancing Script** (500/600/700) — heading, trích dẫn, chữ ký.

---

## 8. Vị trí trong code (để tra cứu thêm)

| Thành phần | File | Dòng (khoảng) |
|---|---|---|
| Nhân vật A / B | `index.html` | 168–281 |
| Nền parallax 3 lớp (xa/giữa/gần) | `index.html` | 39–120 |
| Bản đồ | `index.html` | 305–323 |
| Hộp quà mở đầu | `index.html` | 347–362 |
| Toàn bộ 5 section nội dung + hộp quà + canvas cánh hoa | `Home.html` | nằm trong chuỗi JSON ở thẻ `<script type="__bundler/template">` — không sửa trực tiếp bằng tay, nên đưa qua Claude Design hoặc yêu cầu mình chỉnh giúp. |
