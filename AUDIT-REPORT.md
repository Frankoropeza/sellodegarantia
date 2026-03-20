# AUDIT REPORT — sellodegarantia.com

**Date:** March 20, 2026  
**Auditor:** Senior SEO Strategist & Web Quality Auditor  
**Site:** sellodegarantia.com  
**Stack:** Astro 4, vanilla CSS, no framework  
**Pages audited:** 7 pages + components + config + content

---

## 1. Executive Summary

### Overall Score: 72/100

This is a solid foundation — better than 80% of Mexican industrial B2B sites. The architecture is clean, the config centralization is excellent, and the SEO fundamentals are mostly in place. But it has significant gaps that are costing real traffic and conversions.

### Top 3 Strengths

1. **Centralized config architecture** — `config.ts` is excellent. Single source of truth for all business data. This is agency-level engineering.
2. **FAQ sections with schema** — Every key page has FAQs with proper FAQPage JSON-LD. This is GEO-ready and targets AI Overviews and People Also Ask.
3. **Consistent component system** — TopBar, Header, Hero, CTAs, Footer, WhatsApp bubble — all pages share the same structure. Professional consistency.

### Top 5 Critical Issues

1. 🔴 **Homepage title is 86 characters** — Google will truncate it. The most important page has a broken SERP snippet.
2. 🔴 **No `<main>` landmark on any page** — The skip link points to `#main-content` but no element has that ID. Accessibility failure and semantic HTML gap.
3. 🔴 **Form uses `mailto:` action** — The cotizar form (`action="mailto:"`) won't work on most browsers/devices. Zero conversions from the form.
4. 🔴 **No hero images anywhere** — Every Hero component is a CSS gradient with text only. No product photography, no visual proof. For a manufacturing company, this kills trust.
5. 🔴 **Industry pages don't exist** — Config defines 8 industries with hrefs like `/industrias/farmaceutica/` but there are no industry pages built. All those links are 404s.

---

## 2. Page-by-Page Audit

---

### 2.1 Homepage (`src/pages/index.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 62 | Title too long, good description, schemas solid |
| Content Quality | 75 | Human tone, good E-E-A-T, slightly repetitive |
| Technical | 60 | Missing `<main>`, no skip link target, no images |
| Design/UX | 70 | Good structure, no visual imagery, CTA placement good |
| Conversion | 78 | Triple CTA strategy, FAQ, WhatsApp bubble |
| **Page Score** | **69** | |

#### SEO Details

- **Title:** `Sello de Garantía — Fabricantes de Película PVC Termoencogible y Sellos de Garantía en México` — **86 chars**. Google will truncate after ~60. Keyword repetition ("Sellos de Garantía" appears in both brand + title). Also, the title construction in Base.astro will NOT append `| Sello de Garantía` because the title already includes `SITE_NAME` at the start, but the code checks `title === SITE_NAME` not `title.startsWith(SITE_NAME)`. Result: title becomes `Sello de Garantía — Fabricantes de Película PVC Termoencogible y Sellos de Garantía en México` — way too long.
- **Meta description:** 156 chars ✅ — contains keyword, has a CTA-ish tone. Good.
- **H1:** "Sellos de Garantía y Película PVC Termoencogible" — contains primary keyword, natural. ✅
- **Heading hierarchy:** H1 → H2s in SectionHeaders → H3s in trust items. Clean. ✅
- **Internal links:** Links to /cotizar/, /productos/, /contacto/. Products section links to all 6 categories. Industries link to non-existent pages. ❌
- **Schema:** Organization + LocalBusiness + WebSite + FAQPage — excellent combination for homepage. ✅
- **GEO readiness:** The hero-seo slot provides paragraph-form citable content. FAQ answers are 40-60 words. Good for AI Overviews. ✅

#### Content Quality

- **Human tone:** ✅ Reads like a real manufacturer wrote it. "Usted trata directamente con el fabricante" is natural B2B Spanish. No AI smell.
- **E-E-A-T:** Good — mentions 28 years, specific plant location, specific processes (rotograbado, extrusión). Could be stronger with certifications or client logos.
- **Copy that sells:** Feature cards lead with benefits ("Sin intermediarios, sin sobreprecios"). Some are benefit-first, some are feature-first — inconsistent.
- **Headings:** "Lo Que Fabricamos" is OK but generic. "Fabricante Directo, Sin Intermediarios" does work. Mixed quality.

#### Technical Issues

- No `<main>` element wrapping content (skip link `#main-content` has no target)
- No actual product images — placeholder divs in CategoryCards
- Google Fonts loaded render-blocking (no `&display=swap` as query param, though the CSS file URL has it)
- TopBar hides on scroll with inline JS — acceptable but the `display:none` causes layout shift

#### Conversion

- CTA placement: post-hero ✅, mid-page ✅, pre-footer ✅ — triple CTA pattern. Excellent.
- Trust signals: 28 years, 32 states, planta propia — good but no logos, no testimonials, no case studies.
- FAQ: 7 well-crafted questions with substantive answers. The FaqSection sidebar with WhatsApp form is a conversion asset.

---

### 2.2 Products Index (`src/pages/productos/index.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 65 | Title good length, description good, weak schema |
| Content Quality | 68 | Functional but thin |
| Technical | 62 | Same structural issues as homepage |
| Design/UX | 72 | Clean grid, good card design |
| Conversion | 70 | Single CTA banner at bottom |
| **Page Score** | **67** | |

#### SEO Details

- **Title:** `Productos — Película PVC Termoencogible, Sellos, Mangas y Etiquetas | Sello de Garantía` — **~88 chars after Base.astro appends brand**. Too long again.
- **Meta description:** 155 chars. Good keywords, but reads like a list, not a pitch. Missing CTA verb.
- **Schema:** Only WebSite schema. ❌ Should have BreadcrumbList + Organization at minimum. This is a category hub page — ItemList schema would be ideal.
- **Breadcrumb:** Present in HTML ✅ but breadcrumb schema is generated inside the Breadcrumb component (duplicating with any page-level breadcrumb schema). Check for double-injection.
- **Internal links:** Links to all 6 category pages + subcategories through CategoryCards. Good hub structure. ✅
- **Typo in hero-seo:** "manufactuiran" should be "manufacturan". ❌

#### Content Quality

- Hero-seo content explains what they make and how PVC termoencogible works — good educational content for GEO.
- The page is essentially a category listing. Content is thin beyond the hero. For a category page, this is acceptable but a short intro paragraph below the breadcrumb would help.
- No FAQ section on this page — missed opportunity.

#### Conversion

- Only one CTA banner at the bottom. Post-hero CTA missing. For a catalog page, add "No sabe qué producto necesita? → Cotizar" after the hero.

---

### 2.3 Sellos de Garantía Category (`src/pages/productos/sellos-de-garantia.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 78 | Strong title, description, schemas, FAQ |
| Content Quality | 80 | Specs table is excellent, product cards detailed |
| Technical | 68 | Good semantic HTML, images may not exist |
| Design/UX | 76 | Cards + specs table + FAQ — complete page |
| Conversion | 82 | Multiple CTAs, free samples offer, WhatsApp |
| **Page Score** | **77** | |

This is the **best page on the site**. It's the pillar page for the primary keyword.

#### SEO Details

- **Title:** `Sellos de Garantía PVC Termoencogible | Sello de Garantía` — **59 chars**. ✅ Perfect length. Keyword first.
- **Meta description:** 160 chars. Contains keyword, mentions specifics (calibres, piezas), has "Envíos nacionales" as soft CTA. ✅
- **Schemas:** Organization + LocalBusiness + Breadcrumb + FAQ — all correct. ✅ Missing: ProductCategory or ItemList for the 6 product types listed.
- **H1:** "Sellos de Garantía de PVC Termoencogible" — excellent. Natural, keyword-rich. ✅
- **Hero-seo:** Two paragraphs explaining exactly what sellos de garantía are, how they work, and what's offered. Citable, specific, GEO-ready. ✅
- **Specs table:** Technical data in a clean table format — Google can extract this for AI Overviews. ✅

#### Content Quality

- Product cards with specific specs (calibres, diámetros, pedido mínimo) — this is the kind of specificity that builds trust.
- Only "sello-liso-transparente" has a slug linking to a product detail page. The other 5 products link to /cotizar/ or /contacto/ — acceptable but creates a shallow content depth.
- FAQ answers are specific and actionable. "Enviamos muestras sin costo" is a strong conversion line.

#### Issues

- **Breadcrumb placement:** Breadcrumb renders INSIDE the hero (before hero content) in the HTML flow because it's placed between Header and Hero in the component order. Should be after the hero. Actually, looking at the code, Breadcrumb is placed BEFORE Hero. This means the breadcrumb appears above the hero section, which is unusual and may look odd.
- Some product card images may 404 (sello-liso-color-pvc.avif, etc.) — need to verify image files exist.

---

### 2.4 Product Detail (`src/pages/productos/[slug].astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 75 | Dynamic schema, breadcrumbs, good structure |
| Content Quality | 82 | sello-liso-transparente.md is excellent content |
| Technical | 70 | Good layout, images may not exist, gallery |
| Design/UX | 78 | Two-column layout with sticky sidebar |
| Conversion | 85 | CTA sidebar, WhatsApp direct, related products |
| **Page Score** | **78** | |

This is tied for best page. The content in `sello-liso-transparente.md` is genuinely well-written.

#### SEO Details

- **Title:** `Sello de Garantía Liso Transparente — PVC Termoencogible Cristal | Sello de Garantía` — **~83 chars with brand appended**. Too long. The frontmatter title already contains the brand keyword, so appending `| Sello de Garantía` is redundant and exceeds 60 chars.
- **Meta description:** Good — specific, mentions calibres, diámetros, pedido mínimo. 158 chars. ✅
- **Schemas:** Organization + LocalBusiness + Breadcrumb + Product. Product schema is well-formed with manufacturer, brand, category, countryOfOrigin. ✅ Missing: `offers` (no price info, but could use "contact for pricing" pattern), `image` property.
- **Content quality check:** The markdown content reads human. "Cada pedido se fabrica al diámetro exacto de su tapa" — this is real manufacturer talk. The calibre explanations are specific and useful. ✅ No AI smell.

#### Content Quality (sello-liso-transparente.md)

- **Structure:** Definition → use cases → specs → application methods → custom fabrication. Logical flow. ✅
- **Specificity:** Mentions exact percentages (55-60% encogimiento), temperature ranges (90-130°C), calibre recommendations per use case. This is E-E-A-T gold.
- **Bullet list with calibre explanations:** Each calibre has a clear use case. This is scannable and informative.
- **CTA at end:** "Le enviamos muestras en los tres calibres" — soft sell, trust-building. ✅
- **Missing:** No external links to authoritative sources. No date published/updated. No author attribution.

#### Technical

- Gallery images in frontmatter may not exist on disk — placeholder fallback handles this gracefully with `onerror`.
- Product layout is 2-column (main + 360px sidebar) — good. Sidebar is sticky. ✅
- Related products pull from same category — good internal linking. ✅

---

### 2.5 Nosotros (`src/pages/nosotros.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 60 | Title is weak, no breadcrumb schema, thin schema |
| Content Quality | 78 | History narrative is good, differentiators are solid |
| Technical | 62 | Same global issues |
| Design/UX | 72 | Good structure but could use imagery |
| Conversion | 65 | Single CTA at bottom, no mid-page CTAs |
| **Page Score** | **67** | |

#### SEO Details

- **Title:** `Nosotros — Quiénes Somos | Sello de Garantía` — **47 chars**. Short but wastes the title on generic "Quiénes Somos". Better: `Nosotros — 28 Años Fabricando Sellos de Garantía | Sello de Garantía` (65 chars — needs trimming but the idea is right).
- **Meta description:** Dynamic — uses template literal with EXPERIENCE_YEARS. ~155 chars. Contains keyword. ✅ But reads a bit robotic.
- **Schema:** Only Organization. ❌ Should have Breadcrumb schema. Could benefit from AboutPage type if it existed (it doesn't in schema.org, but Organization is fine).
- **Breadcrumb:** Present in HTML but placed after Hero — inconsistent with other pages where breadcrumb is before Hero (sellos-de-garantia) or after Hero (productos/index).

#### Content Quality

- **History section:** Three-period narrative (1998-2005, 2005-2015, 2015-present) — effective storytelling. Reads human. ✅
- **Differentiators:** 6 concrete advantages, each with a clear title and explanation. "Tiempos de Entrega Reales" with specific days is excellent.
- **Process section:** 5-step process is clear and builds confidence. Shows they know what they're doing.
- **Missing:** No team photos, no plant photos, no certifications, no client logos. For a "Nosotros" page, this lacks visual proof.
- **No FAQ section** — missed opportunity for "¿Cómo empezar a trabajar con ustedes?" type questions.

---

### 2.6 Contacto (`src/pages/contacto.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 58 | Title is weak, description is robotic |
| Content Quality | 55 | Minimal content, just contact details |
| Technical | 65 | Map embed, good HTML structure |
| Design/UX | 68 | Clean 2-column layout |
| Conversion | 60 | No form, no CTA beyond contact info |
| **Page Score** | **61** | |

#### SEO Details

- **Title:** `Contacto — Ubícanos y Comunícate con Nosotros | Sello de Garantía` — **~65 chars**. Slightly over but the real problem is it's generic. "Ubícanos y Comunícate" sounds translated/unnatural.
- **Meta description:** Template-generated with phone, email, address. Reads like a data dump, not a pitch. No CTA verb.
- **Schema:** LocalBusiness — correct for a contact page. ✅ Missing: Breadcrumb.
- **No FAQ** on the contact page — missed opportunity for "¿Cuál es su horario?" "¿Dónde están ubicados?" which would be GEO fodder.

#### Content Quality

- This page is a contact info display + Google Maps embed. That's it. For a contact page, this is the bare minimum.
- No context-setting paragraph explaining how to engage (e.g., "¿Es la primera vez que nos contacta? Esto es lo que necesitamos para cotizar...").
- **No contact form.** The cotizar page has a form, but the contacto page doesn't even have a basic "Envíenos un mensaje" form. Users who land on /contacto/ expecting to submit a message will bounce.

#### Technical

- Map iframe loads lazily ✅. Has a title attribute ✅. But the coordinates in the embed URL seem generic — may not point to the exact location.
- Emoji icons (📞 💬 ✉️ 🕐 📍) are used instead of SVG icons — inconsistent with the Header component which uses proper SVGs.

---

### 2.7 Cotizar (`src/pages/cotizar.astro`)

| Area | Score | Notes |
|------|-------|-------|
| SEO | 68 | Decent title, no schema |
| Content Quality | 72 | Good form fields, helpful sidebar |
| Technical | 45 | mailto: form is broken, no real submission |
| Design/UX | 75 | Good 2-column layout with sidebar info |
| Conversion | 40 | Form doesn't actually work! |
| **Page Score** | **60** | |

#### SEO Details

- **Title:** `Cotizar — Solicite Cotización de Sellos de Garantía y Película PVC | Sello de Garantía` — **~83 chars**. Way too long.
- **Meta description:** 133 chars. Could be longer. Has keyword and CTA ("Respuesta el mismo día hábil"). ✅
- **Schema:** NONE. ❌ No structured data at all. This page should have at minimum Organization or LocalBusiness + Breadcrumb.
- **No FAQ section** — missed opportunity for "¿Cuánto cuesta?" "¿Cuál es el pedido mínimo?" etc.

#### CRITICAL: The Form is Broken

```html
<form action="mailto:ventas@sellodegarantia.com" method="post" enctype="text/plain">
```

This `mailto:` form:
- Does NOT work on most mobile browsers
- Does NOT work if the user has no email client configured
- Opens the user's email app instead of submitting a web form
- Loses all form structure/formatting
- **Zero conversion tracking possible**

This is the #1 conversion page on the site and the form doesn't work. This is a critical failure.

#### Content Quality

- **Form fields are well-designed:** Product selector pulls from CATEGORIES, quantity ranges are practical, calibre selector includes "No sé / Asesoría" — smart.
- **Sidebar info cards:** "¿Prefiere contacto directo?" with phone/WhatsApp, "¿Qué datos necesitamos?" checklist, "Tiempos de Respuesta" — all three build confidence and reduce friction. Excellent.
- **Missing:** Success state / confirmation message. Even if the form worked, there's no feedback.

---

## 3. Cross-Site Issues

### 3.1 Title Tag Length Problem (Systemic)

The `Base.astro` layout appends `| Sello de Garantía` to every title that isn't exactly `SITE_NAME`. This means every page title gets 21 extra characters. Most pages already have long titles, resulting in truncated SERP snippets.

**Affected pages:**
| Page | Final Title Length | Status |
|------|-------------------|--------|
| Homepage | ~86 chars | 🔴 Truncated |
| Productos | ~88 chars | 🔴 Truncated |
| Sellos de Garantía | ~59 chars | ✅ OK |
| [slug] product | ~83 chars | 🔴 Truncated |
| Nosotros | ~47 chars | ✅ OK (but wasted) |
| Contacto | ~65 chars | 🟡 Borderline |
| Cotizar | ~83 chars | 🔴 Truncated |

### 3.2 Missing `<main>` Landmark

No page wraps content in `<main>`. The skip link in `Header.astro` targets `#main-content` but this ID doesn't exist anywhere. Every page fails WCAG 2.1 SC 1.3.1 (Info and Relationships) and SC 2.4.1 (Bypass Blocks).

### 3.3 No Hero Images

The Hero component is purely text on a CSS gradient. For a manufacturing company, this is a huge miss. Visitors need to see:
- The actual factory/plant
- Real products (sellos on bottles, mangas on products)
- Production equipment

Without images, the hero is indistinguishable from a template site.

### 3.4 Industry Pages Are 404s

Config defines 8 industries with links like `/industrias/farmaceutica/`. The homepage and footer link to them. But no industry pages exist. **All 8 links are broken.** This creates:
- 8 broken links from the homepage
- 6 broken links from the footer (on every page)
- Bad crawl signals for Google

### 3.5 Missing Privacy Policy Page

Footer links to `/aviso-de-privacidad/` — this page likely doesn't exist. Legal requirement in Mexico (LFPDPPP) and a trust signal for E-E-A-T.

### 3.6 Empty Social Media Links

`config.ts` has `SOCIAL = { facebook: '', instagram: '' }` — empty strings. If any component renders these, they'll produce broken links. More importantly, having zero social presence hurts E-E-A-T authoritativeness.

### 3.7 Category Subcategory Links Are Circular

In `config.ts`, ALL subcategories within a category point to the same parent URL. For example, every subcategory under "Sellos de Garantía" links to `/productos/sellos-de-garantia/`. This means clicking "Sello liso transparente" and "Sello para garrafón 20L" go to the same page. Only `sello-liso-transparente` has a dedicated product page via `[slug].astro`. The rest are phantom links.

### 3.8 No `robots.txt` or `sitemap.xml` Referenced

No evidence of robots.txt or sitemap configuration in the codebase. Astro can generate these but they need to be configured.

### 3.9 Google Fonts Loading

Fonts load from Google Fonts CDN with `display=swap` (correct). However, preconnect hints are in place ✅. The font request adds ~50-100ms to render. Consider self-hosting Inter for better performance.

### 3.10 Breadcrumb Placement Inconsistency

| Page | Breadcrumb Position |
|------|-------------------|
| Homepage | None |
| Productos index | After Hero |
| Sellos de Garantía | Before Hero |
| [slug] Product | Before Hero |
| Nosotros | After Hero |
| Contacto | After Hero |
| Cotizar | After Hero |

Inconsistent. Pick one (after Hero is more common) and stick with it.

---

## 4. Component-Level Findings

### Header.astro ✅ Good
- Skip link present (but target missing — see above)
- Proper ARIA attributes on hamburger
- Mobile menu with proper aria-hidden toggling
- Dropdown on hover for desktop — accessible enough for a business site
- Active state detection works correctly

### Hero.astro 🟡 Needs Work
- No support for background images — only CSS gradient
- Metrics section is a nice touch for credibility
- The hero-seo slot is clever — allows SEO content without cluttering the visual hero
- **Issue:** hero-seo text is `font-size: var(--font-size-sm)` with reduced opacity — effectively hidden to users. This is a borderline cloaking pattern. Google could penalize if the content diverges significantly from the visible hero text. Currently it's supplementary, not divergent, so it's OK — but risky.

### FaqSection.astro ✅ Excellent
- Two-column layout with WhatsApp mini-form in sidebar — innovative
- WhatsApp form pre-fills message with name + product + question — reduces friction
- Inline JS for form submission is minimal and functional
- FAQ items use `<details>` — semantic, accessible, no-JS fallback works

### Footer.astro ✅ Good
- Comprehensive navigation: Products, Industries, Company
- Contact info present
- Privacy policy link (page may not exist)
- Year is dynamic
- Links to industry pages that don't exist ❌

### WhatsAppBubble.astro ✅ Good
- Proper aria-label
- Fixed position, correct z-index
- WhatsApp green color correct
- Pre-filled message via WHATSAPP_HREF

### TopBar.astro 🟡 Minor Issue
- Hides on scroll with `display: none` — causes layout shift. Should use `transform: translateY(-100%)` with transition.
- Contains keyword text "Fabricantes de sellos de garantía y película termoencogible en México" — this is a thin SEO tactic but not harmful.

### Breadcrumb.astro ✅ Good
- Generates its own JSON-LD schema — but this means pages that also pass breadcrumb schema via `structuredData` prop could have DUPLICATE breadcrumb schemas. Check sellos-de-garantia.astro — it passes `breadcrumbSchema(breadcrumbs)` in structuredData AND renders `<Breadcrumb>` which generates its own schema. **Duplicate schema.**

### CategoryCard.astro ✅ Good
- Clean card design
- Subcategory links are a nice UX touch
- Images have width/height/lazy/decoding — all correct
- Placeholder fallback for missing images

### ProductGallery.astro ✅ Good
- SVG placeholder with "Imagen pendiente" text — graceful fallback
- `onerror` handler on images — handles broken image URLs
- Alt text is descriptive: `{title} — vista {i + 1}`
- Grid layout responsive

---

## 5. Design Tokens & CSS Audit (`global.css`)

### Strengths
- Complete design token system: colors, typography, spacing, borders, shadows ✅
- Clean CSS reset ✅
- Responsive grid utilities (grid-2, grid-3, grid-4) ✅
- Button system with variants ✅
- `.sr-only` utility for accessibility ✅
- `.prose` styles for markdown content — thoughtful ✅
- Specs table styles are professional ✅

### Issues
- **No dark mode support** — not critical for B2B but worth noting
- **No focus-visible styles** — keyboard navigation users can't see focus state. Accessibility gap.
- **Container max-width is 1400px** — generous but fine for this content density
- **No animation/transition utilities** — all transitions are defined inline per component
- **Shadow system is minimal** — only sm and md. Could use lg for hero overlays

---

## 6. Schema/Structured Data Audit (`seo.ts`)

### Strengths
- Clean, reusable generator functions ✅
- `organizationSchema()` includes foundingDate, geo coordinates, areaServed ✅
- `localBusinessSchema()` uses `Manufacturer` type — correct and specific ✅
- `faqSchema()` is properly structured ✅
- `productSchema()` includes manufacturer, brand, countryOfOrigin ✅
- `breadcrumbSchema()` handles relative URLs correctly ✅

### Issues
- **`organizationSchema()` foundingDate** uses `new Date().getFullYear() - EXPERIENCE_YEARS` — this means the founding year changes every year. Should be hardcoded to `1998`.
- **`localBusinessSchema()` telephone** field uses `PHONE_HREF` which is `tel:+525556863599` — the tel: protocol shouldn't be in the schema telephone field. Should be plain `+52 55 5686 3599`.
- **`productSchema()` missing `image` property** — Google requires image for Product rich results.
- **`productSchema()` missing `offers`** — Without offers (even "contact for pricing"), Google won't show Product rich results.
- **`localBusinessSchema()` dayOfWeek** — The `Mo-Fr` format is incorrect for schema.org. Should be an array: `["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]`. The current code tries to split on `-` but the logic is flawed.
- **No `sameAs` links** in Organization schema — empty array. Should include actual social profiles or be removed.

---

## 7. Prioritized Fix List

### 🔴 Critical (Fix Immediately)

| # | Issue | Page(s) | Fix |
|---|-------|---------|-----|
| C1 | **Cotizar form uses mailto: action** | cotizar.astro | Replace with a real form handler (Netlify Forms, Formspree, Astro API endpoint, or WhatsApp redirect). The form is the primary conversion tool and it's non-functional. |
| C2 | **Homepage title is 86 chars** | index.astro | Change title to: `Sellos de Garantía y Película PVC Termoencogible | Fabricantes México` (~66 chars — trim "en" to fit). Or better: `Sellos de Garantía PVC — Fabricantes de Película Termoencogible` (62 chars). |
| C3 | **No `<main>` element on any page** | Base.astro | Wrap `<slot />` in `<main id="main-content">`. One change fixes all pages. |
| C4 | **Industry links are all 404** | config.ts, index.astro, Footer | Either: (a) create industry pages, or (b) change all industry hrefs to anchor to `/#industrias` section, or (c) remove industry links from nav/footer until pages exist. |
| C5 | **Duplicate breadcrumb schemas** | sellos-de-garantia.astro, [slug].astro | Remove `breadcrumbSchema()` from the `structuredData` array on pages that also render the `<Breadcrumb>` component (which generates its own schema). |

### 🟠 High Priority (Fix This Week)

| # | Issue | Page(s) | Fix |
|---|-------|---------|-----|
| H1 | **All page titles too long** | Multiple | Rewrite all titles to fit 50-60 chars. See specific recommendations in Section 8. |
| H2 | **Organization foundingDate is dynamic** | seo.ts | Change `foundingDate` to hardcoded `'1998'`. |
| H3 | **LocalBusiness telephone has tel: prefix** | seo.ts | Change to: `telephone: '+52 55 5686 3599'` (import PHONE instead of PHONE_HREF). |
| H4 | **dayOfWeek format incorrect in schema** | seo.ts | Change to full day names array: `["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]` for Mo-Fr, `["Saturday"]` for Sa. |
| H5 | **Product schema missing image and offers** | seo.ts | Add `image` parameter to `productSchema()` and add an `offers` object with `priceSpecification` or `availability: "https://schema.org/InStock"`. |
| H6 | **Typo "manufactuiran"** | productos/index.astro | Change to "manufacturan". |
| H7 | **No schema on cotizar page** | cotizar.astro | Add `localBusinessSchema()` and `breadcrumbSchema()`. |
| H8 | **Privacy policy page missing** | (new page needed) | Create `/aviso-de-privacidad/` page — legal requirement in Mexico. |
| H9 | **Subcategory links are circular** | config.ts | Each subcategory should link to its own product detail page (create new .md files) or use anchor links within the category page. |

### 🟡 Medium Priority (This Month)

| # | Issue | Page(s) | Fix |
|---|-------|---------|-----|
| M1 | **No hero images** | Hero.astro, all pages | Add support for `heroImage` prop in Hero component. Source real product/factory photography. |
| M2 | **No focus-visible styles** | global.css | Add: `*:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }` |
| M3 | **Breadcrumb placement inconsistent** | Multiple pages | Standardize: always render Breadcrumb immediately after Hero. |
| M4 | **Contact page has no form** | contacto.astro | Add a simple "Envíenos un mensaje" form, or at minimum a prominent link to /cotizar/. |
| M5 | **No robots.txt or sitemap** | Project config | Add `@astrojs/sitemap` integration and create a `public/robots.txt`. |
| M6 | **TopBar scroll hide causes layout shift** | TopBar.astro | Use `transform: translateY(-100%)` + `transition` instead of `display: none`. |
| M7 | **Nosotros page title is weak** | nosotros.astro | Change to: `Nosotros — 28 Años Fabricando Sellos en México` |
| M8 | **Contacto page title is generic** | contacto.astro | Change to: `Contacto — Planta en CDMX | Sello de Garantía` |
| M9 | **No external links on any page** | All | Add 2-3 external links to authoritative sources (COFEPRIS, industry associations, PVC material specs). |
| M10 | **No publication/update dates** | Product pages | Add `datePublished` and `dateModified` to product schema and visible on page. |

### 🟢 Low Priority (When Possible)

| # | Issue | Page(s) | Fix |
|---|-------|---------|-----|
| L1 | **Self-host Inter font** | Base.astro, global.css | Download Inter, add to `/public/fonts/`, use `@font-face` declarations. Saves ~100ms. |
| L2 | **Empty social media links** | config.ts | Either create social profiles and add URLs, or remove from config. |
| L3 | **No testimonials anywhere** | All | Add a testimonials section to homepage (even 3 short quotes from real clients would help E-E-A-T). |
| L4 | **No OG image per page** | All | Create page-specific OG images. Currently all pages use `/og-default.png`. |
| L5 | **Add preload for hero gradient** | Hero.astro | The gradient renders instantly (no image to preload), but LCP could be improved by inlining critical CSS. |
| L6 | **No 404 page** | (new page needed) | Create a custom 404.astro with navigation back to homepage/products. |
| L7 | **Emoji icons on contacto** | contacto.astro | Replace 📞 💬 ✉️ 🕐 📍 with proper SVG icons for consistency with Header/Footer. |
| L8 | **FaqSection hardcodes WhatsApp number** | FaqSection.astro | Line: `var wa = 'https://wa.me/5215556863599...'` — should use the config WHATSAPP constant. Currently it's inline JS so it can't access Astro props easily, but the number should at least match config. |

---

## 8. Specific Title Tag Recommendations

| Page | Current (estimated) | Recommended | Chars |
|------|-------------------|-------------|-------|
| Homepage | `Sello de Garantía — Fabricantes de Película PVC Termoencogible y Sellos de Garantía en México` (86) | `Sellos de Garantía PVC — Fabricante de Película Termoencogible` | 62 |
| Productos | `Productos — Película PVC Termoencogible, Sellos, Mangas y Etiquetas \| Sello de Garantía` (88) | `Productos PVC Termoencogible — Sellos, Mangas y Etiquetas` | 59 |
| Sellos de Garantía | `Sellos de Garantía PVC Termoencogible \| Sello de Garantía` (59) | ✅ Keep as is | 59 |
| Sello Liso Transparente | `Sello de Garantía Liso Transparente — PVC Termoencogible Cristal \| Sello de Garantía` (83) | `Sello Liso Transparente PVC — Termoencogible Cristal` | 53 |
| Nosotros | `Nosotros — Quiénes Somos \| Sello de Garantía` (47) | `28 Años Fabricando Sellos de Garantía en México \| Nosotros` | 60 |
| Contacto | `Contacto — Ubícanos y Comunícate con Nosotros \| Sello de Garantía` (65) | `Contacto — Planta en CDMX, Iztapalapa \| Sello de Garantía` | 59 |
| Cotizar | `Cotizar — Solicite Cotización de Sellos de Garantía y Película PVC \| Sello de Garantía` (83) | `Cotizar Sellos de Garantía y Película PVC \| Sello de Garantía` | 62 |

**Note:** For the homepage, consider NOT appending `| Sello de Garantía` since the brand IS the page. Modify Base.astro to handle this case.

---

## 9. GEO (Generative Engine Optimization) Assessment

### What's Working
- FAQ sections with direct, complete answers (40-60 words) ✅
- Hero-seo paragraphs provide definition-style content ("Los sellos de garantía de PVC termoencogible son bandas de película plástica que...") ✅
- Specs tables with structured data ✅
- Specific numbers throughout (28 years, 40-80 micras, 55-60% encogimiento, 90-130°C) ✅

### What's Missing
- **No "What is..." definitions** — Add a clear "¿Qué es un sello de garantía?" section to the sellos-de-garantia page that starts with "Un sello de garantía es..." format.
- **No comparison content** — "Sello liso vs. sello impreso" or "PVC vs. PETG vs. OPS" comparisons are highly extractable by AI.
- **No "How much does..." content** — Pricing ranges or "desde $X por millar" would answer the most common commercial query.
- **No author/expert attribution** — Content has no named expert or authority figure.
- **DatePublished/DateModified missing** — AI search values freshness signals.

---

## 10. Final Verdict

**This site is a 72/100.** The bones are excellent — the architecture, config system, and component library are professional. The content reads human and the SEO foundations are mostly solid.

But it's being held back by execution gaps:
1. A conversion form that doesn't work
2. No product photography anywhere
3. Broken links to non-existent industry pages
4. Titles that Google truncates
5. Schema errors that prevent rich results

Fix the 🔴 criticals and 🟠 highs, and this site jumps to 85+. Add real photography and create the missing pages, and it's a 90+ site that will compete effectively for "sellos de garantía" queries in Mexico.

---

*End of audit. No code changes were made.*
