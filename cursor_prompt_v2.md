# Cursor Prompt — Pixel-Perfect Clone (Customized): "معادلة البراند المربح" Sales Page

> **Goal:** Build a pixel-perfect single-file HTML clone of `https://join.kariemhanafy.com/double-your-income-course-ads`, with the customizations listed below. This is a personal learning project to study high-converting Arabic VSL course sales pages. Reproduce every section exactly as described — layout, colors, typography, spacing, interactions — but apply the color, price, content, and copy changes specified in this document.

---

## ⚠️ Customizations Applied to the Original (read this first)

1. **Price changed:** course price is now **600 EGP** (was 2,950 EGP in the original). Update every place the price appears (pricing box, value stack table, sticky bar if any).
2. **Color palette changed:** replace the original green/red/black/white scheme with a **rose / magenta / red mix** palette (full palette given below). No green anywhere. No gold/yellow stars — use the rose palette for stars too.
3. **Background lighter:** the page background should be **lighter**, not near-black. Use a soft blush/rose-tinted light background instead of the dark teal-black from the original.
4. **Video testimonials reduced:** the original "Success Stories" section had 8 video cards (2 rows of 4). Reduce this to **only 2 video cards total**, placed side by side, no duplicates, no other variations — just 2 distinct cards next to each other. Do not add more later in the section.
5. **Subscriber count changed:** wherever the page shows a participant/subscriber count (e.g., "1600+ مشترك"), change it to reflect **trainees, in-person and online attendance, +100 subscribers** — i.e., total enrolled is now **100+** (not 1600+). Update the copy to mention both in-person and online attendees.

---

## Core Rules Before You Write One Line

- Single `index.html` file — all CSS in `<style>`, all JS in `<script>` at bottom of `<body>`
- `<html dir="rtl" lang="ar">` — everything is RTL
- Font: **Cairo** from Google Fonts (weights 400, 600, 700, 800, 900)
- Zero external JS libraries (no jQuery, no Swiper, no Bootstrap)
- Mobile-first, breakpoint at `768px`
- Background of the entire page: **light rose/blush gradient** (see palette below) — NOT dark
- All placeholder images: styled `<div>` with a subtle background, centered label text, same dimensions as the original

---

## Updated Global Design Tokens (Rose / Magenta / Red Mix)

```css
--rose-primary: #e11d74;        /* main CTA buttons, primary accent — deep rose/pink */
--rose-dark: #b9105e;           /* hover state for buttons */
--rose-light: #ff6fa5;          /* secondary highlights, lighter accents */
--magenta: #c2185b;             /* alternate accent for variety (timeline, badges) */
--red-accent: #e63950;          /* warning text, urgency copy, strikethrough prices */
--blush-bg-1: #fff5f8;          /* lightest page background tone */
--blush-bg-2: #ffe9f0;          /* slightly deeper page background tone */
--blush-bg-3: #ffeef5;          /* card background tint */
--rose-card-border: rgba(225, 29, 116, 0.25);
--stars-color: #e11d74;         /* star ratings — rose instead of gold */
--white: #ffffff;
--dark-text: #2a0f1c;           /* near-black with a rose undertone, used for headings */
--gray-text: #6b5a61;           /* muted rose-gray for body copy */
--card-bg: rgba(225, 29, 116, 0.04);
--card-bg-light: #fdf0f4;       /* warm blush — chapter title strip */
--page-bg: linear-gradient(180deg, #fff5f8 0%, #ffe9f0 40%, #fff5f8 100%);
--font: 'Cairo', sans-serif;
--max-width: 1100px;
--radius-card: 16px;
--radius-btn: 10px;
```

**Color usage rules:**
- Every place that was previously **green** (`#00e676` CTA buttons, price text, progress bar fill, stars, timeline year numbers, chapter expand links, checkmarks) → now uses **`--rose-primary` (#e11d74)**, with hover states using `--rose-dark`.
- Every place that was previously **red** (countdown timer digits, urgency warnings, strikethrough old prices) → now uses **`--red-accent` (#e63950)**, blended naturally with the rose theme so it doesn't clash — think "warm red-rose," not a harsh stop-sign red.
- The dark navbar background becomes a **deep rose-magenta** (`#4a0e2a` or similar deep wine tone) instead of pure black — still dark enough for contrast with white CTA text, but on-theme.
- White sections (testimonials, journey, value stack) stay mostly white/blush-white, with rose accents instead of green ones.
- Avoid any leftover green, gold, or near-black-on-black from the original — full palette is rose + magenta + red + soft blush white.

---

## Section-by-Section Spec

---

### SECTION 1 — Sticky Top Navbar

**Position:** `position: fixed; top: 0; width: 100%; z-index: 9999`
**Background:** deep rose-wine `#4a0e2a` (NOT pure black)
**Height:** ~70px
**Layout:** two columns — left side has countdown, right side has CTA button

**Left side — Countdown Timer:**
- Small label: `ينتهي الخـــصم بعد` — color: `--red-accent` (#e63950), font ~13px
- Four number blocks side by side, each showing a two-digit number in large digits, color `--red-accent`, ~28px bold
- Under each number, small label: `ثانية` / `دقيقة` / `ساعة` / `يوم`
- Numbers and labels separated by `:` colons, RTL order: يوم : ساعة : دقيقة : ثانية
- Timer counts down from `0 days, 0 hours, 5 minutes, 0 seconds` on page load

**Right side — CTA Button:**
- Button: `اشترك الآن`
- Background: `--rose-primary` (#e11d74), color: white, font-weight: 800, font-size: 18px
- Padding: `14px 48px`, border-radius: `10px`
- Hover → `--rose-dark` smooth transition

---

### SECTION 2 — Hero Section

**Background:** light blush gradient (`--page-bg`)

**Content (centered, max-width 700px, margin auto):**

1. **Badge pill**: 🏆 `معادلة البراند المربح` — white/blush pill, thin rose border, dark rose text, small font ~14px

2. **Main headline** (font-size: 42px desktop / 28px mobile, weight 800, color `--dark-text`, line-height 1.3):
   ```
   +2500 شخص بدأوا البراند الشخصي… وحوّلوه
   لمصدر دخل بالدولار في اقل من ٣٠ يوم؟
   ```
   - `البراند الشخصي` and `٣٠` in **rose** `--rose-primary`, bold

3. **Sub-paragraph** (font-size 16px, color `--gray-text`, centered):
   ```
   حتى لو بتبدأ من الصفر ومعندكش متابعين
   بسيستم واحد… بيحوّل المحتوى من مشاهدات لفلوس
   ```

4. **Rose underlined link-style text** (`--rose-primary`, underlined, ~16px):
   ```
   وبيخليك من الـ1% بس اللي بتكسب فعلاً
   ```

5. **Video label**: 🔊 `شاهد هذا الفيديو لتعرف الخطوات` — small, gray, centered

6. **VSL Video Player** — full-width block (max-width ~1000px), `border-radius: 12px`, `overflow: hidden`:
   - Video placeholder `<div>` height `500px`, background a soft rose-tinted dark (`#3a0a1f`) so the player area still reads as a video frame even on the light page
   - Top-left corner pill: `🔇 Enable sound`
   - Placeholder label: `[VSL — Instructor talking, 10:51 duration]`
   - Bottom control bar: dark strip `rgba(74,14,42,0.85)`, with: ▐▐ pause icon, thin progress bar (gray track, **rose** fill ~30%), timestamp `10:51`, 🔇 icon, `HD` badge, `1x` speed, ⛶ fullscreen icon

7. **CTA Button** below video (centered):
   - `اشترك الآن`, rose button, same style as navbar CTA
   - Below it: row of overlapping avatar circles (8 placeholders, 40px circles, overlapping ~10px)
   - Below avatars: `⭐⭐⭐⭐⭐` in **rose** color + text:
     ```
     حاصل علي تقيم 4.9 من +100 متدربة حضوري وأونلاين
     ```
     *(this replaces the original "1600+ مشترك" — see customization #5 above)*

---

### SECTION 3 — Pricing / Early Bird Box

**Background:** light blush page background

**Card:** centered, max-width `600px`, `border-radius: 20px`, `border: 1px solid var(--rose-card-border)`, `background: var(--blush-bg-3)`, padding `40px`, subtle soft shadow for depth against the light background

**Inside the card:**

1. **Pill badge at top**: rose dot + `العرض الحالي` — white/blush pill, rose border, rose text

2. **Headline** (bold, `--dark-text`, 32px, centered):
   ```
   الخصم متاح لأول 100 شخص فقط
   ```

3. **Subtitle** (gray, ~15px):
   ```
   السعر لأول 100 مشترك: EGP600 — وبعدها يرجع السعر الطبيعي.
   ```
   *(price updated to 600 EGP per customization #1)*

4. **Inner price box** — `background: rgba(225,29,116,0.06)`, `border-radius: 12px`, `padding: 24px`:
   - Label: `السعر الحالي` (small, gray, centered)
   - Warning line: `⏱ بعد اكتمال 100 شخص هيرجع السعر لـ EGP2,000` (small, `--gray-text`) — *(adjust the "after" price proportionally; since the discount price dropped from 2,950→600, scale the "full price" down too — use EGP2,000 as the reasonable original/full price)*
   - **Price** (huge, bold, rose): `EGP600` — font-size 56px, `color: var(--rose-primary)`, weight 900

5. **Progress bar row:**
   - Right label: `باقي 35` (dark text, small)
   - Left label: `اتسجل 65 / 100` (dark text, small)
   - Bar: full width, height 10px, `border-radius: 5px`, track `rgba(225,29,116,0.12)`, fill `--rose-primary` at **65% width**

6. **CTA button** (full width, rose, large):
   ```
   ⚡ ⚡ لسه في أماكن… متأخرش.
   ```
   Background `--rose-primary`, text white, bold, height 56px, border-radius 12px

---

### SECTION 4 — Expert Testimonials

**Background:** white `#fff`
**Padding:** 60px 20px

**Section title** (centered, `--dark-text`, 32px, bold):
- `رأي` regular weight + `الخبراء` bold rose `--rose-primary`
- Full: `رأي الخبراء بعد تجربتهم الكورس`

**3 cards in a row** (CSS grid, 3 columns, gap 24px, stack to 1 on mobile)

Each card: white background, `border: 1px solid #f3d6e3`, `border-radius: 16px`, `padding: 28px`, `text-align: center`, soft rose-tinted shadow

**Card structure:**
- Avatar circle placeholder (80px, light gray bg, centered)
- Blue verified checkmark badge stays blue (small circle, ✓) — this is a neutral UI element, no need to recolor
- **Name** (bold, dark, 18px): `el modeer` / `Youssef Idris` / `Mina`
- **Review text** (gray, 14px, RTL, text-align right):
  - Card 1: بداية أي خطوة في البرسونال براند بيبقى فيها خوف وتوهان، بس كريم خلاني أفهم السوشيال ميديا والإنتاج من الأساس، وإزاي أطلع بمحتوى وصورة بروفشنال. محتوى عملي مبني على خبرة حقيقية وأنصح بيه لأي حد عايز يبدأ صح
  - Card 2: والله العظيم كمية المعلومات اللي شوفتها في الكورس دي اتعلمتها في 8 سنين ميديا. الكورس مبني على نتائج حقيقية وناس بتعمل أرقام فعلًا. قوي جدًا، مختلف عن أي حاجة في الوطن العربي، وهيأثر على طريقك ويخليك تعمل فلوس أسرع بكتير.
  - Card 3: كصانع محتوى بشتغل مع براندات كبيرة، دايمًا بيدوروا على الناس اللي عندهم ثقة وبرسونال براند قوي. الكورس ده بيديك المعادلة اللي تخلي العميل يثق فيك من أول لحظة. بصراحة ده اهم استثمار لازم تبدأ بيه.
- **Stars**: ⭐⭐⭐⭐⭐ in **rose color** `--rose-primary` (replaces gold) — Card 1 shows 4/5, Cards 2 & 3 show 5/5

---

### SECTION 5 — Instructor Journey Timeline ("My Journey")

**Background:** white `#fff`
**Padding:** 60px 20px, max-width 900px, margin auto

**Heading** (bold, `--dark-text`, 28px, centered):
```
ازاي اتحولت من فريلانسر لصاحب واحده من أكبر الإيجنسي في الوطن العربي
```

**"MY JOURNEY" graphic:**
- `JOURNEY` large display font (~72px), bold, **rose** `--rose-primary` (was green in original)
- `My` cursive/italic style overlapping, smaller, also rose
- Centered, decorative

**Timeline items** — alternating left/right layout per year, bullet dot color is **rose** `--rose-primary` for all years instead of green:

- **2019** (photo right): اتخرجت من هندسة وخلصت جيش و مكنتش حايب اكمل كمهندس فقلت هجرب طريق تاني فا بـدات في مجال المونتاج
- **2020** (photo left): بـدأت كـ Freelance Video Editor بدخل حوالي $300 في الشهر. ركزت على الـ Personal Brand، وبنهاية السنة وصلـت لـ $4,000 في الشهر.
- **2021** (photo right): البرسونال براند جاب شغل أكتـر. كبـرت الـ TEAM وحـولت الشغـل من Freelancer إلـى Agency.
- **2022** (photo left): اشتغلنا مع شركات كبيرة زي حسن علام -إعمار EXXONMOBIL - EL SEWEDY، والشركة كبرت بسرعة.
- **2023** (photo right): السوشيال ميديا وصلتنا لعملاء في أوروبا، واشتغلنا مع Clients في إنجلتـرا وألمانيا، فأسسنا شركة في إنجلتـرا.
- **2024** (photo left): جالنا شغل كتيـر مـن الإمارات والخليج، ففتحنا شركة فـي الإمـارات
- **2025** (photo right): الحمد لله شركاتنا كبرت مع Personal Brand والـوقت، والـ Businesses ساعدنا نفتـح جديدة، ونكبرها بسرعـة

Photo placeholders: light gray rounded rectangles, correct approximate proportions per the original screenshots.

---

### SECTION 6 — CTA + Social Proof Strip

**Background:** light blush page background
**Content (centered):**
- Rose CTA button: `اشترك الآن`
- Row of 8 overlapping avatar circles
- Stars (rose) + text:
  ```
  ⭐⭐⭐⭐⭐ حاصل علي تقيم 4.9 من +100 متدربة حضوري وأونلاين
  ```

---

### SECTION 7 — Success Stories ("قصص نجاح عملائنا") — ⚠️ MODIFIED

> **Customization #4:** the original section had 8 video testimonial cards (2 rows × 4). Replace with **exactly 2 video cards**, placed side by side in a single row (not 4, not 8, no duplicates, no repeats). These should be two distinct, different testimonials — do not repeat the same content twice.

**Background:** white `#fff`
**Padding:** 60px 20px

**Heading:**
- `قصص نجاح عملائنا بعد` (dark) + `معادلة البراند المربح` (rose, bold)
- Font-size 30px

**Subtitle:** شاهد كيف استطاع عملائنا تحقيق نتائج استثنائية وبناء براند شخصي مربح في وقت قياسي من خلال تطبيق معادلة البراند المربح.

**Video testimonial row — exactly 2 cards, centered side by side:**

Layout: `display: flex; justify-content: center; gap: 32px;` — two cards only, each max-width ~280px, centered as a pair on the page (not stretched full width, not repeated)

Each card:
- `border-radius: 16px`, `overflow: hidden`, `border: 1.5px solid #f3d6e3`
- **Thumbnail placeholder**: light gray `<div>`, aspect-ratio `9/16` (portrait video style), ~240px wide × 340px tall
- Centered **rose play button** on top of thumbnail — rounded rectangle `background: var(--rose-primary)`, white ▶ icon, ~60px × 44px (replaces the original purple `#7c3aed` play button)
- Below thumbnail: thin strip with ▶ icon + duration + thin progress bar + `•••` options icon

Card 1 duration: `0:58`
Card 2 duration: `1:16`

*(Just these two — do not add more cards, do not duplicate, no grid of 4 or 8.)*

---

### SECTION 8 — Course Curriculum ("محتوى الكورس")

**Background:** light blush page background
**Padding:** 60px 20px, max-width 700px, margin auto

**Heading** (centered, `--dark-text`):
- `محتوى` regular weight + `الكورس` bold rose
- Font-size: 36px

**Subtitle** (gray, centered): `منهج متكامل خطوة بخطوة لبناء برسونال براند قوي ومربح`

**3 chapter blocks** (stacked vertically, full width, gap 24px):

Each chapter block:

**Top part — chapter image banner** (`border-radius: 16px 16px 0 0`, `overflow: hidden`, ~500px × 280px):
- Rose-tinted dark placeholder (`#4a0e2a`) with huge white Arabic text overlaid as a graphic title
- Chapter badge (top-right): pill `الفصل الأول` / `الفصل الثاني` / `الفصل الثالث` with number — `background: rgba(74,14,42,0.7)`, white text

**Bottom part — warm blush strip** (`background: var(--card-bg-light)` #fdf0f4, `border-radius: 0 0 16px 16px`, `padding: 20px 24px`):
- Chapter title (bold, dark, ~18px), centered
- `عرض الدروس ∨` in **rose** `--rose-primary`, centered, clickable accordion toggle

**Chapter 1 — Banner label:** `البرسونال براند` | **Title strip:** `بناء البرسونال براند ( ٩ محاضرات )`
Lessons:
1. اتعلم ازاي تتعلم
2. إزاي اسمك لوحده ممكن يبقى شركة، وتأثيره يبيع أكتر من أي إعلان
3. إزاي تضاعف دخلك في 30 يوم
4. إزاي تكسب قلوب الناس قبل ما تكسب فلوسهم
5. إزاي تختار تخصصك صح وتبني براند محدش يقدر ينافسه
6. إزاي تبدأ بتخصص ذكي يخليك تكسب من غير ما تتحرق
7. اختار شخصيتك على السوشيال ميديا قبل ما تختار الكاميرا
8. اتعلم من الآخر: ازاي تطلع نتيجة بسرعة
9. إزاي تتغلب على خوفك من صناعة المحتوى؟

**Chapter 2 — Banner label:** `احترف صناعة المحتوى` | **Title strip:** `صناعة محتوى احترافية ( ١٠ محاضرات )`
Lessons:
1. خلي صفحتك تبيع وانت نايم — الطريقة الجديدة لتظبيط البروفايل
2. الأدوات اللي فعلاً محتاجها عشان تبدأ من غير ما تصرف فلوس زيادة
3. إزاي تبني خطة محتوى تبيع وتكسبك كل شهر
4. ازاي تحول دماغك لماكينة أفكار
5. إزاي تكتب سكريبت فيرال ويبيع في نفس الوقت
6. أسرار الهوك اللي بيخلي الناس توقف السكرول
7. القوانين الجديدة للخوارزميات اللي لازم تعرفها
8. مونتاج سهل يخلي أي فيديو يبان كأنه فيلم على نتفلكس
9. إزاي تصوّر محتوى يبان غالي من غير كاميرا غالية
10. إزاي تخلي الذكاء الصناعي يشتغل عندك كأن عندك فريق إنتاج كامل

**Chapter 3 — Banner label:** `الحرية المالية` | **Title strip:** `الحرية المالية ( ١٠ محاضرات )`
Lessons:
1. إزاي تحول المحتوى العادي لدخل شهري مستمر
2. طرق خفية للربح من السوشيال ميديا لأصحاب الخدمات
3. ازاي تعمل فلوس وانت لسه معندكش خبرة
4. معلومات خطيرة هتساعدك تنجح أسرع
5. البورتفوليو اللي يخلي العملاء يجروا وراك
6. إزاي تقدم نفسك صح.. وتخلي أي عميل يثق فيك فورًا
7. سر النفوذ.. إزاي تخلي مجهودك يجيب أضعاف النتائج
8. إزاي تجيب عملاء من بره السوشيال ميديا وتفضل دايمًا شغال
9. فن البيع والتفاوض — إزاي تبيع أغلى من الكل وتكسب احترام الكل
10. إزاي تضاعف أسعارك 10 مرات وتخلي العملاء مبسوطين

**Accordion behavior:**
- Clicking `عرض الدروس` toggles the lesson list
- Lesson list rows: rose circle bullet + lesson text (dark, ~15px)
- Smooth `max-height` CSS transition (0 → 600px)
- Arrow `∨` rotates to `∧` when open

**After the 3 chapters:**
- Rose CTA button centered: `اشترك الآن`
- Avatar row + stars (rose) + updated subscriber text: `حاصل علي تقيم 4.9 من +100 متدربة حضوري وأونلاين`

---

### SECTION 9 — Bonuses ("هدايا مجانية")

**Background:** light blush page background
**Padding:** 60px 20px, max-width 1000px, margin auto

**Header:**
- Small pill badge: `★ مازلت متردد؟` — `background: rgba(230,57,80,0.1)`, `border: 1px solid var(--red-accent)`, red-rose text
- Main heading (`--dark-text`, 36px, bold, centered):
  `هدايا مجانية بقيمة $222 تحصل`
  Second line: `عليها` (dark) + ` مجانًا` (rose `--rose-primary`)

**6 bonus cards in a 3-column grid** (2 rows × 3 cols, stack to 1 col on mobile)

Each card: `background: #fff`, `border: 1px solid #f3d6e3`, `border-radius: 16px`, `padding: 24px`, `text-align: center`, soft shadow

Card structure:
- **Book mockup placeholder** — `~220px × 170px`, rose-tinted dark gray, leaning 3D book style (`transform: perspective(600px) rotateY(-15deg)`)
- **Title** (bold, **rose** `--rose-primary` instead of gold, 18px)
- **Description** (gray, 14px, RTL)
- **Price line**: `الملف ده سعره ~~$XX~~ لكن هتحصل عليه مجانًا!` — strikethrough in `--red-accent`, "مجانًا" in `--rose-primary`

**Card 1 — Private Community:** ~~$50~~ → مجانًا
> هتدخل جروب خاص بالمشتركين، كله ناس زيك عندهم نفس الهدف والطموح. تقدر تسأل، تتفاعل، تشارك نتائجك، وتاخد Feedback مباشر من كريم وفريقه عشان تفضل دايمًا متقدم خطوة.

**Card 2 — ChatGPT Prompts:** ~~$25~~ → مجانًا
> وفر وقتك وخلي ChatGPT يشتغل مكانك! هتاخد مجموعة جاهزة من الـ Prompts اللي بتخلي ChatGPT يكتب لك سكريبت لفيديو، أو بوست بيعي، أو حتى يرد على رسائل العملاء بطريقة ذكية

**Card 3 — Viral Hooks 100:** ~~$50~~ → مجانًا
> مش هتحتار تكتب أول جملة في الفيديو بعد النهارده. هتوصلك مكتبة جاهزة فيها أكتر من 100 هوك مجرب فعليًا على فيديوهات جابت ملايين المشاهدات وفتحت فرص حقيقية لصناع المحتوى.

**Card 4 — Lifetime Access:** ~~$50~~ → مجانًا
> ادفع مرة واحتفظ بالكورس للأبد. مفيش اشتراك شهري، ولا تجديد سنوي، ولا مدة محدودة. بمجرد ما تشترك، بيكون عندك وصول دائم لكل محتويات الكورس.

**Card 5 — PDF Summaries:** ~~$30~~ → مجانًا
> مش بس هتتفرج هتطبق وتكسب. بعد كل درس، هتلاقي ملف PDF جاهز فيه أهم النقاط + تشيكلست تنفيذ فوري تساعدك تطبق بنفسك خطوة بخطوة.

**Card 6 — Content Pillars Templates:** ~~$17~~ → مجانًا
> نظام شهري جاهز يخليك دايمًا سابق بخطوة! خطة شهرية مرنة فيها Templates جاهزة لكل حاجة الركائز، الأفكار، ومواعيد النشر.

Rose CTA button below: `اشترك الآن`

---

### SECTION 10 — Everything You Get ("كل ما ستحصل عليه")

**Background:** white `#fff`
**Padding:** 60px 20px, max-width 900px, margin auto

**Heading** (dark, centered, 30px, bold):
`كل ما ستحصل عليه داخل` (dark) + ` معادلة البراند المربح` (rose)

**Hero composite image placeholder** (centered, ~600px wide):
- Styled `<div>` block, rose-tinted dark background, label: `[Course bundle visual — 3 chapter screens + 5 bonus books]`

**Package contents card:**
`background: #fff`, `border: 2px solid #f3d6e3`, `border-radius: 20px`, `padding: 40px`, max-width `700px`, centered

**Card header:** 🎁 `محتويات الباقة` (bold, dark, centered, 22px)

**List of items** — each row: `background: #fdf0f4`, `border: 1.5px solid var(--rose-primary)`, `border-radius: 10px`, `padding: 14px 20px`, `margin-bottom: 12px`
Layout: right side = ✅ + item name (bold, dark), left side = price badge (rose pill: `💰 $XX مجانًا`)

| Item | Value Badge |
|------|-------------|
| ✅ **كورس معادلة البراند المربح:** ضاعف دخلك خلال 30 يوم. | 💰 197$ مجانًا |
| ✅ **مكتبة الهوكات فايرال:** أكتر من 100 هوك تم تجربتهم في فيديوهات حققت ملايين المشاهدات. | 💰 50$ مجانًا |
| ✅ **برومتات شات جي تي:** أقوي الـ Prompts اللي هتخلي الذكاء الاصطناعي اقوي 10 مرات. | 💰 50$ مجانًا |
| ✅ **كوميونتي خاص:** اسأل، شارك، تفاعل، وخد فيدباك مباشر من كريم أو فريقه. | 💰 50$ مجانًا |
| ✅ **قالب Content Pillars:** نظام شهري للتخطيط، فيه تمبليتس لموضوعات النشر والمواعيد. | 💰 17$ مجانًا |
| ✅ **ملخصات لكل فيديو:** بعد كل درس ملخص جاهز يساعدك تراجع أهم النقاط وتبدأ التطبيق | 💰 30$ مجانًا |
| ✅ **اكسيس دائم:** دخول دائم مدى الحياة لمحتويات الكورس و أي تحديثات مستقبليه. | 💰 50$ مجانًا |

**Below list, divider line, then:**
- Original value (strikethrough, `--red-accent`): `~~2,000~~ جنيه`
- Final price (huge, bold, `--dark-text`): `600 جنية فقط`
  *(price updated per customization #1)*
- Rose CTA button: `اشترك الآن`

---

## JS Implementation Notes

### Countdown Timer
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Start from 5 minutes for demo (matching the original screenshots: 0d 0h 5m 0s)
  let totalSeconds = 5 * 60;

  function updateTimer() {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('timer-days').textContent = String(days).padStart(2, '0');
    document.getElementById('timer-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('timer-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = String(seconds).padStart(2, '0');

    if (totalSeconds > 0) totalSeconds--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
```

### Accordion (Curriculum)
```javascript
document.querySelectorAll('.chapter-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.closest('.chapter').querySelector('.lessons-list');
    const arrow = btn.querySelector('.arrow');
    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

    content.style.maxHeight = isOpen ? '0px' : '600px';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.4s ease';
    arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  });
});
```

---

## Critical Visual Details — Summary of What Changed vs. Original

1. **Page background:** now a **light blush/rose gradient** (`#fff5f8` → `#ffe9f0`) — NOT dark teal-black like the original.
2. **Primary accent color:** **rose `#e11d74`** replaces every instance of the original green `#00e676` — buttons, price text, progress bar fill, stars, timeline year numbers, chapter expand links, checkmarks.
3. **Secondary/urgency color:** **warm red `#e63950`** replaces the original harsh red `#ff3b30` — used for countdown digits, strikethrough prices, urgency badges. It should feel like it belongs to the rose family, not clash with it.
4. **Navbar:** deep rose-wine `#4a0e2a` instead of pure black.
5. **Stars:** rose-colored instead of gold/yellow.
6. **Price:** **600 EGP** everywhere (pricing box + value stack table), with a proportionally adjusted "full price" of ~2,000 EGP for the strikethrough/before-discount reference.
7. **Success Stories section:** only **2 video cards**, side by side, no duplicates, no grid of 8. Play button color is rose instead of purple.
8. **Subscriber/social proof copy:** changed from "1600+ مشترك" to **"+100 متدربة حضوري وأونلاين"** (100+ trainees, in-person and online) everywhere this stat appears (hero, after-curriculum CTA, anywhere else the avatar+stars+count combo shows up).
9. White sections (testimonials, journey timeline, value stack) remain white but use rose accents instead of green.
10. No green, no gold, no near-black anywhere — full palette is rose + magenta + warm red + soft blush white + dark rose-tinted near-black text for headings.

---

## Output

Single file: `index.html`
Open in browser → should match the structure of the original page exactly, but with the rose/magenta/red color palette, 600 EGP pricing, only 2 success-story video cards side by side, and the updated "+100 trainees, in-person and online" subscriber copy.
