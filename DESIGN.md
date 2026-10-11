# CoreLinkDev Design System

## Product
CoreLinkDev is a small web engineering studio serving small businesses in the United States. The marketing site's job is to establish premium credibility quickly, show concrete work, explain a simple buying process, and drive free-demo requests.

## Direction
Technical premium, not editorial boutique. Clean, confident, highly legible, with a restrained engineering feel. Avoid the cream-paper + serif-italic + hairline-newspaper aesthetic and avoid decorative numbering except for true sequences.

## Visual tokens
- Background: #F7F8FB
- Surface: #EEF1F6
- Ink: #0B0E14
- Soft ink: #4F5868
- Hairline: #D6DCE5
- CoreLink blue: #3C6DF0
- Accent soft: #E9EFFF
- Primary type: Inter Variable
- Radius: 20–30px for hero/work/pricing surfaces; pill buttons
- Shadow: soft large-area elevation only on major product surfaces

## Signature
The homepage hero presents a finished website inside a restrained browser/build surface, with four engineering proof chips: mobile-first, speed, security, custom code. This is the primary memorable visual device.

## Layout
Use large typography, generous but controlled spacing, and asymmetric 12-column compositions. Work imagery is large and direct. Dark sections are reserved for capability contrast, not used as the default page theme.

## Interaction
Motion is sparse and functional. Hover may lift a card or button by 1–2px. Respect reduced motion. All interactive elements need visible focus.

## Content
Plain English, direct claims, factual proof. Avoid vague agency language, fake quotes, filler labels, decorative “studio notebook” copy, and repeated sales statements.

## Link controls
Secondary action links use clean white oval outlines matching the boxed logo, with no underlines. Standalone links use a 44px minimum height; links inside sentences use a compact 28px treatment. Header Pay and Start a project share the same geometry and retain the red logo-dot separator. Navigation indicates hover/current-page state with an oval outline instead of an underline.

The canonical implementations are `.link-pill`, `.link-pill-inline`, and `.nav-pill` in `src/styles.css`. They reuse the existing `--hairline`, `--ink`, `--ink-soft`, and surface tokens. Responsive visibility utilities remain authoritative; phone-sized headers hide the demo link and its separator together.

On dark contact panels, `.link-pill.link-pill-outline` uses a thin light outline, inherits the white text, and keeps the panel background visible at rest, hover, and press. Explicit phone anchors prevent browser-created underline styling.

Desktop Services expands into a slim 64px row integrated below the header. Its four 40px white oval links are centered within the same content container as the page, using 13.5px semibold text, quiet arrows, and the existing hairline, background, ink, and surface tokens. Top and bottom rules align with the page gutters. The trigger matches the rounded navigation controls and uses a chevron. Only 64px is reserved while open, avoiding both page-text overlap and the previous large empty band. Pointer-leave, focus-leave, Escape, and link-selection close it. The canonical selectors are `.services-menu-trigger`, `.services-menu-popover`, `.services-menu-panel`, and `.services-menu-link` in `src/styles.css`.

## Call-to-action copy
Use “Start a project” consistently in desktop and mobile navigation and “Get in touch” in the footer. Introduce the offer with “Get a free demo” in the main website-design hero; later prompts use context such as “Discuss your project” or “Let’s talk” rather than repeating the demo request. These links still lead to the existing contact form; they do not imply checkout, an instant generated demo, or a different service. Keep “Request my free demo” on the actual form submission, where it accurately names the action. Preserve the free-demo terms in supporting copy and metadata. This is a copy-only refinement: routes, sections, styles, and destinations stay intact.
