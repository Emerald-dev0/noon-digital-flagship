# Implementation Plan - Noon Digital: "Visual-First" Multi-Page Iteration

Transform the project into a high-end, multi-page editorial experience where **visual assets (images, videos, thumbnails)** are the dominant, repeated factor, following a "Show, Don't Speak" philosophy.

## User Review Required

> [!IMPORTANT]
> This iteration shifts the focus from text-heavy sections to **Visual Anchors**. Every page will be dominated by large-scale media, galleries, and interactive proof.

> [!TIP]
> I will implement a **"Cinematic Content Loop"** for the background of major sections, ensuring that the user is constantly seeing "The Work" (thumbnails, rankings, analytics) while navigating.

## Proposed Changes

### 1. Visual-Dominant Architecture
- **[MODIFY] Hero Section**: Enhance the current thumbnail montage with more motion and higher density. Use it as a recurring background element across pages but with different "filters" (e.g., blurred on subpages).
- **[NEW] "The Showroom" (Gallery)**: A recurring component that displays dynamic, interactive thumbnails. This will appear on almost every page in different configurations (grid, slider, scattered).

### 2. Multi-Page Restructuring (Visual Focus)
- **Home (`/`)**: "The Manifesto" — A high-impact video/image-led scrolling experience. Each "straight-talk" point is anchored by a massive visual proof.
- **The Garden (`/garden`)**: "The Blueprint" — Instead of text stages, each phase (Fertilizer, Seeds, Roots) will be represented by a **Visual Case Study Card**.
- **Work (`/work`)**: "The Wall of Proof" — A massive, interactive grid of thumbnails and search results. I'll implement a "Magnifier" effect when hovering over ranking screenshots.
- **Pricing (`/pricing`)**: "The Entry" — Even the pricing tiers will be visually represented using the "Packaging" assets (thumbnails/graphics).

### 3. Unorthodox Interactive Twists
- **YouTube Scrubber Nav**: Persistent progress bar at the bottom. **New Twist**: Hovering over the bar shows "Chapter Previews" (thumbnails of the current page's sections).
- **"Fit Check" Terminal**: A visual terminal interface. Instead of just text, it will display "Success Visuals" when the user answers correctly (e.g., a green 'Verified' badge popping up).
- **Timeline Progression**: A vertical "Video Timeline" that links all sections, using thumbnail icons as the "dots" on the line.

### 4. Implementation Details
- **Routing**: Install `react-router-dom` and set up the `Routes`.
- **Global Layout**: Create a `MainLayout` component that includes the `Navbar` and the `YouTubeScrubber`.
- **Asset Management**: Optimize the loading of the massive image library to ensure the "Visual-First" approach doesn't compromise performance.

## Verification Plan

### Automated Tests
- `npm run build`: Ensure the new multi-page, asset-heavy structure builds correctly.

### Manual Verification
- Check all pages for "Visual Dominance" (ensure text doesn't overpower images).
- Verify the "Chapter Preview" hover on the YouTube Scrubber.
- Test the "Fit Check" terminal logic and visual feedback.
- Confirm the site remains performant despite the increased asset density.

## GitHub Push
- Sync all changes to `noon-digital-flagship`.
