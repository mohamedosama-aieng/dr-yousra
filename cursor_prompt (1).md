# Cursor Prompt — Pixel-Perfect Clone: "معادلة البراند المربح" Sales Page

> **Goal:** Build a pixel-perfect single-file HTML clone of `https://join.kariemhanafy.com/double-your-income-course-ads`. This is a personal learning project to study high-converting Arabic VSL course sales pages. Reproduce every section exactly as seen — layout, colors, typography, spacing, interactions.

---

## Core Rules Before You Write One Line

- Single `index.html` file — all CSS in `<style>`, all JS in `<script>` at bottom of `<body>`
- `<html dir="rtl" lang="ar">` — everything is RTL
- Font: **Cairo** from Google Fonts (weights 400, 600, 700, 800, 900)
- Zero external JS libraries (no jQuery, no Swiper, no Bootstrap)
- Mobile-first, breakpoint at `768px`
- Background of the entire page: deep dark teal gradient — `linear-gradient(180deg, #0a1a15 0%, #0d2218 40%, #0a1a15 100%)`
- All placeholder images: styled `<div>` with a subtle dark background, centered label text, same dimensions as the original

---

## Global CTA Behavior — WhatsApp Redirect (ADDED — applies to every section below, old and new)

**Every single CTA button on the page** — navbar button, hero button, pricing-box button, the buttons after Journey/Success Stories/Curriculum/Bonuses/Value-Stack, and the new Guarantee/FAQ buttons added below — must redirect to WhatsApp instead of doing nothing.

- Wrap every `اشترك الآن` button (and the `⚡ ⚡ لسه في أماكن… متأخرش.` button) in an `<a>` tag:
  ```html
  <a href="https://wa.me/201037307014" target="_blank" rel="noopener" class="cta-btn">اشترك الآن</a>
  ```
- Number to use: **201037307014** (already in correct international `wa.me` format — no `+`, no leading `00`).
- Optionally prefill a default message for nicer UX:
  ```html
  <a href="https://wa.me/201037307014?text=عايز%20أعرف%20تفاصيل%20الكورس" target="_blank" rel="noopener" class="cta-btn">اشترك الآن</a>
  ```
- Keep all existing button visual styling (`.cta-btn` classes, colors, sizes) exactly as already specified per section — this rule only changes the underlying element/href, never the look.
- `target="_blank"` so the visitor doesn't lose the sales page when WhatsApp opens.

---

## Global Design Tokens

```css
--green-primary: #00e676;       /* bright neon green — main CTA buttons */
--green-dark: #00b359;          /* hover state for green buttons */
--green-accent: #4ade80;        /* secondary green text highlights */
--green-card-border: rgba(0, 230, 118, 0.3);
--red-timer: #ff3b30;           /* countdown digits color */
--yellow-stars: #ffd700;        /* star ratings */
--yellow-price: #ffd700;        /* price tags on timeline */
--white: #ffffff;
--off-white: #e8e8e8;
--gray-text: #aaaaaa;
--card-bg: rgba(255,255,255,0.04);
--card-bg-light: #f5f0e8;       /* warm cream — chapter title strip */
--page-bg: #0a1a15;
--font: 'Cairo', sans-serif;
--max-width: 1100px;
--radius-card: 16px;
--radius-btn: 10px;
```

---

## Section-by-Section Spec

---

### SECTION 1 — Sticky Top Navbar

**Position:** `position: fixed; top: 0; width: 100%; z-index: 9999`  
**Background:** solid black `#000`  
**Height:** ~70px  
**Layout:** two columns — left side has countdown, right side has CTA button

**Left side — Countdown Timer:**
- Small red Arabic label: `ينتهي الخـــصم بعد` (font ~13px, color `#ff3b30`)
- Four number blocks side by side, each showing a two-digit number in **large red digits** (~28px, bold, monospace feel)
- Under each number, a small Arabic label: `ثانية` / `دقيقة` / `ساعة` / `يوم`
- Numbers and labels separated by `:` colons between them
- Order RTL: يوم : ساعة : دقيقة : ثانية  
- Timer counts down from `0 days, 0 hours, 5 minutes, 0 seconds` on page load (hard-coded start, `setInterval` every 1000ms)

**Right side — CTA Button:**
- Big bright green button: `اشترك الآن`
- Background: `#00e676`, color: `#000`, font-weight: 800, font-size: 18px
- Padding: `14px 48px`, border-radius: `10px`
- No border, cursor pointer, hover → `#00b359` smooth transition

---

### SECTION 2 — Hero Section

**Background:** continues the page dark teal gradient  
**Top area:** faint scattered dollar bill images in background (use CSS `::before` pseudo-element with a very low opacity gray rectangle to suggest this, or skip and just use the dark bg — do not block text)

**Content (centered, max-width 700px, margin auto):**

1. **Trophy badge pill** — small rounded pill shape, dark semi-transparent border `1px solid rgba(255,255,255,0.2)`, contains: 🏆 `معادلة البراند المربح` (white text, small font ~14px)

2. **Main headline** (font-size: 42px desktop / 28px mobile, weight 800, color white, line-height 1.3):
   ```
   +2500 شخص بدأوا البراند الشخصي… وحوّلوه
   لمصدر دخل بالدولار في اقل من ٣٠ يوم؟
   ```
   - The words `البراند الشخصي` are in **bright green** `#00e676`
   - The number `٣٠` is also in **bright green** and bold

3. **Sub-paragraph** (font-size 16px, color `#ccc`, centered):
   ```
   حتى لو بتبدأ من الصفر ومعندكش متابعين
   بسيستم واحد… بيحوّل المحتوى من مشاهدات لفلوس
   ```

4. **Green underlined link-style text** (bright green, underlined, ~16px):
   ```
   وبيخليك من الـ1% بس اللي بتكسب فعلاً
   ```

5. **Video label** with speaker emoji (small, gray, centered):
   ```
   🔊 شاهد هذا الفيديو لتعرف الخطوات
   ```

6. **VSL Video Player** — full-width block (max-width ~1000px, margin auto), `border-radius: 12px`, `overflow: hidden`:
   - Video placeholder `<div>` height `500px`, dark background `#111`
   - Top-left corner: small pill badge `🔇 Enable sound` (dark bg, white text, small)
   - The video shows the instructor (man in beige sweater) talking to camera — show placeholder `[VSL — Instructor talking, 10:51 duration]`
   - Bottom control bar (fake): dark strip with: ▐▐ pause icon, thin progress bar (gray track, green fill ~30%), timestamp `10:51`, 🔇 icon, `HD` badge, `1x` speed, ⛶ fullscreen icon — all in a dark `rgba(0,0,0,0.8)` bar

7. **CTA Button** below video (centered):
   - Same style as navbar button, larger: `اشترك الآن`
   - Below the button: overlapping circle avatars (8 profile photo placeholders, circles 40px, overlapping by 10px, displayed in a row)
   - Below avatars: `⭐⭐⭐⭐⭐` (gold stars) + text: `حاصل علي تقيم 4.9 من اكثر من 1600 + مشترك` (white, ~14px)

---

### SECTION 3 — Pricing / Early Bird Box

**Background:** same dark page background  
**Card:** centered, max-width `600px`, `border-radius: 20px`, `border: 1px solid rgba(0,230,118,0.3)`, `background: rgba(0,230,118,0.05)`, padding `40px`

**Inside the card:**

1. **Pill badge at top** (centered): green dot + `العرض الحالي` — dark pill, green left-dot indicator, green text border

2. **Headline** (bold, white, 32px, centered):
   ```
   الخصم متاح لأول 100 شخص فقط
   ```

3. **Subtitle** (gray, ~15px):
   ```
   السعر لأول 100 مشترك: EGP2950 — وبعدها يرجع السعر الطبيعي.
   ```

4. **Inner price box** — darker card inside the card, `background: rgba(0,0,0,0.3)`, `border-radius: 12px`, `padding: 24px`:
   - Label: `السعر الحالي` (small, gray, centered)
   - Warning line: `⏱ بعد اكتمال 100 شخص هيرجع السعر لـ EGP10,500` (small, gray)
   - **Price** (huge, bold, green): `EGP2,950` — font-size 56px, `color: #00e676`, weight 900

5. **Progress bar row:**
   - Right label: `باقي 35` (white, small)
   - Left label: `اتسجل 65 / 100` (white, small)
   - Bar: full width, height 10px, `border-radius: 5px`, track `rgba(255,255,255,0.15)`, fill `#00e676` at **65% width**

6. **CTA button** (full width, green, large):
   ```
   ⚡ ⚡ لسه في أماكن… متأخرش.
   ```
   Background `#00e676`, text `#000`, bold, height 56px, border-radius 12px

---

### SECTION 4 — Expert Testimonials

**Background:** white `#fff` (this section breaks from the dark bg — it's a white section)  
**Padding:** 60px 20px

**Section title** (centered, dark text `#111`, 32px, bold):
- `رأي` in regular weight, `الخبراء` in bold green `#00a651`
- Full: `رأي الخبراء بعد تجربتهم الكورس`

**3 cards in a row** (CSS grid, `grid-template-columns: repeat(3, 1fr)`, gap 24px, stack to 1 on mobile):

Each card: white background, `border: 1px solid #e0e0e0`, `border-radius: 16px`, `padding: 28px`, `text-align: center`, subtle box-shadow

**Card structure:**
- Avatar circle placeholder (80px diameter, gray bg, centered)
- Blue verified checkmark badge overlapping bottom of avatar: small blue circle with ✓ (position absolute)
- **Name** (bold, dark, 18px): `el modeer` / `Youssef Idris` / `Mina`
- **Review text** (gray, 14px, RTL, text-align right):
  - Card 1: بداية أي خطوة في البرسونال براند بيبقى فيها خوف وتوهان، بس كريم خلاني أفهم السوشيال ميديا والإنتاج من الأساس، وإزاي أطلع بمحتوى وصورة بروفشنال. محتوى عملي مبني على خبرة حقيقية وأنصح بيه لأي حد عايز يبدأ صح
  - Card 2: والله العظيم كمية المعلومات اللي شوفتها في الكورس دي اتعلمتها في 8 سنين ميديا. الكورس مبني على نتائج حقيقية وناس بتعمل أرقام فعلًا. قوي جدًا، مختلف عن أي حاجة في الوطن العربي، وهيأثر على طريقك ويخليك تعمل فلوس أسرع بكتير.
  - Card 3: كصانع محتوى بشتغل مع براندات كبيرة، دايمًا بيدوروا على الناس اللي عندهم ثقة وبرسونال براند قوي. الكورس ده بيديك المعادلة اللي تخلي العميل يثق فيك من أول لحظة. بصراحة ده اهم استثمار لازم تبدأ بيه.
- **Stars**: ⭐⭐⭐⭐⭐ (gold, centered, below text) — Card 1 shows 4 stars (4/5), cards 2 & 3 show 5 stars

---

### SECTION 5 — Instructor Journey Timeline ("My Journey")

**Background:** white `#fff`  
**Padding:** 60px 20px, max-width 900px, margin auto

**Heading** (bold, dark, 28px, centered):
```
ازاي اتحولت من فريلانسر لصاحب واحده من أكبر الإيجنسي في الوطن العربي
```

**"MY JOURNEY" graphic** — large decorative text:
- `JOURNEY` in large serif/display font (~72px), bold, green `#00a651`
- `My` in cursive/italic style overlapping, smaller, also green
- This is purely decorative text styling, centered

**Timeline items** — alternating left/right layout per year:

Each item is a two-column row: one side has a **photo placeholder** (roughly 230px × 280px, gray), the other side has **year + text**:

- **2019** (green bullet + year in large bold green ~48px):
  اتخرجت من هندسة وخلصت جيش و مكنتش حايب اكمل كمهندس فقلت هجرب طريق تاني فا بـدات في مجال المونتاج
  — Photo: placeholder right side

- **2020** (same style, photo LEFT, text RIGHT):
  بـدأت كـ Freelance Video Editor بدخل حوالي $300 في الشهر. ركزت على الـ Personal Brand، وبنهاية السنة وصلـت لـ $4,000 في الشهر.

- **2021** (photo RIGHT, text LEFT):
  البرسونال براند جاب شغل أكتـر. كبـرت الـ TEAM وحـولت الشغـل من Freelancer إلـى Agency.

- **2022** (photo LEFT, text RIGHT):
  اشتغلنا مع شركات كبيرة زي حسن علام -إعمار EXXONMOBIL - EL SEWEDY، والشركة كبرت بسرعة.

- **2023** (photo RIGHT, text LEFT):
  السوشيال ميديا وصلتنا لعملاء في أوروبا، واشتغلنا مع Clients في إنجلتـرا وألمانيا، فأسسنا شركة في إنجلتـرا.

- **2024** (photo LEFT, text RIGHT):
  جالنا شغل كتيـر مـن الإمارات والخليج، ففتحنا شركة فـي الإمـارات

- **2025** (photo RIGHT, text LEFT):
  الحمد لله شركاتنا كبرت مع Personal Brand والـوقت، والـ Businesses ساعدنا نفتـح جديدة، ونكبرها بسرعـة

Photo placeholders for each year: gray div, rounded corners, correct approximate dimensions.

---

### SECTION 6 — CTA + Social Proof Strip (between Journey and Success Stories)

**Background:** back to dark teal page background  
**Content (centered):**
- Green CTA button: `اشترك الآن`
- Row of 8 overlapping avatar circles (same as Section 2)
- Stars + text: `⭐⭐⭐⭐⭐ حاصل علي تقيم 4.9 من اكثر من 1600 + مشترك`

---

### SECTION 7 — Success Stories ("قصص نجاح عملائنا")

**Background:** white `#fff`  
**Padding:** 60px 20px

**Heading:**
- `قصص نجاح عملائنا بعد` (dark) + `معادلة البراند المربح` (green, bold)
- Font-size 30px

**Subtitle:** شاهد كيف استطاع عملائنا تحقيق نتائج استثنائية وبناء براند شخصي مربح في وقت قياسي من خلال تطبيق معادلة البراند المربح.

**Video testimonial grid — 4 columns × 2 rows = 8 video cards:**

Each card:
- `border-radius: 16px`, `overflow: hidden`, `border: 1.5px solid #e0e0e0`
- **Thumbnail placeholder**: gray `<div>`, aspect-ratio `9/16` (portrait, like a phone video), ~200px wide × 280px tall
- On top of thumbnail: centered **purple play button** — rounded rectangle `background: #7c3aed` (purple), white ▶ icon, ~60px × 44px
- Below thumbnail: thin dark strip with: ▶ icon + duration (e.g., `0:58`) + thin progress bar + `•••` options icon

Row 1 durations: `0:58` | `0:44` | `1:03` | `0:38`
Row 2 durations: `1:16` | `1:04` | `0:43` | `0:35`

---

### SECTION 8 — Course Curriculum ("محتوى الكورس")

**Background:** back to dark teal page background  
**Padding:** 60px 20px, max-width 700px, margin auto

**Heading** (centered, white):
- `محتوى` regular weight + `الكورس` bold green
- Font-size: 36px

**Subtitle** (gray, centered): `منهج متكامل خطوة بخطوة لبناء برسونال براند قوي ومربح`

**3 chapter blocks** (stacked vertically, full width, gap 24px):

Each chapter block has:

**Top part — chapter image banner** (`border-radius: 16px 16px 0 0`, `overflow: hidden`, aspect-ratio ~16/9, ~500px wide × 280px tall):
- Dark placeholder with huge Arabic text overlaid (chapter title styled as large graphic text like the real screenshots)
- Chapter badge (top-right corner): pill `الفصل الأول` / `الفصل الثاني` / `الفصل الثالث` with number badge — `background: rgba(0,0,0,0.6)`, white text, border-radius 20px

**Bottom part — cream/warm strip** (`background: #f5f0e8`, `border-radius: 0 0 16px 16px`, `padding: 20px 24px`):
- Chapter title (bold, dark, ~18px): centered
- `عرض الدروس ∨` — teal/green text, centered, clickable (accordion toggle)

**Chapter 1:**
- Banner label: `البرسونال براند` (huge white text overlay)
- Title strip: `بناء البرسونال براند ( ٩ محاضرات )`
- Lessons (shown when expanded — accordion):
  1. اتعلم ازاي تتعلم
  2. إزاي اسمك لوحده ممكن يبقى شركة، وتأثيره يبيع أكتر من أي إعلان
  3. إزاي تضاعف دخلك في 30 يوم
  4. إزاي تكسب قلوب الناس قبل ما تكسب فلوسهم
  5. إزاي تختار تخصصك صح وتبني براند محدش يقدر ينافسه
  6. إزاي تبدأ بتخصص ذكي يخليك تكسب من غير ما تتحرق
  7. اختار شخصيتك على السوشيال ميديا قبل ما تختار الكاميرا
  8. اتعلم من الآخر: ازاي تطلع نتيجة بسرعة
  9. إزاي تتغلب على خوفك من صناعة المحتوى؟

**Chapter 2:**
- Banner label: `احترف صناعة المحتوى` (huge white text overlay)
- Title strip: `صناعة محتوى احترافية ( ١٠ محاضرات )`
- Lessons:
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

**Chapter 3:**
- Banner label: `الحرية المالية` (huge white text overlay)
- Title strip: `الحرية المالية ( ١٠ محاضرات )`
- Lessons:
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
- Lesson list: each item is a row with a teal circle bullet + lesson text (white, ~15px)
- Smooth `max-height` CSS transition (0 → 600px)
- Arrow `∨` rotates to `∧` when open

**After the 3 chapters:**
- Green CTA button centered: `اشترك الآن`
- Same avatar row + stars strip as before

---

### SECTION 9 — Bonuses ("هدايا مجانية")

**Background:** dark page background  
**Padding:** 60px 20px, max-width 1000px, margin auto

**Header:**
- Small red pill badge: `★ مازلت متردد؟` — `background: rgba(220,38,38,0.2)`, `border: 1px solid #dc2626`, red text, border-radius 20px
- Main heading (white, 36px, bold, centered):
  `هدايا مجانية بقيمة $222 تحصل`
  Second line: `عليها` (white) + ` مجانًا` (green `#00e676`)

**6 bonus cards in a 3-column grid** (2 rows × 3 cols, stack to 1 col on mobile):

Each card: `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 16px`, `padding: 24px`, `text-align: center`

Card structure:
- **Book mockup placeholder** — dark rectangle `~220px × 170px` styled as a 3D book cover leaning slightly (use CSS `transform: perspective(600px) rotateY(-15deg)`) — gray placeholder with the bonus title written on it
- **Title** (bold, gold/yellow `#ffd700`, 18px): English title
- **Description** (white/gray, 14px, RTL)
- **Price line**: `الملف ده سعره ~~$XX~~ لكن هتحصل عليه مجانًا!` — strikethrough in red, "مجانًا" in green

**Card 1 — Private Community:**
Book cover label: `Private Community`
> هتدخل جروب خاص بالمشتركين، كله ناس زيك عندهم نفس الهدف والطموح. تقدر تسأل، تتفاعل، تشارك نتائجك، وتاخد Feedback مباشر من كريم وفريقه عشان تفضل دايمًا متقدم خطوة.
> ~~$50~~ → مجانًا

**Card 2 — ChatGPT Prompts:**
Book cover label: `Chatgpt prompts`
> وفر وقتك وخلي ChatGPT يشتغل مكانك! هتاخد مجموعة جاهزة من الـ Prompts اللي بتخلي ChatGPT يكتب لك سكريبت لفيديو، أو بوست بيعي، أو حتى يرد على رسائل العملاء بطريقة ذكية
> ~~$25~~ → مجانًا

**Card 3 — Viral Hooks 100:**
Book cover label: `100 VIRAL HOOKS`
> مش هتحتار تكتب أول جملة في الفيديو بعد النهارده. هتوصلك مكتبة جاهزة فيها أكتر من 100 هوك مجرب فعليًا على فيديوهات جابت ملايين المشاهدات وفتحت فرص حقيقية لصناع المحتوى.
> ~~$50~~ → مجانًا

**Card 4 — Lifetime Access:**
Book cover label: `Life time Access` (with ∞ symbol)
> ادفع مرة واحتفظ بالكورس للأبد. مفيش اشتراك شهري، ولا تجديد سنوي، ولا مدة محدودة. بمجرد ما تشترك، بيكون عندك وصول دائم لكل محتويات الكورس.
> ~~$50~~ → مجانًا

**Card 5 — PDF Summaries:**
Book cover label: `PDF Summary`
> مش بس هتتفرج هتطبق وتكسب. بعد كل درس، هتلاقي ملف PDF جاهز فيه أهم النقاط + تشيكلست تنفيذ فوري تساعدك تطبق بنفسك خطوة بخطوة.
> ~~$30~~ → مجانًا

**Card 6 — Content Pillars Templates:**
Book cover label: `Content pillars Tempalate`
> نظام شهري جاهز يخليك دايمًا سابق بخطوة! خطة شهرية مرنة فيها Templates جاهزة لكل حاجة الركائز، الأفكار، ومواعيد النشر.
> ~~$17~~ → مجانًا

Green CTA button below: `اشترك الآن`

---

### SECTION 10 — Everything You Get ("كل ما ستحصل عليه")

**Background:** white `#fff`  
**Padding:** 60px 20px, max-width 900px, margin auto

**Heading** (dark, centered, 30px, bold):
`كل ما ستحصل عليه داخل` (dark) + ` معادلة البراند المربح` (green)

**Hero composite image placeholder** (centered, ~600px wide):
- Shows 3 monitors/screens side by side displaying the 3 chapter images
- Below monitors: 5 book covers fanned out side by side
- Recreate as a styled `<div>` block, dark background, label `[Course bundle visual — 3 chapter screens + 5 bonus books]`

**Package contents card:**
`background: #fff`, `border: 2px solid #e0e0e0`, `border-radius: 20px`, `padding: 40px`, max-width `700px`, centered

**Card header:** 🎁 `محتويات الباقة` (bold, dark, centered, 22px)

**List of items** — each is its own row with a green border:
Each row: `background: #f0fff4`, `border: 1.5px solid #00e676`, `border-radius: 10px`, `padding: 14px 20px`, `margin-bottom: 12px`
Layout: right side = ✅ + item name (bold, dark), left side = price badge (green pill: `💰 $XX مجانًا`)

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
- Original value (strikethrough, gray): `~~10,500~~ جنيه`
- Final price (huge, bold, dark): `2950 جنية فقط`
- Green CTA button: `اشترك الآن`

---

### SECTION A (NEW) — Subscriber Results Carousel ("نتائج المشتركين")

**Placement:** insert this entire section directly **after SECTION 2 (Hero)** and **before SECTION 3 (Pricing / Early Bird Box)** — it's the social-proof beat that follows the VSL, before the offer is shown.

**Background:** continues the dark teal page gradient at the top, transitioning into a black/dark banner strip for the section title.

**1. Heading** (centered, white, bold, ~32px desktop / 22px mobile, line-height 1.4):
```
أكثر من 85 شخص قدر يضاعف دخله في اقل من 6 أسابيع
```
- `85` and `6 أسابيع` styled in bright green `#00e676`, bold — consistent with how numbers are highlighted everywhere else on the page.

**2. Sub-paragraph** (gray `#aaaaaa`, centered, ~16px, max-width 700px, two lines):
```
من خلال سيستم عملي لبناء البرسونال براند، وصناعة محتوى بدأ فعلاً، المشتركين بدأوا الكورس
بدأوا يجذبوا جمهور مستهدف، يحققوا آلاف المشاهدات، والأهم: يحولوا ده لدخل حقيقي ومستمر
```

**3. Full-width dark banner strip** (`background: linear-gradient(135deg, #000 0%, #0d2218 100%)`, padding `40px 20px`, margin `40px 0`):
- Centered text, huge bold bright green: `نتائج المشتركين` (~36px desktop / 26px mobile, `color: #00e676`, weight 800)

**4. Horizontal Testimonial Carousel** (below the banner, max-width 1100px, margin auto, `overflow: hidden`, `position: relative`):
- A row of fanned/overlapping **phone-mockup cards** — each `~260px` wide × `~560px` tall, `border-radius: 28px`, slight `box-shadow`, styled like a phone screenshot of a WhatsApp/Telegram chat (status bar with time + signal icons at top, green outgoing bubble + white incoming bubble below, Arabic + occasional English testimonial text inside).
- **Left/right navigation arrows**: two circular buttons (`‹` and `›`), `~40px` diameter, light semi-transparent background `rgba(255,255,255,0.1)`, positioned vertically centered on either side of the carousel, outside the card stack.
- **Pagination dots** below the carousel: a horizontal row of ~15 small pill/dot indicators, inactive dots are hollow/outlined `rgba(255,255,255,0.2)`, the active dot is solid magenta/pink `#ec4899` and slightly larger.
- **One featured card is a real embedded video** instead of a static screenshot — this represents the actual "رأي العملاء" (customer opinion) testimonial:
  ```html
  <div class="testimonial-card testimonial-card--video">
    <iframe
      src="https://www.youtube.com/embed/uhW31HShyMk"
      title="رأي العملاء"
      style="width:100%;height:100%;border:0;border-radius:28px;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>
  ```
  - This card sits first in the carousel (or wherever it visually anchors best), same dimensions as the other phone-mockup cards (9:16 portrait), same rounded corners.
- Behavior: cards sit in a flex/scroll container; clicking `‹`/`›` scrolls by one card width (`scrollBy({ left: ±cardWidth, behavior: 'smooth' })`); clicking a dot jumps to that card; the active dot updates on scroll via a `scroll` event listener.

**5. Closing CTA strip** (same recurring pattern used elsewhere): green CTA button (`اشترك الآن`, links to WhatsApp per the global rule above) + row of 8 overlapping avatar circles + `⭐⭐⭐⭐⭐ حاصل علي تقيم 4.9 من اكثر من 1600 + مشترك`.

---

### SECTION B (NEW) — Money-Back Guarantee ("ضمان استرجاع المال")

**Placement:** insert directly **after SECTION 10 (Everything You Get / Value Stack)** and **before SECTION C (FAQ)** below.

**Background:** dark teal page background continues.  
**Padding:** 60px 20px, max-width 600px, margin auto.

**White rounded card** (`background: #fff`, `border-radius: 24px`, `padding: 48px 40px`, `text-align: center`, subtle `box-shadow: 0 20px 60px rgba(0,0,0,0.3)`):

1. **Ribbon/medal icon** at the top, centered, `~110px`: a navy-blue ribbon shape (`#1e3a5f`) with a gold star/badge circle in the middle (`#ffd700`) — this is the **one intentional exception** to the "no gold" rule, used only for this trust badge.
2. **Large heading** (bold, dark navy `#1a2942`, ~30px, centered, two stacked lines):
   ```
   ضمان استرجاع
   المال
   ```
3. **Secondary heading line** (bold, dark, ~20px): `ضمان استرجاع المال`
4. **Body paragraph** (gray `#666`, ~15px, centered, max-width 480px, line-height 1.7):
   ```
   استرجاع كامل للفلوس لو المعلومات اللي موجودة فِ الكورس مش هتقدر تخليك تعمل لنفسك براند ناجح،
   تعمل لنفسك براند ناجح، ببساطة ابعتلنا ايميل خلال 7 أيام على courses@byond.media،
   وهنرجعلك فلوسك بالكامل بدون أي أسئلة.
   ```
   - The email `courses@byond.media` is a styled link: bright green `#00e676`, underlined.
5. **Green CTA button** (full width inside the card, same `.cta-btn` styling, links to WhatsApp): `اشترك الآن`
6. **Below the button**: row of 8 overlapping avatar circles + `⭐⭐⭐⭐⭐ حاصل علي تقيم 4.9 من اكثر من 1600 + مشترك` (white text on the white card, so use dark gray here instead of white, ~14px).

---

### SECTION C (NEW) — FAQ ("الاسئلة الشائعة")

**Placement:** insert as the **final content section**, directly after SECTION B (Money-Back Guarantee) above.

**Background:** dark teal page background.  
**Padding:** 60px 20px, max-width 700px, margin auto.

**Heading** (centered):
- `الاسئلة` (white, bold) + small ❓ icon in a circle (light cyan/teal `#2dd4bf`) + `الشائعة` (bold, same cyan/teal `#2dd4bf`) — font-size ~32px
- Subtitle (gray, ~15px, centered): `كل ما تحتاج معرفته عن الكورس`

**5 Accordion rows** (stacked, full width, `margin-bottom: 14px`):

Each row — closed state:
- `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.15)`, `border-radius: 12px`, `padding: 18px 24px`
- Layout: a `∨` chevron icon on the **left** (RTL layout puts the icon visually on the left), question text on the right, bold white, ~16px
- On click: chevron rotates to `∧`, an answer panel expands below with smooth `max-height` transition (same pattern as the Curriculum accordion in SECTION 8), answer text in gray `#aaa`, ~14px, `padding: 0 24px 18px`

**Questions (exact order):**
1. هل الكورس مناسب ليا حتى لو حقي مؤثر أو ماعنديش جمهور كبير؟
2. أنا مهتم، بس هاخد إيه بالظبط لما اشترك؟
3. إيه اللي يميز الكورس عن غيره؟
4. هل اقدر احقق نتائج بعد قد ايه؟
5. هل أقدر أسترد فلوسي؟

> Note: answer copy wasn't visible in the screenshot (accordions were all collapsed). Use short, reasonable placeholder answers in the same tone as the rest of the page copy — this is a structural/visual clone, not a word-for-word transcript.

---

## JS Implementation Notes

### Countdown Timer
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Start from 5 minutes for demo (matching the screenshots: 0d 0h 5m 0s)
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

### Testimonial Carousel (Section A — "نتائج المشتركين")
```javascript
const track = document.querySelector('.testimonial-track');
const cards = document.querySelectorAll('.testimonial-card');
const dotsWrap = document.querySelector('.testimonial-dots');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');

cards.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => scrollToCard(i));
  dotsWrap.appendChild(dot);
});

function scrollToCard(index) {
  const card = cards[index];
  track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
}

function getCardWidth() {
  return cards[0].offsetWidth + 16; // include gap
}

prevBtn.addEventListener('click', () => track.scrollBy({ left: -getCardWidth(), behavior: 'smooth' }));
nextBtn.addEventListener('click', () => track.scrollBy({ left: getCardWidth(), behavior: 'smooth' }));

track.addEventListener('scroll', () => {
  const index = Math.round(track.scrollLeft / getCardWidth());
  document.querySelectorAll('.testimonial-dots .dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
});
```

### FAQ Accordion (Section C — "الاسئلة الشائعة")
```javascript
document.querySelectorAll('.faq-row').forEach(row => {
  row.querySelector('.faq-question').addEventListener('click', () => {
    const answer = row.querySelector('.faq-answer');
    const chevron = row.querySelector('.chevron');
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

    // close all other rows (accordion behavior, only one open at a time)
    document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = '0px');
    document.querySelectorAll('.faq-row .chevron').forEach(c => c.style.transform = 'rotate(0deg)');

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});
```

---

## Critical Visual Details From Screenshots

1. **Page background color:** NOT pure black — it's a very dark teal/green-black: `#0a1a15` to `#0d2218`
2. **Green used everywhere:** bright neon `#00e676` — buttons, highlights, price, stars progress bar fill, timeline years, chapter expand links
3. **Navbar:** pure `#000` black (darker than page bg), creates a clear visual separator
4. **CTA buttons:** `#00e676` green with `#000` black text — NOT gold/yellow (this differs from what we had before, the real site is GREEN not gold)
5. **Timer digits:** `#ff3b30` red — displayed in a slightly monospace style
6. **Testimonial section:** full white background — breaks the dark theme deliberately to add contrast
7. **Instructor journey section:** also white background with bright green year numbers (`#00a651`)
8. **Success stories section:** white background, video cards with purple play buttons `#7c3aed`
9. **Curriculum section:** back to dark, but chapter title strips are warm cream `#f5f0e8`
10. **Bonus cards:** 3D book mockup style, tilted with CSS perspective transform
11. **Value stack section:** white background again with green-bordered item rows
12. **No gold anywhere** — the real site's color palette is: dark teal bg + neon green accents + red timer + white text + yellow stars only
13. **Subscriber Results (نتائج المشتركين)**: a dark/black gradient banner strip holds the bright green section title, sitting above a horizontal carousel of phone-mockup WhatsApp screenshot cards with chevron arrows + magenta-dot pagination
14. **One carousel slide is a real embedded video** (YouTube Shorts `uhW31HShyMk`) rather than a placeholder — this is the actual "رأي العملاء" customer testimonial
15. **Money-Back Guarantee** card is the only place on the page using a gold accent — a navy ribbon + gold star medal icon — everything else stays gold-free
16. **FAQ section** keeps the dark page background, with simple bordered accordion rows and a light cyan/teal `❓` accent next to the heading — no card backgrounds, just bordered rows

---

## Output

Single file: `index.html`  
Open in browser → should look identical to the real page.  
All images are placeholder divs. All interactions (timer, accordion) work via vanilla JS.

**Updated page order including the new sections:** Navbar → Hero (2) → **Subscriber Results carousel (A, NEW)** → Pricing (3) → Testimonials (4) → Journey (5) → CTA strip (6) → Success Stories (7) → Curriculum (8) → Bonuses (9) → Value Stack (10) → **Money-Back Guarantee (B, NEW)** → **FAQ (C, NEW)**.

The only *real* (non-placeholder) embed on the entire page is the YouTube Shorts iframe inside Section A — everything else (images, other videos) stays a styled placeholder `<div>` as instructed above. Every CTA button, old and new, must use the `wa.me/201037307014` link per the Global CTA Behavior rule.
