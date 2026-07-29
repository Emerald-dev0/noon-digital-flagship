# Implementation Plan - Noon Digital: "High-Craft" Multi-Page Iteration

Complete overhaul of the project to match the "Straight-Talk" copy and "Visual-First" philosophy of the flagship site, transforming it into a definitive, multi-page showcase.

## User Review Required

> [!IMPORTANT]
> I am adding a new **About Page (`/about`)** and significantly expanding the **Home Page** to include the full narrative: "Blank Page Problem", "Straight Answer", "Rented Land", and "Fit Check".

> [!TIP]
> **"Visual Dominance"**: Every major text block will now be paired with a "Visual Anchor" (Massive thumbnail, Case Study graphic, or Mock Search Result) to ensure the site "Shows" more than it "Speaks".

## Proposed Changes

### 1. Home Page Overhaul (`/`)
- **Hero**: Updated copy "Your offer works. Nobody's watching."
- **[NEW] Proof Strip**: Immediate horizontal scroll/strip of "Search rankings hold top-3" for the four core keywords.
- **[NEW] The Bottleneck Section**: "Ideas are the bottleneck." Paired with a "Blank Page" visual.
- **[NEW] Straight Answer Grid**: A high-contrast grid debunking "Editing Quality", "Posting Volume", etc.
- **[NEW] Rented Land Section**: Visual comparison between "Algorithm Volatility" (Instagram) vs. "Search Compound" (YouTube).
- **[NEW] Fit Matrix**: A "Good Fit / Not a Good Fit" split screen with visual iconography.

### 2. New Page: About (`/about`)
- **Mubarak's Story**: From editing to accident to YouTube strategy.
- **Core Values**: "Honesty, transparency, work no matter what."
- **The Obvious Question**: "How is your own channel doing?" (Fixed in public).

### 3. Garden Page Refinement (`/garden`)
- Deep dive into **Fertilizer**, **Seeds**, and **Roots** using the provided copy.
- Add "A challenge, rather than a claim" section.

### 4. Work Page Refinement (`/work`)
- **"Wall of Evidence"**: Organized into Search Rankings, Client Channels, and Highlight Edits.
- Use the specific video URLs and client names provided (Markaz Shafi'ee, Zakariya, Sales with Aqib).

### 5. Shared Components & Navigation
- **Navbar**: Add "About" link.
- **Footer**: Refined to match the "Check the work" and "Elsewhere" layout from the copy.
- **YouTube Scrubber**: Retain and polish the chapter preview logic.

## Verification Plan

### Automated Tests
- `npm run build`: Ensure the full multi-page architecture compiles.

### Manual Verification
- Verify all outbound YouTube links open in new tabs.
- Ensure "Visual Anchors" are responsive across mobile and desktop.
- Test the "Fit matrix" readability on small screens.
- Confirm the "YouTube Scrubber" correctly identifies chapters across different pages.

## Asset Mapping
- **Fertilizer/Seeds/Roots**: Use images from `03-how-does-the-youtube-garden-work/`.
- **Arabic Coach Case Study**: Use images from `11-shaf-arabic-coach/`.
- **Thumbnails**: Use images from `thumbnails/`.
- **Search Rankings**: Build custom SVG/CSS components for the search result visuals.
