# Assets & nội dung gốc của website

Gom lại nguyên code các thành phần trực quan (nhân vật, hộp quà, bản đồ...) và nội dung chữ đang có trên site, để đưa thẳng vào Claude Design (hoặc công cụ thiết kế khác) làm tư liệu thiết kế lại.

Nguồn: `index.html` (hành trình mở đầu) và `Home.html` (trang chính).

---

## 1. Nhân vật SVG — `index.html`

Có 2 nhân vật, mỗi nhân vật có 5 giai đoạn trang phục (`data-stage`): `s19` (2019) → `shs` (đi học) → `sgr` (tốt nghiệp) → `s26` (2026) → `ssg` (Sài Gòn). Mỗi giai đoạn là 1 `<g>` riêng, ẩn/hiện bằng `opacity` khi cuộn.

### Nhân vật A (khăn đỏ)
```html
<svg
  viewBox="0 0 80 160"
  preserveAspectRatio="xMidYMax meet"
  style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;"
>
  <defs>

    <!-- ============================= -->
    <!-- SKIN -->
    <!-- ============================= -->

    <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F5D8BC"/>
      <stop offset="55%" stop-color="#EAC3A0"/>
      <stop offset="100%" stop-color="#D9A982"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- SHIRT -->
    <!-- ============================= -->

    <linearGradient id="shirtGradient" x1="0" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="65%" stop-color="#F4F5F8"/>
      <stop offset="100%" stop-color="#DDE1E8"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- PANTS -->
    <!-- ============================= -->

    <linearGradient id="pantsGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3E4E6B"/>
      <stop offset="50%" stop-color="#30405D"/>
      <stop offset="100%" stop-color="#25334C"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- HAIR -->
    <!-- ============================= -->

    <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#54434D"/>
      <stop offset="50%" stop-color="#40323B"/>
      <stop offset="100%" stop-color="#2C242C"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- SCARF -->
    <!-- ============================= -->

    <linearGradient id="scarfGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E15B5B"/>
      <stop offset="100%" stop-color="#B93643"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- SHOES -->
    <!-- ============================= -->

    <linearGradient id="shoeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#465166"/>
      <stop offset="100%" stop-color="#202735"/>
    </linearGradient>

    <!-- ============================= -->
    <!-- SHADOW -->
    <!-- ============================= -->

    <radialGradient id="groundShadow">
      <stop offset="0%" stop-color="#172235" stop-opacity=".28"/>
      <stop offset="100%" stop-color="#172235" stop-opacity="0"/>
    </radialGradient>

    <filter id="softShadow">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>

  </defs>


  <!-- ========================================================= -->
  <!-- STAGE 19 — SCHOOL / CHILD -->
  <!-- ========================================================= -->

  <g data-stage="s19">

    <!-- Ground shadow -->
    <ellipse
      cx="40"
      cy="153"
      rx="20"
      ry="3.5"
      fill="url(#groundShadow)"
    />


    <!-- BACK LEG -->
    <g data-part="legb">

      <path
        d="
          M32 89
          C32 104 31.5 125 31.5 143
          L39 143
          L40 90
          Z
        "
        fill="url(#pantsGradient)"
      />

      <!-- shoe -->
      <path
        d="
          M30 140
          C32 138.5 37 138.5 39 140
          L41 146
          C41 148 38 149 33 149
          L28 148
          C28 145 29 142 30 140
        "
        fill="url(#shoeGradient)"
      />

    </g>


    <!-- FRONT LEG -->
    <g data-part="legf">

      <path
        d="
          M40 90
          L48 90
          C48 108 48.5 126 49 143
          L40 143
          Z
        "
        fill="url(#pantsGradient)"
      />

      <!-- shoe -->
      <path
        d="
          M40 140
          C43 138.5 49 139 51 141
          L54 146
          C54 148 51 149 46 149
          L40 148
          Z
        "
        fill="url(#shoeGradient)"
      />

    </g>


    <!-- BACK ARM -->
    <g data-part="armb">

      <path
        d="
          M23 54
          C19 59 18 68 18 76
          C18 81 19.5 83 21.5 82
          C23.5 81.5 24.5 78 24.5 74
          L27 59
          Z
        "
        fill="url(#skinGradient)"
      />

    </g>


    <!-- BODY -->
    <path
      d="
        M27 49
        C31 46.5 35 45.5 40 45.5
        C45 45.5 49 46.5 53 49
        L56 88
        C52 92
        46 94
        40 94
        C34 94 28 92
        24 88
        Z
      "
      fill="url(#shirtGradient)"
    />


    <!-- subtle shirt side shading -->
    <path
      d="
        M27 53
        C26 64 26 76 27 87
      "
      fill="none"
      stroke="#D4D8E0"
      stroke-width="1"
      opacity=".5"
    />


    <!-- COLLAR -->
    <path
      d="
        M28 49
        L39 47
        L35 58
        L28 52
        Z
      "
      fill="#FFFFFF"
    />

    <path
      d="
        M52 49
        L41 47
        L45 58
        L52 52
        Z
      "
      fill="#FFFFFF"
    />


    <!-- SCARF -->
    <path
      data-part="scarf"
      d="
        M35 51
        L40 54
        L45 51
        L43 61
        L40 57
        L36 65
        L35 58
        Z
      "
      fill="url(#scarfGradient)"
    />

    <circle
      cx="40"
      cy="54"
      r="2.2"
      fill="#C94049"
    />


    <!-- FRONT ARM -->
    <g data-part="armf">

      <path
        d="
          M53 54
          C57 59 59 68 59 76
          C59 81 57.5 83 55.5 82
          C53.5 81.5 52.5 78 52.5 74
          L50 59
          Z
        "
        fill="url(#skinGradient)"
      />

    </g>


    <!-- NECK -->
    <path
      d="
        M36.5 41
        L43.5 41
        L44 49
        C42 51 38 51 36 49
        Z
      "
      fill="url(#skinGradient)"
    />


    <!-- HEAD -->
    <path
      d="
        M30 26
        C30 19 34 14.5 40 14.5
        C46 14.5 50 19 50 26
        L49 35
        C48 42 44 46 40 46
        C36 46 32 42 31 35
        Z
      "
      fill="url(#skinGradient)"
    />


    <!-- EARS -->
    <ellipse
      cx="30.5"
      cy="31"
      rx="2"
      ry="3.5"
      fill="#E4B58F"
    />

    <ellipse
      cx="49.5"
      cy="31"
      rx="2"
      ry="3.5"
      fill="#E4B58F"
    />


    <!-- HAIR -->
    <path
      d="
        M30 27
        C29 20
        31 16
        35 14
        C39 11.5
        45 13
        48 16
        C51 19
        51 24
        50 29
        C48 25
        46 23
        43 22
        C40 21
        37 22
        35 24
        C33 26
        31 27
        30 27
        Z
      "
      fill="url(#hairGradient)"
    />

    <!-- hair highlight -->
    <path
      d="
        M34 17
        C37 14.5 41 14 44 16
      "
      fill="none"
      stroke="#725B66"
      stroke-width="1"
      stroke-linecap="round"
      opacity=".5"
    />

  </g>



  <!-- ========================================================= -->
  <!-- STAGE SHS — TEEN -->
  <!-- ========================================================= -->

  <g data-stage="shs" opacity="0">

    <ellipse
      cx="40"
      cy="153"
      rx="20"
      ry="3.5"
      fill="url(#groundShadow)"
    />


    <!-- BACK LEG -->
    <g data-part="legb">

      <path
        d="
          M32 88
          L40 88
          L39 143
          L31 143
          Z
        "
        fill="#293548"
      />

      <path
        d="
          M30 140
          C32 139 37 139 39 140
          L41 146
          C41 148 38 149 33 149
          L28 148
          C28 145 29 142 30 140
        "
        fill="url(#shoeGradient)"
      />

    </g>


    <!-- FRONT LEG -->
    <g data-part="legf">

      <path
        d="
          M40 88
          L48 88
          L49 143
          L40 143
          Z
        "
        fill="#34425A"
      />

      <path
        d="
          M40 140
          C43 139 49 139 51 141
          L54 146
          C54 148 51 149 46 149
          L40 148
          Z
        "
        fill="url(#shoeGradient)"
      />

    </g>


    <!-- BACK ARM -->
    <g data-part="armb">

      <path
        d="
          M24 52
          C20 57 19 67 19 76
          C19 80 20.5 82 22.5 82
          C24.5 81 25 78 25 75
          L28 56
          Z
        "
        fill="url(#skinGradient)"
      />

    </g>


    <!-- BODY -->
    <path
      d="
        M27 47
        C31 45 35 44.5 40 44.5
        C45 44.5 49 45 53 47
        L56 88
        C52 92 46 93 40 93
        C34 93 28 92 24 88
        Z
      "
      fill="url(#shirtGradient)"
    />


    <!-- collar -->
    <path
      d="
        M29 47
        L40 46
        L36 56
        Z
      "
      fill="#FFFFFF"
    />

    <path
      d="
        M51 47
        L40 46
        L44 56
        Z
      "
      fill="#FFFFFF"
    />


    <!-- FRONT ARM -->
    <g data-part="armf">

      <path
        d="
          M53 52
          C57 57 58 67 58 76
          C58 80 57 82 55 82
          C53 81 52 78 52 75
          L49 56
          Z
        "
        fill="url(#skinGradient)"
      />

    </g>


    <!-- neck -->
    <path
      d="
        M36 40
        L44 40
        L44 47
        C42 49 38 49 36 47
        Z
      "
      fill="url(#skinGradient)"
    />


    <!-- head -->
    <path
      d="
        M29 26
        C29 19 34 14
        40 14
        C46 14 51 19 51 26
        L50 35
        C49 41 45 45 40 45
        C35 45 31 41 30 35
        Z
      "
      fill="url(#skinGradient)"
    />


    <!-- hair -->
    <path
      d="
        M29 27
        C29 19 34 14 40 14
        C46 14 51 19 51 27
        C48 23
        45 21
        41 21
        C36 21
        33 25
        29 27
        Z
      "
      fill="url(#hairGradient)"
    />

  </g>



  <!-- ========================================================= -->
  <!-- STAGE SGR — GRADUATION -->
  <!-- ========================================================= -->

  <g data-stage="sgr" opacity="0">

    <ellipse
      cx="40"
      cy="153"
      rx="21"
      ry="3.5"
      fill="url(#groundShadow)"
    />


    <!-- BACK LEG -->
    <g data-part="legb">

      <path
        d="
          M32 98
          L40 98
          L39 143
          L31 143
          Z
        "
        fill="#292532"
      />

    </g>


    <!-- FRONT LEG -->
    <g data-part="legf">

      <path
        d="
          M40 98
          L48 98
          L49 143
          L40 143
          Z
        "
        fill="#302B3C"
      />

    </g>


    <!-- shoes -->
    <path
      d="
        M30 140
        C32 139 37 139 39 140
        L41 146
        C41 148 38 149 33 149
        L28 148
        C28 145 29 142 30 140
      "
      fill="url(#shoeGradient)"
    />

    <path
      d="
        M40 140
        C43 139 49 139 51 141
        L54 146
        C54 148 51 149 46 149
        L40 148
        Z
      "
      fill="url(#shoeGradient)"
    />


    <!-- ROBE -->
    <path
      d="
        M27 45
        L53 45
        L57 121
        L23 121
        Z
      "
      fill="#403956"
    />


    <!-- robe highlight -->
    <path
      d="
        M28 47
        L39 47
        L39 119
        L24 119
        Z
      "
      fill="#51496A"
      opacity=".45"
    />


    <!-- BACK ARM -->
    <g data-part="armb">

      <path
        d="
          M26 47
          C22 54 20 69 20 80
          C20 84 22 86 24 85
          C27 84 28 80 28 75
          L31 51
          Z
        "
        fill="#383248"
      />

    </g>


    <!-- FRONT ARM -->
    <g data-part="armf">

      <path
        d="
          M54 47
          C58 54 60 69 60 80
          C60 84 58 86 56 85
          C53 84 52 80 52 75
          L49 51
          Z
        "
        fill="#383248"
      />

    </g>


    <!-- STOLE -->
    <path
      d="
        M35 45
        L40 62
        L45 45
        L43 76
        L40 68
        L37 76
        Z
      "
      fill="#F0EFF4"
    />


    <!-- neck -->
    <path
      d="
        M36 40
        L44 40
        L44 46
        C42 48 38 48 36 46
        Z
      "
      fill="url(#skinGradient)"
    />


    <!-- head -->
    <circle
      cx="40"
      cy="27"
      r="11"
      fill="url(#skinGradient)"
    />


    <!-- hair -->
    <path
      d="
        M29 27
        C29 18
        34 14
        40 14
        C46 14
        51 18
        51 27
        C48 23
        45 21
        41 21
        C36 21
        33 24
        29 27
        Z
      "
      fill="url(#hairGradient)"
    />


    <!-- GRADUATION CAP -->
    <g data-part="cap">

      <!-- top -->
      <path
        d="
          M25 16
          L40 9
          L55 16
          L40 23
          Z
        "
        fill="#29243C"
      />

      <!-- center -->
      <path
        d="
          M31 17
          L40 13
          L49 17
          L48 20
          C43 22
          37 22
          32 20
          Z
        "
        fill="#36304D"
      />

      <!-- tassel -->
      <path
        d="
          M53 16
          C56 21
          55 27
          54 31
        "
        fill="none"
        stroke="#D2B16E"
        stroke-width="1.2"
        stroke-linecap="round"
      />

      <circle
        cx="54"
        cy="32"
        r="1.5"
        fill="#D8B675"
      />

    </g>

  </g>



  <!-- ========================================================= -->
  <!-- STAGE S26 — MATURE GRADUATE -->
  <!-- ========================================================= -->

  <g data-stage="s26" opacity="0">

    <ellipse
      cx="40"
      cy="153"
      rx="21"
      ry="3.5"
      fill="url(#groundShadow)"
    />


    <!-- legs -->
    <g data-part="legb">

      <path
        d="
          M32 99
          L40 99
          L39 143
          L31 143
          Z
        "
        fill="#292335"
      />

    </g>


    <g data-part="legf">

      <path
        d="
          M40 99
          L48 99
          L49 143
          L40 143
          Z
        "
        fill="#30293F"
      />

    </g>


    <!-- shoes -->
    <path
      d="
        M30 140
        C32 139 37 139 39 140
        L41 146
        C41 148 38 149 33 149
        L28 148
        C28 145 29 142 30 140
      "
      fill="url(#shoeGradient)"
    />

    <path
      d="
        M40 140
        C43 139 49 139 51 141
        L54 146
        C54 148 51 149 46 149
        L40 148
        Z
      "
      fill="url(#shoeGradient)"
    />


    <!-- robe -->
    <path
      d="
        M27 45
        L53 45
        L57 121
        L23 121
        Z
      "
      fill="#51486F"
    />


    <!-- robe light -->
    <path
      d="
        M28 47
        L40 47
        L39 119
        L24 119
        Z
      "
      fill="#61577D"
      opacity=".35"
    />


    <!-- stole -->
    <path
      d="
        M35 45
        L40 64
        L45 45
        L43 76
        L40 68
        L37 76
        Z
      "
      fill="#EEEAF2"
    />


    <!-- back arm -->
    <g data-part="armb">

      <path
        d="
          M26 47
          C22 54 20 69 20 80
          C20 84 22 86 24 85
          C27 84 28 80 28 75
          L31 51
          Z
        "
        fill="#3D3557"
      />

    </g>


    <!-- front arm -->
    <g data-part="armf">

      <path
        d="
          M54 47
          C58 54 60 69 60 80
          C60 84 58 86 56 85
          C53 84 52 80 52 75
          L49 51
          Z
        "
        fill="#3D3557"
      />

    </g>


    <!-- neck -->
    <path
      d="
        M36 40
        L44 40
        L44 46
        C42 48 38 48 36 46
        Z
      "
      fill="#EBC6A4"
    />


    <!-- head -->
    <circle
      cx="40"
      cy="27"
      r="11"
      fill="#F0DFC8"
    />


    <!-- hair -->
    <path
      d="
        M29 27
        C29 18
        34 14
        40 14
        C46 14
        51 18
        51 27
        C48 23
        45 21
        41 21
        C36 21
        33 24
        29 27
        Z
      "
      fill="#3A2F38"
    />


    <!-- cap -->
    <g data-part="cap">

      <path
        d="
          M25 16
          L40 9
          L55 16
          L40 23
          Z
        "
        fill="#29243C"
      />

      <path
        d="
          M31 17
          L40 13
          L49 17
          L48 20
          C43 22
          37 22
          32 20
          Z
        "
        fill="#36304D"
      />

      <path
        d="
          M53 16
          C56 21
          55 27
          54 31
        "
        fill="none"
        stroke="#D2B16E"
        stroke-width="1.2"
        stroke-linecap="round"
      />

      <circle
        cx="54"
        cy="32"
        r="1.5"
        fill="#D8B675"
      />

    </g>

  </g>



  <!-- ========================================================= -->
  <!-- STAGE SSG — DARK / SPECIAL -->
  <!-- ========================================================= -->

  <g data-stage="ssg" opacity="0">

    <ellipse
      cx="40"
      cy="153"
      rx="22"
      ry="4"
      fill="url(#groundShadow)"
    />


    <!-- back leg -->
    <g data-part="legb">

      <path
        d="
          M32 91
          L40 91
          L39 143
          L31 143
          Z
        "
        fill="#24202C"
      />

    </g>


    <!-- front leg -->
    <g data-part="legf">

      <path
        d="
          M40 91
          L48 91
          L49 143
          L40 143
          Z
        "
        fill="#2E2937"
      />

    </g>


    <!-- shoes -->
    <path
      d="
        M30 140
        C32 139 37 139 39 140
        L41 146
        C41 148 38 149 33 149
        L28 148
        C28 145 29 142 30 140
      "
      fill="#242A35"
    />

    <path
      d="
        M40 140
        C43 139 49 139 51 141
        L54 146
        C54 148 51 149 46 149
        L40 148
        Z
      "
      fill="#242A35"
    />


    <!-- BODY -->
    <path
      d="
        M26 47
        C31 44
        35 43
        40 43
        C45 43
        50 44
        54 47
        L57 91
        C52 94
        46 95
        40 95
        C34 95
        28 94
        23 91
        Z
      "
      fill="#302B38"
    />


    <!-- subtle body light -->
    <path
      d="
        M29 50
        C28 63 28 77 29 89
      "
      fill="none"
      stroke="#514857"
      stroke-width="1"
      opacity=".5"
    />


    <!-- back arm -->
    <g data-part="armb">

      <path
        d="
          M25 49
          C21 56 20 69 20 78
          C20 82 22 84 24 83
          C26 82 27 78 27 74
          L30 52
          Z
        "
        fill="#29242F"
      />

    </g>


    <!-- front arm -->
    <g data-part="armf">

      <path
        d="
          M55 49
          C59 56 60 69 60 78
          C60 82 58 84 56 83
          C54 82 53 78 53 74
          L50 52
          Z
        "
        fill="#29242F"
      />

    </g>


    <!-- neck -->
    <path
      d="
        M36 40
        L44 40
        L44 46
        C42 48 38 48 36 46
        Z
      "
      fill="#302B38"
    />


    <!-- head -->
    <circle
      cx="40"
      cy="27"
      r="11"
      fill="#302B38"
    />


    <!-- hair -->
    <path
      d="
        M29 27
        C29 18
        34 14
        40 14
        C46 14
        51 18
        51 27
        C48 23
        45 21
        41 21
        C36 21
        33 24
        29 27
        Z
      "
      fill="#211D27"
    />


    <!-- warm rim light -->
    <path
      d="
        M51 20
        C55 29
        55 38
        52 45
      "
      fill="none"
      stroke="#FFD79A"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity=".35"
    />

  </g>

</svg>
```

> Lưu ý nếu đưa bản này vào `index.html` thật: viewBox đổi từ `0 0 60 150` → `0 0 80 160`, các phần dùng `fill="url(#...)"` cần có `<defs>` đi kèm, và tâm xoay tay/chân trong JS (`rotate(... 30 90)`, `rotate(... 30 48)`) đang tính theo hệ toạ độ cũ (tâm x=30) — cần đổi lại cho khớp hệ toạ độ mới (tâm x=40) thì animation đi bộ mới đúng.

### Nhân vật B (tóc dài, áo dài trắng ở giai đoạn `shs`)
```html
<svg
  viewBox="0 0 80 160"
  preserveAspectRatio="xMidYMax meet"
  style="position:absolute; inset:0; width:100%; height:100%; overflow:visible;"
>
  <defs>

    <!-- SKIN -->
    <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F7DCC2"/>
      <stop offset="55%" stop-color="#EFC9A9"/>
      <stop offset="100%" stop-color="#DDAF8C"/>
    </linearGradient>

    <!-- SHIRT -->
    <linearGradient id="shirtGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="65%" stop-color="#F7F7F9"/>
      <stop offset="100%" stop-color="#E0E3EA"/>
    </linearGradient>

    <!-- PANTS -->
    <linearGradient id="pantsGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#52637F"/>
      <stop offset="50%" stop-color="#3E4E6B"/>
      <stop offset="100%" stop-color="#2D3A52"/>
    </linearGradient>

    <!-- HAIR -->
    <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5A454F"/>
      <stop offset="50%" stop-color="#403139"/>
      <stop offset="100%" stop-color="#2B2229"/>
    </linearGradient>

    <!-- SCARF -->
    <linearGradient id="scarfGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E76568"/>
      <stop offset="100%" stop-color="#B93C47"/>
    </linearGradient>

    <!-- ROBE -->
    <linearGradient id="robeGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#51486F"/>
      <stop offset="55%" stop-color="#423A5E"/>
      <stop offset="100%" stop-color="#332D4B"/>
    </linearGradient>

    <!-- DARK -->
    <linearGradient id="darkGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3A3445"/>
      <stop offset="55%" stop-color="#2D2835"/>
      <stop offset="100%" stop-color="#211D28"/>
    </linearGradient>

    <!-- SHOES -->
    <linearGradient id="shoeGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4D586A"/>
      <stop offset="100%" stop-color="#202733"/>
    </linearGradient>

    <!-- GROUND -->
    <radialGradient id="groundShadow">
      <stop offset="0%" stop-color="#152033" stop-opacity=".30"/>
      <stop offset="100%" stop-color="#152033" stop-opacity="0"/>
    </radialGradient>

  </defs>

  <g data-stage="s19">
    <ellipse cx="40" cy="151.5" rx="18" ry="3" fill="url(#groundShadow)"/>
    <g data-part="legb">
      <path d="M32 88 C31.5 103 31.5 124 31.5 142 L38.5 142 L40 89 Z" fill="url(#pantsGradient)"/>
      <path d="M30 140 C32 138.5 37 139 39 140 L41 146 C41 148 38 149 33 149 L28 148 C28 145 29 142 30 140 Z" fill="url(#shoeGradient)"/>
    </g>
    <g data-part="legf">
      <path d="M40 89 L48 89 C48 106 48.5 126 49 142 L40 142 Z" fill="url(#pantsGradient)"/>
      <path d="M40 140 C43 138.5 49 139 51 141 L54 146 C54 148 51 149 46 149 L40 148 Z" fill="url(#shoeGradient)"/>
    </g>
    <g data-part="armb"><path d="M23 53 C19.5 58 18 68 18 76 C18 80.5 19.5 82.5 21.5 82 C23.5 81.5 24.5 78 24.5 74 L27 59 Z" fill="url(#skinGradient)"/></g>
    <path d="M27 48 C31 46 35 45 40 45 C45 45 49 46 53 48 L56 88 C52 92 46 94 40 94 C34 94 28 92 24 88 Z" fill="url(#shirtGradient)"/>
    <path d="M27 52 C26 63 26 77 27 87" fill="none" stroke="#D4D8E0" stroke-width="1" opacity=".55"/>
    <path d="M28 49 L39 47 L35 58 L28 52 Z" fill="#FFFFFF"/>
    <path d="M52 49 L41 47 L45 58 L52 52 Z" fill="#FFFFFF"/>
    <path data-part="scarf" d="M35 51 L40 54 L45 51 L43 61 L40 57 L36 65 L35 58 Z" fill="url(#scarfGradient)"/>
    <circle cx="40" cy="54" r="2.1" fill="#C9414B"/>
    <g data-part="armf"><path d="M53 53 C57 58 59 68 59 76 C59 80.5 57.5 82.5 55.5 82 C53.5 81.5 52.5 78 52.5 74 L50 59 Z" fill="url(#skinGradient)"/></g>
    <path d="M36.5 41 L43.5 41 L44 49 C42 51 38 51 36 49 Z" fill="url(#skinGradient)"/>
    <ellipse cx="30.5" cy="31" rx="2" ry="3.2" fill="#E2B28E"/>
    <ellipse cx="49.5" cy="31" rx="2" ry="3.2" fill="#E2B28E"/>
    <path d="M30 26 C30 19 34 14.5 40 14.5 C46 14.5 50 19 50 26 L49 35 C48 42 44 46 40 46 C36 46 32 42 31 35 Z" fill="url(#skinGradient)"/>
    <path data-part="hair" d="M30 27 C29 20 31 16 35 14 C39 11.5 45 13 48 16 C51 19 51 24 50 29 C48 25 46 23 43 22 C40 21 37 22 35 24 C33 26 31 27 30 27 Z" fill="url(#hairGradient)"/>
    <path d="M34 17 C37 14.5 41 14 44 16" fill="none" stroke="#765C67" stroke-width="1" stroke-linecap="round" opacity=".5"/>
  </g>

  <g data-stage="shs" opacity="0">
    <ellipse cx="40" cy="151.5" rx="19" ry="3" fill="url(#groundShadow)"/>
    <g data-part="legb">
      <path d="M32 86 L40 86 L39 143 L31 143 Z" fill="#303B52"/>
      <path d="M30 140 C32 138.5 37 139 39 140 L41 146 C41 148 38 149 33 149 L28 148 C28 145 29 142 30 140" fill="url(#shoeGradient)"/>
    </g>
    <g data-part="legf">
      <path d="M40 86 L48 86 L49 143 L40 143 Z" fill="#3A465E"/>
      <path d="M40 140 C43 138.5 49 139 51 141 L54 146 C54 148 51 149 46 149 L40 148" fill="url(#shoeGradient)"/>
    </g>
    <g data-part="armb"><path d="M24 48 C20 55 19 67 19 76 C19 80 20.5 82 22.5 82 C24.5 81 25 78 25 75 L28 55 Z" fill="url(#skinGradient)"/></g>
    <path d="M27 44 C31 42 35 41 40 41 C45 41 49 42 53 44 L55 88 C51 91 46 92 40 92 C34 92 29 91 25 88 Z" fill="#FFFFFF"/>
    <path data-part="aodai" d="M25 85 C31 88 35 89 40 89 C45 89 50 88 55 85 L58 126 C52 129 46 130 40 130 C34 130 28 129 22 126 Z" fill="rgba(255,255,255,.88)"/>
    <path d="M40 91 C38 105 38 117 39 128" fill="none" stroke="#D9DCE4" stroke-width="1" opacity=".55"/>
    <g data-part="armf"><path d="M53 48 C57 54 58 67 58 76 C58 80 57 82 55 82 C53 81 52 78 52 75 L49 55 Z" fill="url(#skinGradient)"/></g>
    <path d="M36 39 L44 39 L44 45 C42 47 38 47 36 45 Z" fill="url(#skinGradient)"/>
    <path d="M29 24 C29 18 34 13 40 13 C46 13 51 18 51 24 L50 33 C49 40 45 44 40 44 C35 44 31 40 30 33 Z" fill="url(#skinGradient)"/>
    <path data-part="hair" d="M29 26 C29 18 34 13 40 13 C46 13 51 18 51 26 C48 22 45 20 41 20 C36 20 33 23 29 26 Z" fill="url(#hairGradient)"/>
  </g>

  <g data-stage="sgr" opacity="0">
    <ellipse cx="40" cy="151.5" rx="21" ry="3.5" fill="url(#groundShadow)"/>
    <g data-part="legb"><path d="M32 99 L40 99 L39 143 L31 143 Z" fill="#292532"/></g>
    <g data-part="legf"><path d="M40 99 L48 99 L49 143 L40 143 Z" fill="#332D40"/></g>
    <path d="M30 140 C32 138.5 37 139 39 140 L41 146 C41 148 38 149 33 149 L28 148 C28 145 29 142 30 140" fill="url(#shoeGradient)"/>
    <path d="M40 140 C43 138.5 49 139 51 141 L54 146 C54 148 51 149 46 149 L40 148" fill="url(#shoeGradient)"/>
    <path d="M27 45 L53 45 L57 121 L23 121 Z" fill="url(#robeGradient)"/>
    <path d="M28 47 L39 47 L39 119 L24 119 Z" fill="#5B5275" opacity=".35"/>
    <g data-part="armb"><path d="M26 47 C22 54 20 69 20 80 C20 84 22 86 24 85 C27 84 28 80 28 75 L31 51 Z" fill="#3A344B"/></g>
    <g data-part="armf"><path d="M54 47 C58 54 60 69 60 80 C60 84 58 86 56 85 C53 84 52 80 52 75 L49 51 Z" fill="#3A344B"/></g>
    <path d="M35 45 L40 63 L45 45 L43 76 L40 68 L37 76 Z" fill="#F0EFF4"/>
    <path d="M36 40 L44 40 L44 46 C42 48 38 48 36 46 Z" fill="url(#skinGradient)"/>
    <circle cx="40" cy="27" r="11" fill="url(#skinGradient)"/>
    <path data-part="hair" d="M29 27 C29 18 34 14 40 14 C46 14 51 18 51 27 C48 23 45 21 41 21 C36 21 33 24 29 27 Z" fill="url(#hairGradient)"/>
    <g data-part="cap">
      <path d="M25 16 L40 9 L55 16 L40 23 Z" fill="#29243C"/>
      <path d="M31 17 L40 13 L49 17 L48 20 C43 22 37 22 32 20 Z" fill="#38314E"/>
      <path d="M53 16 C56 21 55 27 54 31" fill="none" stroke="#D5B36E" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="54" cy="32" r="1.5" fill="#DDBD78"/>
    </g>
  </g>

  <g data-stage="s26" opacity="0">
    <ellipse cx="40" cy="151.5" rx="21" ry="3.5" fill="url(#groundShadow)"/>
    <g data-part="legb"><path d="M32 99 L40 99 L39 143 L31 143 Z" fill="#332D40"/></g>
    <g data-part="legf"><path d="M40 99 L48 99 L49 143 L40 143 Z" fill="#3C344B"/></g>
    <path d="M30 140 C32 138.5 37 139 39 140 L41 146 C41 148 38 149 33 149 L28 148 C28 145 29 142 30 140" fill="url(#shoeGradient)"/>
    <path d="M40 140 C43 138.5 49 139 51 141 L54 146 C54 148 51 149 46 149 L40 148" fill="url(#shoeGradient)"/>
    <path d="M27 45 L53 45 L57 121 L23 121 Z" fill="#51486F"/>
    <path d="M28 47 L40 47 L39 119 L24 119 Z" fill="#665D80" opacity=".32"/>
    <path d="M35 45 L40 64 L45 45 L43 76 L40 68 L37 76 Z" fill="#EEEAF2"/>
    <g data-part="armb"><path d="M26 47 C22 54 20 69 20 80 C20 84 22 86 24 85 C27 84 28 80 28 75 L31 51 Z" fill="#41395C"/></g>
    <g data-part="armf"><path d="M54 47 C58 54 60 69 60 80 C60 84 58 86 56 85 C53 84 52 80 52 75 L49 51 Z" fill="#41395C"/></g>
    <path d="M36 40 L44 40 L44 46 C42 48 38 48 36 46 Z" fill="#EBC5A2"/>
    <circle cx="40" cy="27" r="11" fill="#F0DFC8"/>
    <path data-part="hair" d="M29 27 C29 18 34 14 40 14 C46 14 51 18 51 27 C48 23 45 21 41 21 C36 21 33 24 29 27 Z" fill="#3A2F38"/>
    <g data-part="cap">
      <path d="M25 16 L40 9 L55 16 L40 23 Z" fill="#29243C"/>
      <path d="M31 17 L40 13 L49 17 L48 20 C43 22 37 22 32 20 Z" fill="#38314E"/>
      <path d="M53 16 C56 21 55 27 54 31" fill="none" stroke="#D5B36E" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="54" cy="32" r="1.5" fill="#DDBD78"/>
    </g>
  </g>

  <g data-stage="ssg" opacity="0">
    <ellipse cx="40" cy="151.5" rx="22" ry="4" fill="url(#groundShadow)"/>
    <g data-part="legb"><path d="M32 87 L40 87 L39 143 L31 143 Z" fill="#25212D"/></g>
    <g data-part="legf"><path d="M40 87 L48 87 L49 143 L40 143 Z" fill="#2D2836"/></g>
    <path d="M30 140 C32 138.5 37 139 39 140 L41 146 C41 148 38 149 33 149 L28 148 C28 145 29 142 30 140" fill="#242A35"/>
    <path d="M40 140 C43 138.5 49 139 51 141 L54 146 C54 148 51 149 46 149 L40 148" fill="#242A35"/>
    <path d="M26 46 C31 43.5 35 42.5 40 42.5 C45 42.5 50 43.5 54 46 L57 91 C52 94 46 95 40 95 C34 95 28 94 23 91 Z" fill="url(#darkGradient)"/>
    <path d="M29 50 C28 63 28 77 29 89" fill="none" stroke="#554B5B" stroke-width="1" opacity=".45"/>
    <g data-part="armb"><path d="M25 48 C21 55 20 68 20 78 C20 82 22 84 24 83 C26 82 27 78 27 74 L30 52 Z" fill="#29242F"/></g>
    <g data-part="armf"><path d="M55 48 C59 55 60 68 60 78 C60 82 58 84 56 83 C54 82 53 78 53 74 L50 52 Z" fill="#29242F"/></g>
    <circle cx="40" cy="27" r="11" fill="#302B38"/>
    <path data-part="hair" d="M29 27 C29 18 34 14 40 14 C46 14 51 18 51 27 C48 23 45 21 41 21 C36 21 33 24 29 27 Z" fill="#211D27"/>
    <path d="M51 20 C55 29 55 38 52 45" fill="none" stroke="#FFD79A" stroke-width="1.5" stroke-linecap="round" opacity=".38"/>
  </g>
</svg>
```

> Đã áp vào `index.html` thật: viewBox `80×160`, container `#figB` đổi thành `80×160px`, gradient id đổi tên thêm hậu tố `B` (`skinGradientB`, `shirtGradientB`...) để không trùng với các gradient của nhân vật A. Tâm xoay tay/chân trong JS cho nhân vật B cũng đã đổi từ `(30,90)/(30,48)/(30,36)` sang `(40,92)/(40,49)/(40,40)` để khớp hệ toạ độ mới. Nhân vật B cũng được dời sang `left: 90px` (từ 70px) và toàn bộ đường cong khoảng cách giữa 2 người (`gap`) trong JS tăng thêm 20px ở mọi mốc, để không bị đè lên nhân vật A rộng hơn.

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
