---
name: ohhmydesign-branding
description: "Use this skill when designing for OhhMyDesign, a branding and development studio. This skill provides access to their confident, playful, and technically sharp aesthetic, including their primary color palette with \"#f0531c\" as the main accent, and typography using \"Bricolage Grotesque\" for headings and \"Hanken Grotesk\" for body text. It's ideal for projects that need to convey brand identity for b"
packages:
  - name: shadcn
    purpose: Accessible, unstyled UI primitives you copy into the project
    kind: setup
    curated: true
    command: pnpm dlx shadcn@latest add
  - name: clsx
    purpose: Tiny utility for conditionally joining class names
    kind: dependency
    curated: true
  - name: tailwind-merge
    purpose: Merge Tailwind classes without style conflicts
    kind: dependency
    curated: true
  - name: class-variance-authority
    purpose: Type-safe component style variants (CVA)
    kind: dependency
    curated: true
  - name: sonner
    purpose: Accessible, lightweight toast notifications
    kind: dependency
    curated: true
  - name: framer-motion
    purpose: Declarative animations, transitions and gesture handling
    kind: dependency
    curated: true
  - name: react-hot-toast
    purpose: For displaying toast notifications, offering more customization than Sonner.
    kind: dependency
    curated: false
  - name: react-scroll
    purpose: For smooth scrolling to various sections of the page, complementing animations.
    kind: dependency
    curated: false
  - name: zustand
    purpose: Lightweight state management for managing global UI state like theme or custom cursor state.
    kind: dependency
    curated: false
  - name: react-custom-cursors
    purpose: To implement the described custom cursor that transforms on hover.
    kind: dependency
    curated: false
---
```yaml
brand: OhhMyDesign
mood: Confident, playful, and technically sharp, with a friendly and approachable energy.
scheme: light
colors:
  primary: "#f0531c"
  primary-bright: "#f57140"
  primary-deep: "#d94713"
  on-primary: "#ffffff"
  ink: "#14202b"
  ink-deep: "#0e1822"
  ink-soft: "#4a6173"
  on-ink: "#ffffff"
  canvas: "#ffffff"
  paper: "#ffffff"
  cloud: "#f2f4f6"
  hairline: "#e7ecf2"
  hairline-strong: "#c4cbd6"
  link: "#14202b"
  link-pressed: "#0e1822"
  success: "#27c06b"
  warning: "#febc2e"
  error: "#ff6159"
  accent-sky: "#a6d6f3"
  accent-sand: "#fbe9cf"
  accent-peach: "#fff3ee"
typography:
  display-xl: { fontFamily: "Bricolage Grotesque", fontSize: 86px, fontWeight: 800, lineHeight: 1 }
  display-lg: { fontFamily: "Bricolage Grotesque", fontSize: 44px, fontWeight: 800, lineHeight: 1.1 }
  display-md: { fontFamily: "Bricolage Grotesque", fontSize: 34px, fontWeight: 700, lineHeight: 1.2 }
  body-lg: { fontFamily: "Hanken Grotesk", fontSize: 20px, fontWeight: 400, lineHeight: 1.5 }
  body-md: { fontFamily: "Hanken Grotesk", fontSize: 16px, fontWeight: 500, lineHeight: 1.6 }
  body-sm: { fontFamily: "Hanken Grotesk", fontSize: 14px, fontWeight: 400, lineHeight: 1.5 }
  button-md: { fontFamily: "Hanken Grotesk", fontSize: 14px, fontWeight: 700, lineHeight: 1 }
  link-md: { fontFamily: "Hanken Grotesk", fontSize: 14px, fontWeight: 500, lineHeight: 1.4 }
  code-md: { fontFamily: "Space Mono", fontSize: 12px, fontWeight: 400, lineHeight: 1.4 }
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 10px
  lg: 18px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section-sm: 60px
  section-md: 90px
shadows:
  none: "none"
  soft-lift: "rgba(20, 32, 43, 0.5) 0px 6px 16px -8px"
  card: "rgba(20, 19, 16, 0.4) 0px 12px 32px -18px"
  primary-glow: "rgb(240, 83, 28) 0px 12px 26px -12px"
  primary-glow-strong: "rgba(240, 83, 28, 0.7) 0px 14px 30px -10px"
motion:
  duration-fast: "150ms"
  duration-base: "250ms"
  duration-slow: "450ms"
  ease-standard: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  ease-emphasized: "cubic-bezier(0.7, 0, 0.2, 1)"
  transition-default: "all {motion.duration-base} {motion.ease-standard}"
  transition-transform: "transform {motion.duration-base} {motion.ease-standard}"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    color: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    shadow: "{shadows.primary-glow}"
    border: "none"
    cursor: "pointer"
  button-primary-hover:
    transform: "translateY(-2px)"
    shadow: "{shadows.primary-glow-strong}"
  button-secondary:
    backgroundColor: "transparent"
    color: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    border: "1px solid {colors.ink}"
    cursor: "pointer"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    color: "{colors.on-ink}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    shadow: "{shadows.card}"
    border: "1px solid {colors.hairline}"
  navigation:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
    shadow: "{shadows.soft-lift}"
    border: "1px solid {colors.hairline}"
  nav-item:
    color: "{colors.ink-soft}"
    typography: "{typography.link-md}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
    cursor: "pointer"
  nav-item-active:
    color: "{colors.ink}"
    backgroundColor: "{colors.cloud}"
  code-tag:
    backgroundColor: "{colors.hairline}"
    color: "{colors.ink-soft}"
    typography: "{typography.code-md}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
```

## Visual Theme & Atmosphere

The OhhMyDesign brand projects a dynamic and playful confidence. It balances a sharp, tech-forward aesthetic with a friendly, human touch, creating an atmosphere that is both professional and approachable. The visual language is energetic, characterized by the bold use of `{colors.primary}`, a vibrant orange that immediately draws the eye to key actions. This is contrasted with a clean, high-contrast core palette of deep blues and crisp whites, ensuring clarity and focus. The typography is a key player, with the chunky, expressive `{typography.display-xl}` making bold statements that are, as the hero text says, "impossible to ignore."

This expressiveness is grounded by the sensible and highly readable body font. The overall feeling is one of crafted digital experience, where every detail, from the soft `{rounded.pill}` shapes of navigation elements to the subtle `{shadows.card}` that lift content off the page, has been considered. Playful micro-interactions and a unique custom cursor that transforms on hover add a layer of delight, reinforcing the brand's identity as a creative and modern design studio. It's a design system that feels alive, responsive, and built to convert by capturing and holding attention.

### Key Characteristics

*   **Vibrant Primary Pop:** The selective use of `{colors.primary}` creates unmissable calls-to-action and brand highlights.
*   **Expressive Display Typography:** Headings are set in the bold, character-rich `Bricolage Grotesque`, using roles like `{typography.display-xl}` to create massive visual impact.
*   **Soft, Rounded Geometry:** Interfaces are built with friendly, rounded corners, from the `{rounded.md}` on buttons to the `{rounded.pill}` navigation bar, avoiding any harsh angles.
*   **Layered Depth:** Judicious use of shadows, like `{shadows.card}` and `{shadows.soft-lift}`, creates a tangible sense of depth and hierarchy between interface elements.
*   **High-Contrast Readability:** A simple palette of `{colors.ink}` on `{colors.canvas}` ensures that all text is crisp and effortless to read.
*   **Interactive Delight:** A custom cursor and smooth animations based on `{motion.transition-default}` make interacting with the UI a satisfying and engaging experience.
*   **Clean & Structured Layout:** Content is organized on a clear grid system with generous spacing, using tokens like `{spacing.section-md}` to create a calm, scannable rhythm.

## Color Usage Rules

The color palette is intentionally minimal to ensure consistency and brand recognition. An effective design will rely almost exclusively on this core set: `{colors.primary}`, `{colors.ink}`, `{colors.ink-deep}`, `{colors.ink-soft}`, `{colors.on-primary}`, `{colors.canvas}`, `{colors.paper}`, and `{colors.cloud}`. Reusing these tokens is paramount.

*   **Primary Color:** `{colors.primary}` is the brand's signature orange. It must be used sparingly to maintain its power. Reserve it for the single most important call-to-action on a page (e.g., "Book a call") or a key brand accent. There should be at most one or two instances of `{colors.primary}` visible in the viewport at any time. It should never be used for body text.
*   **Text Colors:** `{colors.ink}` is the default for all primary text, including headings and body copy. For secondary information, metadata, or disabled-like states, use `{colors.ink-soft}`. The footer is a special case, using a `{colors.ink-deep}` background with `{colors.on-ink}` text for a high-contrast, inverted look.
*   **Surface Colors:** `{colors.canvas}` and `{colors.paper}` are both `{colors.on-primary}` (`#ffffff`), establishing a bright, clean, and seamless foundation for all content. Use `{colors.cloud}` for subtle differentiation, such as the background of active navigation items or input fields, providing a gentle visual cue without competing for attention.
*   **Borders and Hairlines:** Use `{colors.hairline}` for subtle borders on components like cards or dividers. For more prominent borders, such as on the secondary button, use `{colors.ink}` to create a strong, high-contrast outline.
*   **Accent Colors:** The palette includes contextual accents for specific UI patterns. Use `{colors.accent-sand}` for the background of informational tags. Use `{colors.accent-peach}` for subtle highlights within components, like pricing tiers. Use `{colors.accent-sky}` for large, atmospheric background elements where a hint of color is needed without distracting from the main content.
*   **Functional Colors:** `{colors.success}`, `{colors.warning}`, and `{colors.error}` are reserved for their semantic roles: user feedback messages, status indicators, and validation states. The green `{colors.success}` is also used for the "available for projects" status indicator.
*   **The Cardinal Rule:** Never introduce a new color that is not already defined as a token. The strength of this design system comes from its restraint. When in doubt, reuse `{colors.ink}`, `{colors.ink-soft}`, or `{colors.cloud}` rather than inventing a new shade of gray or a new accent. Emphasis is achieved through scale, weight, and the strategic use of `{colors.primary}`, not an expanded palette.

## Typography Hierarchy

The typographic system is built on a clear separation of roles between two primary font families. This distinction is crucial for maintaining the brand's visual identity.

All display and heading text **must** use **Bricolage Grotesque**. Its expressive, heavy weights are reserved for creating impact and drawing attention.

All body copy, interface labels, and button text **must** use **Hanken Grotesk**. Its clean, legible forms ensure readability at all sizes. For code snippets or technical annotations, **Space Mono** is used.

| Role | Token | Use |
| --- | --- | --- |
| Extra Large Display | `{typography.display-xl}` | For primary, page-defining hero headlines. Use sparingly. |
| Large Display | `{typography.display-lg}` | For major section titles that need significant impact. |
| Medium Display | `{typography.display-md}` | For sub-section titles and headlines within components like cards. |
| Large Body | `{typography.body-lg}` | For introductory paragraphs or standfirsts directly below a major heading. |
| Medium Body | `{typography.body-md}` | The default style for all paragraph text and general content. |
| Small Body | `{typography.body-sm}` | For captions, metadata, and fine print in footers or component details. |
| Button | `{typography.button-md}` | The standard for all button labels, featuring a bold weight for clarity. |
| Link / Nav | `{typography.link-md}` | For all navigation items and standalone text links. |
| Code | `{typography.code-md}` | For inline code snippets or technical tags, providing a monospaced distinction. |

### Typographic Principles

1.  **Emphasize Hierarchy Through Scale:** The system relies on dramatic differences in font size between display roles (`{typography.display-xl}`) and body roles (`{typography.body-md}`) to guide the user's eye.
2.  **Contrast in Font Families:** The fundamental rule is to pair the expressive `Bricolage Grotesque` for headings with the utilitarian `Hanken Grotesk` for body copy. Never swap their roles.
3.  **Tight Leading for Headlines:** Display text uses tight line-height (e.g., `1.0` to `1.2`) to create a dense, powerful block of text.
4.  **Generous Leading for Body:** Paragraph text uses a more spacious line-height (`1.5` or `1.6`) to ensure maximum readability and a relaxed reading experience.
5.  **Weight Defines Importance:** Within the `Hanken Grotesk` family, `fontWeight` is used to differentiate elements. Buttons use a bold `700` (`{typography.button-md}`), while body text uses a regular `400` or `500` to create a clear visual hierarchy.

## Component Patterns

Components are the reusable building blocks of the UI. They are composed using the defined tokens and follow specific interaction patterns. A key feature of this system is the custom cursor: a small dot that expands into a larger circle or lozenge on hover over interactive elements. The CSS fallback for this should always be `cursor: pointer`.

**Primary Button**
The `button-primary` is the star of the show, reserved for the single most important action. It uses a `{colors.primary}` background with `{colors.on-primary}` text. It has a distinctive `{shadows.primary-glow}` that makes it pop. On hover, it animates using `{motion.transition-transform}`; it lifts slightly with `transform: translateY(-2px)` and its shadow intensifies to `{shadows.primary-glow-strong}`.

**Secondary Button**
The `button-secondary` is for all other actions. It's an outlined style with a transparent background, `{colors.ink}` text, and a `1px solid {colors.ink}` border. On hover, it inverts its colors, animating over `{motion.duration-fast}` to a `{colors.ink}` background with `{colors.on-ink}` text. This provides clear feedback without competing with the primary button.

**Card**
The `card` component is the standard container for grouping content. It has a `{colors.paper}` background, generous `{rounded.lg}` corners, and `{spacing.xl}` of internal padding. It is lifted from the `{colors.canvas}` by a prominent `{shadows.card}`, giving the layout a sense of physical depth. A subtle `{colors.hairline}` border provides a crisp edge.

**Navigation**
The main `navigation` bar is housed in a `{rounded.pill}` container that floats above the page with `{shadows.soft-lift}`. Individual `nav-item` elements are also pill-shaped (`{rounded.pill}`) and use `{typography.link-md}`. In their default state, they have `{colors.ink-soft}` text. The `nav-item-active` state is clearly indicated with `{colors.ink}` text on a `{colors.cloud}` background. The transition between these states is smooth, using `{motion.duration-fast}`.

**Code Tag**
The `code-tag` is used for small, technical annotations or inline code references. It uses the monospaced `{typography.code-md}` set on a `{colors.hairline}` background, with `{colors.ink-soft}` text. Its small padding and `{rounded.sm}` corners make it feel distinct from semantic tags and regular text.

## Layout & Spacing

The layout is built upon a foundation of structured whitespace, governed by a rhythmic and consistent spacing scale. This creates a clean, organized, and uncluttered user experience. The system is designed to feel spacious and breathable, allowing content to stand out.

The core of the spacing system is an 8px-based scale, with `{spacing.md}` (16px) serving as the most common unit for spacing between elements within a component. The scale ranges from `{spacing.xxs}` (4px) for micro-adjustments to `{spacing.section-md}` (90px) for major vertical separation. Adherence to this scale is mandatory; arbitrary pixel values disrupt the visual rhythm and must be avoided.

Most content is laid out within a centered, max-width container on a standard 12-column grid. This provides structure and ensures comfortable line lengths for reading on larger screens. The hero section is an exception, often breaking out to full-bleed to create a more immersive and impactful introduction.

Page structure is defined by the vertical stacking of content sections. Each major thematic section is separated from the next by `{spacing.section-md}` of vertical space. Most sections share the same `{colors.canvas}` background, creating a unified and seamless feel. The visual hierarchy is established through typography and the use of `card` components with `{shadows.card}`, not through alternating background colors. The page is anchored at the bottom by a full-width footer band using a solid `{colors.ink-deep}` background, which provides a strong visual conclusion.

## Do's and Don'ts

**Do's:**

1.  **Do** compose all surfaces from `{colors.canvas}` and `{colors.paper}`, and use `{colors.cloud}` only for subtle UI states like active navigation.
2.  **Do** strictly separate font roles: all headings must use `Bricolage Grotesque`, and all body/UI text must use `Hanken Grotesk`.
3.  **Do** build all layouts using the defined spacing scale. Use tokens like `{spacing.md}` and `{spacing.lg}` for all padding, margins, and gaps.
4.  **Do** reserve the `{colors.primary}` button for the single most important call-to-action on a page to maximize its impact.
5.  **Do** wrap distinct blocks of content in `card` components that use `{rounded.lg}` and `{shadows.card}` to create a clear, layered hierarchy.
6.  **Do** ensure every interactive element uses the brand's custom cursor, with `cursor: pointer` implemented as the essential fallback.
7.  **Do** use `{typography.code-md}` within a `{components.code-tag}` for any technical annotations or inline code to distinguish it from narrative text.
8.  **Do** verify that all interactive elements, especially on mobile, have a minimum touch-target size of 44x44px.

**Don'ts:**

1.  **Don't** ever add a box-shadow unless it maps to a real `{shadows.*}` token. The system's depth is intentional; do not add elevation where none is specified.
2.  **Don't** leave the browser-default arrow cursor on a link, button, or tab. Every clickable element must set `cursor: pointer` or be configured for the brand's custom cursor.
3.  **Don't** introduce new colors, especially new shades of gray. Reuse `{colors.ink-soft}` or `{colors.hairline}` if a subtle tone is needed.
4.  **Don't** use `Bricolage Grotesque` for long-form reading text or small UI labels. Its purpose is for high-impact headings only.
5.  **Don't** use sharp corners. All containers, buttons, and major UI elements must have rounded corners, using tokens from `{rounded.xs}` to `{rounded.pill}`.
6.  **Don't** use arbitrary pixel values for spacing. This breaks the grid and the visual rhythm of the design.
7.  **Don't** overuse `{colors.primary}`. Its power comes from its scarcity. Never have more than two primary CTAs visible at once.
8.  **Don't** create "ghost" buttons (text-only buttons) without a clear hover and focus state, such as an underline or color shift.

## Responsive Behavior

The design system is fluid and responsive, designed to provide an optimal experience across all device sizes. Layouts adapt gracefully from large desktops to small mobile screens, prioritizing content and usability at every stage.

| Breakpoint | Range | Behavior |
| --- | --- | --- |
| Mobile | <480px | Single-column layout. Nav collapses to a hamburger menu. Hero text scales down and wraps. Grids stack vertically. Footer content stacks. Touch targets are enlarged. |
| Mobile-Large | 480–767px | Primarily single-column. Spacing may increase slightly. Some simple two-column grids might appear for minor content. |
| Tablet | 768–1023px | Two or three-column layouts become common. The full navigation bar is often visible. Typography sizes increase. Sidebars may appear. |
| Desktop | 1024–1279px | The primary, multi-column layout. Max-width container is in effect. Full interactivity, including complex hover states, is expected. |
| Desktop-Large | ≥1280px | The layout expands to fill more horizontal space, primarily by increasing margins around the max-width container. No major reflowing of content. |

**Touch Targets:** On touch-enabled devices (Tablet and below), all interactive elements like buttons, links, and form controls must have a minimum tappable area of 44x44px to comply with accessibility guidelines. Spacing between interactive elements should also be increased to prevent accidental taps.

**Navigation:** The primary navigation bar, with its `{rounded.pill}` shape, will persist on Tablet and Desktop. On Mobile and Mobile-Large, it will collapse into a hamburger icon that, when tapped, reveals the navigation links in a full-screen overlay or a slide-out panel. Corner-anchored utility links may be hidden or moved into this menu on smaller screens.

**Hero Section:** The `{typography.display-xl}` hero text will scale down dramatically and wrap onto multiple lines on mobile screens. The background graphics and interactive elements will be simplified or repositioned to avoid cluttering the smaller viewport.

**Grids & Cards:** Any multi-column grid of `card` components will collapse into a single vertical stack on Mobile. Each card will span the full width of the viewport (minus margins), ensuring content remains legible and focused.

## Iteration Guide

When building new UI or iterating on existing designs in the OhhMyDesign style, follow these steps to ensure consistency and brand alignment.

1.  **Start with Structure:** Begin by establishing the page layout on a `{colors.canvas}` background. Define your main content sections and separate them with `{spacing.section-md}`.
2.  **Establish Typographic Hierarchy:** Place your headings using `Bricolage Grotesque`, starting with `{typography.display-lg}` or `{typography.display-md}`. Set all body text in `Hanken Grotesk`, defaulting to `{typography.body-md}` for paragraphs.
3.  **Containerize Content:** Group related UI elements and content into `card` components. Apply `{rounded.lg}`, `{shadows.card}`, and generous `{spacing.xl}` padding to every card.
4.  **Identify the Primary Action:** For each view, determine the single most important action the user should take. Implement this using a `{components.button-primary}`. All other secondary actions must use `{components.button-secondary}` or simple text links styled with `{typography.link-md}`.
5.  **Style Interactive Elements:** Ensure all interactive elements have a clear hover state. Use `{motion.transition-default}` for smooth animations. Remember that all clickable items must use `cursor: pointer` as a fallback for the brand's custom cursor.
6.  **Add Detail and Metadata:** Use `{typography.body-sm}` and `{colors.ink-soft}` for less important text like captions, timestamps, or helper text. For any technical labels, use the `{components.code-tag}` pattern.
7.  **Review Spacing Rigorously:** Check all margins, padding, and gaps. Every space should correspond to a token from the `{spacing}` scale. Eliminate all "magic numbers" or arbitrary pixel values.
8.  **Validate the Color Palette:** Do a final check to ensure no colors have been used outside of the approved `colors` tokens. When a new shade is needed, first try to solve the problem with `{colors.ink-soft}` or `{colors.cloud}`.
9.  **Test Responsiveness:** View the design at each breakpoint (Mobile, Tablet, Desktop). Ensure layouts reflow logically, text remains readable, and touch targets are adequately sized on smaller screens.
10. **Refine Transitions:** Add motion to bring the design to life. Apply `{motion.transition-transform}` for hover effects that involve movement and `{motion.transition-default}` for color and shadow changes to create a polished, dynamic experience.
