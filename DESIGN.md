---
name: Blue
description: Riyadh audiovisual production house. A dark, cinematic, Arabic-first site where the work glows.
colors:
  blue-hour: "#2f8fe0"
  skylight: "#7bd4ff"
  night: "#060607"
  blackout: "#000000"
  set-floor: "#121216"
  set-floor-lit: "#17171c"
  gaffer-line: "#1b1b1f"
  key-light: "#f2f2f0"
  lead-grey: "#c6c6cc"
  prose-grey: "#cfcfd4"
  dim: "#8a8a8f"
  footnote: "#4a4a50"
typography:
  display-ar:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 6.4vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  display-en:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 8vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline-ar:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)"
    fontWeight: 700
  lead:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.6vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 2
  body:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.9
  prose:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 2.05
  label:
    fontFamily: "IBM Plex Sans Arabic, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.06em"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.5vw, 4rem)"
    fontWeight: 900
rounded:
  filter: "8px"
  field: "10px"
  image: "12px"
  tile: "14px"
  card: "16px"
  pill: "60px"
  round: "50%"
spacing:
  gutter: "40px"
  grid-gap: "16px"
  section: "clamp(70px, 10vw, 130px)"
  container: "1400px"
components:
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.key-light}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.key-light}"
    textColor: "{colors.blackout}"
  button-fill:
    backgroundColor: "{colors.blue-hour}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-fill-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.blackout}"
  card:
    backgroundColor: "{colors.set-floor}"
    rounded: "{rounded.card}"
    padding: "32px 26px"
  card-hover:
    backgroundColor: "{colors.set-floor-lit}"
  tile:
    backgroundColor: "{colors.set-floor}"
    rounded: "{rounded.tile}"
  input:
    backgroundColor: "{colors.set-floor}"
    textColor: "{colors.key-light}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
  nav-quote:
    backgroundColor: "{colors.blue-hour}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
---

# Design System: Blue

## Overview

**Creative North Star: "The Night Shoot"**

The site is a set after dark. A near-black field (night) holds everything, with a faint film grain drifting over it. Large white Arabic headlines, the work itself, and a single cut of blue hour are what the light falls on. Nothing glows unless it has a reason to: the interface stays in the shadows so that projects, headlines and the next step read like lit subjects in a dark frame.

Density is low and the pacing is cinematic. Sections breathe with tall vertical padding, content reveals itself as it scrolls into view with a long ease-out, and project imagery sits slightly desaturated until the cursor reaches it and it comes up to full colour. The custom cursor, a dot inside a ring that swells and tints blue over interactive things, makes the pointer feel like a camera operator's focus.

The system is Arabic-first and right-to-left. English is a full parallel mode with its own type treatment (uppercase, ultra-heavy Archivo display), not a fallback.

**Key Characteristics:**
- Near-black canvas with film grain at 4% opacity; dark mode is the only mode.
- One chromatic accent (blue hour) plus its light partner (skylight); everything else is greyscale.
- Heavy display type: IBM Plex Sans Arabic Bold in Arabic, Archivo Black-weight uppercase in English.
- Pill-shaped buttons, softly rounded cards and tiles, hairline dividers.
- Quiet at rest, lit on interaction: hover is where colour and brightness arrive.
- Long, smooth ease-out motion (`cubic-bezier(.19,1,.22,1)`) on reveals, hovers and the header.

## Colors

A night palette: near-black and greyscale do almost all the work, and a single blue carries every signal.

### Primary
- **Blue Hour** (`blue-hour`): the brand's one voice. Used on the primary pill button and the header "quote" button, the active-nav underline, eyebrow rules, step and service numerals, FAQ "+" markers, input focus borders, text selection, and the hovered cursor ring (at 14% fill). Also tints card icons and hovered card borders at low alpha.

### Secondary
- **Skylight** (`skylight`): the lit tint of blue hour, used for text that needs to read as accent on black. That includes tile category labels, team roles, the active mobile-nav item, and the hover colour of text links and FAQ questions. It never fills a surface.

### Neutral
- **Night** (`night`): the page background and the mobile nav sheet. The base of every screen.
- **Blackout** (`blackout`): pure black for the marquee band, so it reads as a deeper cut than the page.
- **Set Floor** (`set-floor`): cards, tiles, team portraits, blog cards and form fields. The first surface step above night.
- **Set Floor, Lit** (`set-floor-lit`): the hover state of a card.
- **Gaffer Line** (`gaffer-line`): hairline dividers, such as list rows, FAQ rules, stat separators, footer top and the client-logo grid gaps.
- **Key Light** (`key-light`): primary text and headlines, plus the fill of the ghost button on hover.
- **Lead Grey** (`lead-grey`) and **Prose Grey** (`prose-grey`): intro paragraphs, CTA copy, form labels and long-form article text. Softer than key light for comfortable reading on black.
- **Dim** (`dim`): secondary text, such as card descriptions, meta, eyebrows, stat captions and breadcrumbs.
- **Footnote** (`footnote`): the copyright line and other bottom-of-page small print.

### Named Rules
**The One Blue Rule.** Blue hour is the only chromatic colour in the interface. No second accent, no gradients between hues. If something needs to stand out and blue is already used nearby, use brightness (key light) instead.

**The Skylight Is Ink Rule.** Skylight is for text and small marks on dark surfaces. It never fills a button, card or background.

## Typography

**Display Font:** IBM Plex Sans Arabic (with system-ui). In English mode, Archivo (with system-ui).
**Body Font:** IBM Plex Sans Arabic in Arabic, Archivo in English.
**Nav Font:** IBM Plex Sans Arabic by default. The `data-navfont` attribute on `<html>` can switch it to Almarai or Tajawal.

**Character:** In Arabic, a strong, contemporary sans set bold and tight, which reads as confident rather than ornamental. In English, the same headlines become uppercase Archivo at weight 900 with very tight tracking (-0.04em, line-height 0.9), like a film title card.

### Hierarchy
- **Display** (700 Arabic / 900 English, `display-ar` / `display-en`): page heroes and the H1 of each page.
- **Headline** (700, `headline-ar`): section titles (`.h2`).
- **Title** (700, `title`): sub-section and feature titles (`.h3`).
- **Lead** (400, line-height 2, `lead-grey`): the paragraph under a hero or section title, max ~60ch.
- **Body** (400, 13.5px, line-height 1.9, `dim`): card, step and blog-card descriptions.
- **Prose** (400, 1.0625rem, line-height 2.05, `prose-grey`): article body, max 70ch.
- **Label / Eyebrow** (12px Arabic with 0.06em tracking; 11px English with 0.26em tracking): eyebrow labels above section titles, always led by a 34px blue-hour rule.
- **Numeral** (Archivo 900): stats, and service/step numbers (Archivo at 11–12px with wide tracking, in blue hour).

### Named Rules
**The Two Scripts Rule.** Arabic and English each get their own type treatment. Arabic display is never uppercase-tracked like English, and English display is never set in the Arabic family. Any new heading style needs both an Arabic and an English rule.

**The Generous Leading Rule.** Arabic running text sits at line-height 1.9–2.05. Don't tighten body or prose below 1.9.

**The Western Numerals Rule.** Large figures (stats, step and service numbers) are set in Archivo, even on Arabic pages.

## Layout

- **Container:** max-width 1400px, centred, with a 40px inline gutter (`--pad`).
- **Section rhythm:** vertical padding `clamp(70px, 10vw, 130px)`. Inner-page heads start at `clamp(130px, 17vw, 210px)` to clear the fixed header.
- **Grids:** auto-fit grids with a 16–20px gap. Cards use a 265px minimum, posts 300px, team and steps 215px, footer columns 230px.
- **Portfolio mosaic:** a 6-column grid with 172px rows and 16px gaps. Tiles span large (4×2), medium (2×2) or wide (3×2) to build an editorial, uneven rhythm.
- **Direction:** layout uses logical properties (`inset-inline`, `border-inline-start`, `padding-inline`) so RTL and LTR mirror correctly.
- **Breakpoints:** 1180px (tighter nav), 1000px, 860px, 800px and 760px (stats stack, burger nav takes over).
- **Reveal:** content blocks enter at `translateY(38px)` and opacity 0, then settle over 1s on the house ease. With reduced motion turned on, grain, marquee and reveals stop.

## Elevation & Depth

The system is flat. There are no drop shadows. Depth comes from three things: **tonal steps** (night → set floor → set floor lit), **hairline borders** at low white alpha (7–12%), and **light**. Hover raises things by brightening them, tinting the border blue, or lifting the card 5px, never by casting a shadow. The fixed header becomes frosted glass once you scroll (86% night with an 18px backdrop blur and a hairline bottom border).

### Named Rules
**The No Shadows On Set Rule.** Never add `box-shadow` for elevation. To lift a surface, step its tone up, brighten its border, or nudge it upward on hover.

**The Grain Stays On Rule.** The film-grain overlay sits above all content at 4% opacity and is part of the material. Turn it off only for reduced motion.

## Shapes

Soft geometry against hard darkness. Interactive controls are full **pills** (60px radius). Content containers are **gently rounded**: cards 16px, tiles and portraits 14px, article images and the gallery 12px, form fields 10px, filter chips 8px. Icon wells use 12px corners, and social buttons and the cursor are circles. Lines are always hairlines (1–1.5px).

## Components

### Buttons
Quiet until touched.
- **Shape:** full pill (60px).
- **Ghost (default):** transparent, with a 1px border at 32% white and key-light text, padding 14px 28px, 14px type.
- **Fill (primary):** a solid blue-hour pill with white text.
- **Hover:** both variants flip to a white fill with black text (the fill variant's border also turns white) over 0.35s on the house ease.
- **Sizes:** small is 10px 20px / 13px; large is 17px 34px / 15.5px at weight 600.
- **Text link (`link-line`):** a 30px leading rule followed by the label. On hover the rule grows to 46px and the text turns skylight.

### Cards / Containers
- **Corner style:** 16px.
- **Background:** set floor, with a 1px border at 7% white.
- **Hover:** lifts 5px, the border turns blue hour at 45%, and the background steps to set floor lit.
- **Padding:** 32px 26px. Icon well: 46px square, 12px radius, blue hour at 14%.

### Portfolio Tile
The signature piece. A 14px-rounded image tile on set floor. The image sits at 45% grayscale with a slight contrast boost, then on hover scales to 1.07 and returns to full colour over 1.2s. A bottom gradient overlay to 90% black carries the skylight category label and a bold title.

### Inputs / Fields
- **Style:** set floor background, 1px border at 12% white, 10px radius, padding 14px 16px, 15px text. Labels sit above in 13px lead grey.
- **Focus:** no outline; the border turns blue hour.

### Navigation
- **Desktop:** a fixed header with the logo mark on one side, centred links in the nav font at 14.5px and 78% opacity (100% on hover and when active), and a pill language toggle plus a blue-hour "quote" pill on the other side. The active link has a 1.5px blue-hour underline. On scroll the header shrinks its padding and logo and becomes frosted glass.
- **Mobile:** a two-line burger morphs into an X and opens a full-screen night sheet of large bold links divided by hairlines. The active link is skylight.

### Marquee
A pure-black band with two huge, light-weight (300) lines of service names scrolling in opposite directions at mixed opacities, faded out at both edges. Hovering pauses it.

### FAQ
Rows divided by hairlines. The question is bold and turns skylight on hover. A blue-hour "+" rotates to "×" when the row is open, and the answer is set in dim at line-height 2.

## Do's and Don'ts

### Do:
- **Do** keep every screen on night (#060607) with grain on top.
- **Do** use blue hour for exactly one primary action per view, plus small structural marks (rules, numerals, focus).
- **Do** write both an Arabic and an English rule for any new heading or label style.
- **Do** use logical properties so layouts mirror between RTL and LTR.
- **Do** desaturate imagery at rest and bring it to full colour on hover, using the house ease.
- **Do** separate list content with gaffer-line hairlines rather than boxes.

### Don't:
- **Don't** add drop shadows. Depth is tone, border and light.
- **Don't** introduce a second accent hue or a multi-colour gradient.
- **Don't** fill surfaces with skylight. It's for text and small marks.
- **Don't** use square-cornered buttons. Actions are pills.
- **Don't** tighten Arabic running text below line-height 1.9.
- **Don't** add a light theme. The night set is the identity.
