# Dokkan Decor — Landing Page Project Reference

> **Repo:** `https://github.com/KRU4/dokkan-decor.git`  
> **Branch:** `master`  
> **File:** `web/index.html` (single-file, all CSS/JS inline)  
> **Last updated:** 2026-06-20

---

## 1. Project Overview

Single-file Arabic (RTL) landing page for **Dokkan Decor — كورس الطباعة على القماش من البيت** (fabric printing course from home). The page is a high-converting VSL-style sales page targeting Arabic-speaking women, built mobile-first with zero external JS libraries.

---

## 2. Design System

### Color Palette — Rose / Magenta / Red Mix

```css
--rose-primary: #e11d74;        /* buttons, price, progress, stars, checkmarks, chapter toggles */
--rose-dark: #b9105e;           /* button hover */
--rose-light: #ff6fa5;          /* secondary highlights */
--magenta: #c2185b;             /* alternate accent */
--red-accent: #e63950;          /* countdown, strikethrough prices, urgency badges */
--blush-bg-1: #fff0f3;          /* lightest page bg */
--blush-bg-2: #ffe0e8;          /* mid page bg */
--blush-bg-3: #ffe8ef;          /* card backgrounds */
--rose-card-border: rgba(225,29,116,0.35);
--stars-color: #e11d74;         /* stars are ROSE, never gold */
--white: #ffffff;
--dark-text: #2a0f1c;           /* headings — near-black with rose undertone */
--gray-text: #6b5a61;           /* body copy — muted rose-gray */
--card-bg: rgba(225,29,116,0.04);
--card-bg-light: #fde8ee;       /* chapter title strip */
--page-bg: linear-gradient(180deg, #fff0f3 0%, #ffe0e8 40%, #fff0f3 100%);

/* Dark accents (NOT pure black): */
--navbar-bg: #580f30;           /* deep rose-wine */
--dark-placeholder: #4a0b28;   /* VSL placeholder, bonus books, video wraps */
```

### Typography

- **Font:** Cairo (Google Fonts) — weights 400, 600, 700, 800, 900
- **Direction:** RTL (`<html dir="rtl" lang="ar">`)
- **Max width:** 1100px
- **Card radius:** 16px
- **Button radius:** 10px / 12px

### Key Rules

- **NO green** anywhere (no `#00e676`, green was the original color)
- **NO gold/yellow stars** — stars are rose `#e11d74`
- **NO near-black** — darkest is `#580f30` (deep rose-wine) or `#2a0f1c` (text)
- **Light background** — blush gradient, NOT dark
- Background of white sections: `#fff`
- All CTA buttons: rose background, white text

---

## 3. Page Sections (in order)

| # | Section | Background | Key Content |
|---|---------|-----------|-------------|
| 1 | **Sticky Navbar** | `#580f30` | Countdown timer (5min), CTA button |
| 2 | **Hero** | Blush gradient | Badge, headline, VSL placeholder, CTA, avatars, stars |
| 3 | **Pricing** | Blush gradient | Early bird card, EGP600, progress bar 65% |
| 4 | **Expert Testimonials** | White `#fff` | 3 cards — نورا, سمية, منى |
| 5 | **Journey Timeline** | White `#fff` | 2020–2025, alternating left/right, 6 items |
| 6 | **CTA Strip** | Blush gradient | Button, avatars, stars, rating text |
| 7 | **Success Stories** | White `#fff` | **2 YouTube iframes only** |
| 8 | **Curriculum** | Blush gradient | 5 chapters with accordion toggles |
| 9 | **Bonuses** | Blush gradient | 3 gift cards with real images |
| 10 | **Value Stack** | White `#fff` | 8 items (5 chapters + 3 gifts), EGP600 |
| 11 | **Guarantee** | Blush gradient | Money-back guarantee card |
| 12 | **FAQ** | Blush gradient | 5 questions with accordion |

### Section Details

#### 1. Navbar
- `position: fixed; z-index: 9999; height: 70px`
- Left: countdown label + timer blocks (يوم : ساعة : دقيقة : ثانية)
- Timer starts at 5 minutes, counts down
- Right: `اشتركي الآن` CTA button

#### 2. Hero
- Badge: `🏠 كورس الطباعة على القماش من البيت`
- Headline: `+2500 بنت بدأت الطباعة على القماش…`
- VSL placeholder: dark `#4a0b28` div with player controls UI
- CTA + 8 overlapping avatar circles + rose stars + rating text

#### 3. Pricing
- Centered card, max-width 600px
- Price: **EGP600** (huge rose text, 56px)
- Full price reference: EGP2,000
- Progress bar at 65% (65/100 enrolled, 35 remaining)

#### 4. Expert Testimonials
- 3-column grid (stacks to 1 on mobile)
- Uses real images from section folders for avatars
- Blue verified checkmark (neutral UI element, kept blue)
- Stars are rose-colored, 4/5 for card 1, 5/5 for cards 2 & 3

#### 5. Journey Timeline
- "My JOURNEY" decorative graphic (Georgia serif, rose)
- 6 items: 2020 through 2025, alternating photo left/right
- Year numbers in rose, 48px bold
- Uses real images from section1/section2 folders

#### 6. CTA Strip
- Simple centered CTA with social proof (avatars + stars + rating)

#### 7. Success Stories — ⚠️ 2 Cards Only
- Two YouTube video iframes, side by side
- Card 1: `https://www.youtube.com/embed/uhW31HShyMk`
- Card 2: `https://www.youtube.com/embed/1P_o43OMbbY` (Shorts)
- Container: 320px wide, 9:16 aspect ratio
- Card border: `2px solid var(--rose-primary)` with rose shadow

#### 8. Curriculum — 5 Chapters
Each chapter has: image banner + rose badge + warm blush strip + accordion toggle

| Chapter | Image | Lessons |
|---------|-------|---------|
| المحور الأول — خامات وأدوات | `section1/photo_5879531841788776219_y.jpg` | 5 lessons |
| المحور الثاني — العملي | `section2/photo_5879531841788776224_y.jpg` | 6 lessons |
| المحور الثالث — التقني AI | `section3/photo_5879531841788776230_y.jpg` | 7 lessons |
| المحور الرابع — الصباغة | `section4/photo_5879531841788776237_y.jpg` | 4 lessons |
| المحور الخامس — التسعير | `section5/photo_5879531841788776238_y.jpg` | 4 lessons |

Accordion: `max-height` CSS transition (0 → 600px), arrow rotates 180°

#### 9. Bonuses — 3 Gift Cards

| Gift | Image | Original Price |
|------|-------|---------------|
| جروب متابعة واتساب | `gift/photo_5879531841788776264_y.jpg` | $10 → مجانًا |
| وصول مدى الحياة للكورس | `gift/photo_5879531841788776265_y.jpg` | $10 → مجانًا |
| قائمة موردين الخامات | `gift/photo_5879531841788776266_y.jpg` | $10 → مجانًا |

Card structure: book mockup image (220×280px) + title (rose) + description + price line

#### 10. Value Stack
- 8 items: 5 chapters + 3 gifts
- Each row: checkmark + item name + price badge (rose pill)
- Bottom: strikethrough old price (red-accent) + EGP600 final price

#### 11. Guarantee
- Money-back guarantee (7 days)
- Email: `support@dokkan-decor.com`

#### 12. FAQ
- 5 questions with accordion toggle (only one open at a time)

---

## 4. Image Assets

### Folder Structure
```
web/
├── index.html
├── section1/   (7 images + section1.md)
├── section2/   (7 images + section2.md)
├── section3/   (7 images + section3.md)
├── section4/   (1 image + section4.md)
├── section5/   (1 image + section5.md)
├── gift/       (3 images + gift.md)
└── assets/     (misc assets)
```

### Image Usage in Page

| Section | Images Used |
|---------|------------|
| Expert avatars | `section1/photo_5879531841788776221_y.jpg`, `section2/photo_...225_y.jpg`, `section2/photo_...228_y.jpg` |
| Journey years | section1 images for 2020–2023, section2 images for 2024–2025 |
| Chapter banners | One cover image per chapter (see curriculum table above) |
| Bonus cards | All 3 gift images |
| Value stack bundle | `section3/photo_5879531841788776230_y.jpg` |
| Success stories | YouTube iframes (no local images) |

---

## 5. Task History

### Session 1 — Initial build from spec
- Read `cursor_prompt_v2.md` spec
- Built complete `web/index.html` from scratch following the spec
- Spec described a "معادلة البراند المربح" sales page with rose/red palette
- Key customizations from spec:
  1. Price: 600 EGP (was 2,950)
  2. Rose/magenta/red palette (no green, no gold)
  3. Light blush background (not dark)
  4. 2 video testimonials only (not 8)
  5. 100+ subscribers (not 1600+)

### Session 2 — Video and color adjustments
- Replaced placeholder success cards with real YouTube iframes
- Two videos: `uhW31HShyMk` and `1P_o43OMbbY` (Shorts)
- Made color palette bolder: darker rose-wine navbar (`#580f30`), warmer blush tones, rosier borders

### Session 3 — Real course content and images
- Replaced 3 brand-equation chapters with 5 Dokkan Decor chapters
- Used real section cover images from `section1-5/` folders
- Replaced 6 placeholder bonuses with 3 real gift cards using `gift/` images
- Updated value stack to 8 items (5 chapters + 3 gifts)
- Changed all copy from male/neutral to female-targeted:
  - CTA: `اشترك` → `اشتركي`
  - Rating: `حاصل` → `حاصلة`
  - Expert names: male names → نورا, سمية, منى
  - Journey: freelancer/agency story → fabric printing story
  - All hero/pricing/FAQ copy updated

---

## 6. JavaScript Functionality

### Countdown Timer
```javascript
let totalSeconds = 5 * 60; // starts at 5 minutes
// Updates 4 display blocks: days, hours, minutes, seconds
// Runs every 1 second via setInterval
```

### Chapter Accordion
```javascript
function toggleChapter(btn) {
  btn.closest('.chapter').classList.toggle('open');
}
// CSS: .lessons-list max-height 0→600px transition, .arrow rotates 180°
```

### FAQ Accordion
```javascript
function toggleFaq(el) {
  // Opens clicked, closes all others
  // Only one FAQ open at a time
}
```

---

## 7. Responsive Breakpoints

- **Mobile:** `@media (max-width: 768px)` — single column grids, smaller fonts, stacked layouts
- **Small mobile:** `@media (max-width: 480px)` — compact navbar, smaller hero text, full-width cards

---

## 8. Git & Deployment

- **Remote:** `https://github.com/KRU4/dokkan-decor.git`
- **Branch:** `master`
- **All images are tracked** by git (verified via `git ls-files`)
- **.gitignore** does NOT block `.jpg` files — images are safe
- **To deploy:** push to master, enable GitHub Pages on the repo

### Commit command reference:
```bash
git add web/index.html
git commit -m "Update landing page — rose/red theme, real course & gift images, female-targeted copy"
git push origin master
```

---

## 9. Things to Remember for Next Session

- The page is a **single file** — all CSS in `<style>`, all JS in `<script>` at bottom of `<body>`
- **No external JS libraries** (no jQuery, Bootstrap, Swiper)
- The color palette is **rose + red + blush white** — never introduce green or gold
- **All images are in subdirectories** under `web/` — section1-5, gift, assets
- The course targets **women** — all copy should use female forms (اشتركي, متدربة, بنت)
- **Success stories section has exactly 2 video cards** — don't add more
- **Price is 600 EGP** with 2,000 EGP as the strikethrough reference
- **100+ trainees** (not 1600+) — copy says "+100 متدربة حضوري وأونلاين"
- Chapter accordions use **CSS max-height transition** (not JS animation)
- FAQ allows **only one open at a time**
- The VSL hero area is a **styled placeholder** — no actual video loaded there
