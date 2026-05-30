# Aura Dental Studio

Premium dental clinic web platform developed for Aura Dental Studio, a multi-disciplinary aesthetic dentistry practice based in Nisantasi, Istanbul. The application delivers a immersive brand experience with trilingual support (Turkish, English, German), cinematic animations, and a comprehensive content management architecture.

## Architecture

The platform is built as a single-page application with client-side routing, featuring a modular component hierarchy, centralized translation engine, and a hook-based animation system. The tech stack prioritizes performance, accessibility, and visual fidelity.

**Core Stack:**

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion 12 |
| UI Primitives | Radix UI (Accordion, Label, Slot) |
| Icons | Lucide React |

## Features

**Internationalization**
Full trilingual support (Turkish, English, German) with a centralized translation object containing 580+ locale-specific strings across 15 sections. Language switching is instant and does not require a page reload.

**Routing & Navigation**
16 client-side routes including a dynamic blog detail route (`/journal/:slug`) with slug-based article resolution. The navigation system features a fixed top bar with theme-aware styling (light text on the homepage hero, dark elsewhere) and a full-screen overlay menu with animated page links.

**Animation System**
Seven custom hooks power the visual experience:
- Scroll-triggered reveal animations with intersection observer
- Character-level text reveal for headings
- 3D tilt effect on interactive elements
- Magnetic button attraction effect
- Custom cursor with trailing ring and dot
- Skew-scroll parallax effect
- Chapter indicator for multi-section pages

**Blog Engine**
Journal section with categorized articles, full detail pages, slug-based URL routing, and inter-article navigation (previous/next). Article metadata includes category, publish date, read time, and multi-paragraph body content. The image library maps specific visuals to each article topic.

**Treatment Showcase**
Eight treatment categories with descriptions, metadata, and detail views. Before/after comparison slider for visual case presentations. Case studies with doctor attribution and treatment timelines.

**SEO & Structured Data**
Open Graph meta tags, JSON-LD structured data for local business schema (Dentist type), semantic HTML structure, and a sitemap.xml for search engine crawling.

**Performance**
Vite-based build pipeline with automatic code splitting, lazy-loaded route components, optimized image loading with lazy attributes, and Tailwind CSS purging for minimal production bundle size.

## Project Structure

```
src/
  components/           # Presentation components
    ui/                 # Atomic design primitives
      BeforeAfterSlider.jsx
      ExpandMap.jsx
      Icons.jsx
      LangSwitch.jsx
      location-tag.jsx
      shiny-button.jsx
      team-showcase.jsx
    ApproachTimeline.jsx
    AwardsMarquee.jsx
    BeforeAfter.jsx
    CaseStudies.jsx
    Contact.jsx
    CookiesBanner.jsx
    FAQSection.jsx
    Footer.jsx
    Hero.jsx
    Journal.jsx
    Journey.jsx
    Marquee.jsx
    Navigation.jsx
    PageHero.jsx
    Philosophy.jsx
    Services.jsx
    Splash.jsx
    Team.jsx
    Technology.jsx
    VirtualTour.jsx

  data/                 # Static data layer
    images.js           # Image URL constants (50+ assets)
    translations.js     # Trilingual content (580+ strings)

  hooks/                # Custom React hooks
    useChapterIndicator.js
    useCustomCursor.js
    useReveal.js
    useScrollProgress.js
    useSkewScroll.js
    useTilt.js
    useTime.js

  layouts/
    MainLayout.jsx      # Root layout with nav, footer, cursor

  pages/                # Route-level page components
    Approach.jsx
    BlogDetail.jsx
    Cases.jsx
    Clinic.jsx
    Contact.jsx
    FAQ.jsx
    Home.jsx
    Journal.jsx
    KVKK.jsx
    Privacy.jsx
    Process.jsx
    Team.jsx
    Technology.jsx
    Testimonials.jsx
    Transformations.jsx
    Treatments.jsx
```

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | Home | Landing page with hero, services, testimonials |
| `/tedaviler` | Treatments | Treatment catalog with descriptions |
| `/yaklasim` | Approach | Clinic philosophy and methodology |
| `/teknoloji` | Technology | Equipment and technology showcase |
| `/surec` | Process | Patient journey and treatment workflow |
| `/donusumler` | Transformations | Case transformation gallery |
| `/vakalar` | Cases | Detailed case studies |
| `/hastalar` | Testimonials | Patient reviews and experiences |
| `/klinik` | Clinic | Virtual tour and facility overview |
| `/journal` | Journal | Blog article listing |
| `/journal/:slug` | BlogDetail | Individual blog article |
| `/ekip` | Team | Doctor profiles and credentials |
| `/sss` | FAQ | Frequently asked questions |
| `/iletisim` | Contact | Contact form and location map |
| `/gizlilik` | Privacy | Privacy policy |
| `/kvkk` | KVKK | Turkish personal data protection |

## Development

```bash
# Install dependencies
npm install

# Start development server with hot module replacement
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Credits

Design and development by [GucluyumHe](https://gucluyumhe.dev/).

## License

All rights reserved. This project is proprietary software developed for Aura Dental Studio.
