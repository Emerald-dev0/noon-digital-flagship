# Implementation Plan - Noon Digital: "Media-Rich" Visual Overhaul

Transform the site into a media-dominant experience where high-impact assets (images, videos, embeds) are integrated side-by-side with the "Straight-Talk" copy.

## User Review Required

> [!IMPORTANT]
> I am removing the **YouTube Scrubber** as requested. Navigation will now be purely via the Navbar and Footer.

> [!TIP]
> I will replace static thumbnails with **YouTube Embeds** for the primary case studies and client channels to provide an immersive "browser within browser" feel.

## Proposed Changes

### 1. Branding & Theme Update
- **[MODIFY] [tailwind.config.js](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/tailwind.config.js)**: Update the color palette to:
    - **Black**: `#000000` (Background)
    - **White**: `#ffffff` (Text)
    - **Purple**: `#8f56ff` (Primary Accent)
    - **Pink**: `#ff69c5` (Secondary Accent)
- **[MODIFY] [Logo.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/components/primitives/Logo.tsx)**: Replace the image logo with the Arabic character **ن** (Noon), styled as a high-end mark.

### 2. Multi-Page Layout Refactor
- **Side-by-Side Layouts**: Restructure every major section across all pages to follow a 50/50 or 60/40 split between **Visual Proof** and **Copy**.

#### [MODIFY] [Home.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/pages/Home.tsx)
- **Hero**: Side-by-side with a high-impact video embed or massive thumbnail.
- **The Bottleneck**: Large image anchor (Blank Page) beside the copy.
- **Rented Land**: Interactive comparison visual.

#### [MODIFY] [Work.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/pages/Work.tsx)
- **YouTube Embeds**: Use `<iframe>` components for:
    - How This Arabic Coach Made $16K
    - Arabic Vocabulary Is Hard
    - Killer Loom Application Video
    - Cold Calling Psychology
- **Ranking Proof**: Side-by-side screenshots of search results next to the verification text.

#### [MODIFY] [Garden.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/pages/Garden.tsx)
- Use images from `03-how-does-the-youtube-garden-work/` as side-anchors for the Fertilizer/Seeds/Roots sections.

### 3. Cleanup
- **[DELETE] [YouTubeScrubber.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/components/special/YouTubeScrubber.tsx)**
- **[MODIFY] [MainLayout.tsx](file:///C:/Users/hp/Documents/Code Projects/Noon Digital/src/components/layout/MainLayout.tsx)**: Remove Scrubber import and usage.

## Verification Plan

### Automated Tests
- `npm run build`: Ensure no build errors after removing the scrubber and adding embeds.

### Manual Verification
- Verify all YouTube embeds load and play correctly.
- Check the "Side-by-Side" responsiveness on mobile (should stack vertically).
- Confirm the new color theme is applied consistently.
- Verify the new "ن" logo looks premium.
