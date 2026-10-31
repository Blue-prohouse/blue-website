# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Blue's clients are a real mix of three groups, and no single one dominates. The site serves all of them:

- **Brand and marketing teams** at Saudi companies commissioning commercials, brand films and motion content.
- **Government and semi-government entities** commissioning campaigns and documentaries.
- **Broadcasters and producers** (for example MBC) commissioning drama, programmes and series.

Each of them comes to the site to judge whether Blue can carry their project, by looking at the work, the track record and the process, and then to start a conversation.

## Product Purpose

Blue is an audiovisual production house in Riyadh. The website exists to turn a visitor's evaluation into an enquiry: a project brief through the contact form or a WhatsApp message. It also exists to be found through local search, in Arabic, for production services in Riyadh and across the Kingdom.

Success means qualified enquiries that arrive with a service, budget range and project details already filled in.

## Positioning

Two claims together, which a neighbouring studio cannot honestly copy as a pair:

1. **One team from idea to delivery.** Discovery, concept, shoot and post-production all happen in-house. The client never coordinates between several vendors.
2. **Story-first craft.** Blue comes from drama and storytelling, and that narrative instinct carries into its commercials, documentaries and motion work.

## Operating Context

- Arabic-first, right-to-left, with an English toggle. Every piece of copy exists in both languages (`data-ar` / `data-en`).
- The process is presented in four stages: discovery (written creative brief), concept (script, storyboard and detailed quote before commitment), production (approved schedule, daily reports), delivery (two free revision rounds, every platform size).
- Enquiries come through the contact form (name, company, email, phone, service, budget band, details) and through WhatsApp.
- Content (portfolio projects, blog articles, team, covers) is managed from the `/admin` panel and stored in Supabase.

## Capabilities and Constraints

- Static HTML/CSS/JS. Shared header, footer and content live in `assets/site.js`, and the design system lives in `assets/base.css`. Deployed on Vercel from GitHub; Cloudflare config is also present.
- Supabase backs the portfolio, blog, team and admin. Schema and seed data are in `supabase/`.
- Nine production services grouped into phases. One service page exists (`service-motion.html`) as the template for nine local-SEO service pages, each targeting a different Riyadh search term.
- FAQ sections on service pages are there for search rich results and AI citation.
- **Open:** whether the remaining eight service pages will be built, and how the 26 portfolio projects load from the database (the page currently shows 8).

## Brand Commitments

- Name: **Blue**. Logo files: `assets/logo-full.svg`, `assets/logo-mark.svg`.
- Voice: confident and warm, in Modern Standard Arabic, for example "We don't shoot scenes — we build worlds."
- Vision: distinctive, inspiring audiovisual work with a lasting, global impact across generations. Mission: innovative audiovisual work that touches and enriches people's lives.

## Evidence on Hand

Confirmed real:

- Founded 2014, 100+ projects delivered, two offices (Riyadh and Istanbul), nine production services.
- Clients: ASRARCO, TASOOMA, SE7A PLUS, THAAD, HIKAYAT, FAR7A, NOR EL DONYA, MBC.
- Contacts: Riyadh +966 56 756 1619 · +966 53 147 3116; Istanbul +90 541 234 79 78 · +90 544 488 82 38; contact@blue-network.sa.
- 26 portfolio projects in the database; blog articles in `assets/blog/` and `supabase/articles.sql`.

Not confirmed. Do not present these as fact:

- Motion pricing bands (8–15k / 15–35k / 35k+ SAR) are illustrative only.
- Team photos are placeholders until the real ones are uploaded from the admin panel.
- No testimonials, awards, press or case-study results are on hand. Do not invent them.

## Product Principles

1. **The work is the argument.** Every page should lead a visitor toward real projects before asking for anything.
2. **Show the whole journey.** Make the in-house, idea-to-delivery process tangible, because that is what a multi-vendor rival can't offer.
3. **Story before spec.** Describe services through what they let the client say, not through equipment and deliverable lists.
4. **Arabic first, never a translation.** RTL layout and Arabic copy are the primary experience, and English must reach parity.
5. **Only true claims.** Use confirmed numbers, clients and contacts. Leave a gap rather than fill it with an invented one.
