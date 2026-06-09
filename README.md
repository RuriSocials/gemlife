# Gemlife.world

Platform for RURI Social Innovation — presenting gemstone culture as art and community.

## Stack

- React 19 + Vite 7
- Tailwind CSS v4
- React Router DOM 7
- Framer Motion
- PapaParse (CSV data)

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```
public/
  data/          # CSV data files (exhibitions, events, journal, stories)
  images/
    top/         # Hero grid images
    exhibitions/ # Exhibition scene images
    events/      # Event images
    stories/     # Story thumbnail images
  videos/        # Story video files
src/
  components/    # Shared components
  data/          # Static JS data (exhibitionDetails, storyVideos)
  hooks/         # useCsvData
  layouts/       # MainLayout (nav + footer)
  pages/         # TopPage, ExhibitionPage, JournalPage, MembershipPage, StaticPage
  styles/        # global.css (Tailwind theme tokens)
```
