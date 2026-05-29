# Aura Dental Studio

Premium dental clinic website built with React, featuring a multi-page SPA with TR/EN/DE language support, animated UI components, and a modern design system.

## Tech Stack

- **Framework:** React 18 with Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **UI Library:** Radix UI (Accordion, Label, Slot)
- **Icons:** Lucide React

## Features

- Multi-language support (Turkish, English, German) with dynamic language switching
- 15+ pages including Home, Treatments, Approach, Technology, Process, Transformations, Cases, Testimonials, Clinic, Journal with blog detail pages, Team, FAQ, Contact, Privacy, KVKK
- Animated components: marquee ticker, scroll-triggered reveals, tilt effects, custom cursor, magnetic buttons, chapter indicator
- Blog system with categorized articles, full article pages, and slug-based routing
- Before/after image comparison slider
- Interactive location map with expand animation
- Responsive layout built on Tailwind CSS grid system
- Cookie consent banner
- Scroll-based progress indicator
- SEO metadata and Open Graph tags
- Schema.org structured data for local business (Dentist)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/       # Reusable UI components
    ui/             # Atomic UI primitives (icons, buttons, switches)
  data/             # Static data and translations
    translations.js # TR/EN/DE locale strings
    images.js       # Image URL constants
  hooks/            # Custom React hooks
  layouts/          # Layout components (MainLayout)
  pages/            # Route-level page components
    BlogDetail.jsx  # Dynamic blog article page (/journal/:slug)
```

## Routes

| Path            | Page           |
|-----------------|----------------|
| /               | Home           |
| /tedaviler      | Treatments     |
| /yaklasim       | Approach       |
| /teknoloji      | Technology     |
| /surec          | Process        |
| /donusumler     | Transformations |
| /vakalar        | Cases          |
| /hastalar       | Testimonials   |
| /klinik         | Clinic         |
| /journal        | Journal        |
| /journal/:slug  | Blog Detail    |
| /ekip           | Team           |
| /sss            | FAQ            |
| /iletisim       | Contact        |
| /gizlilik       | Privacy Policy |
| /kvkk           | KVKK           |

## License

All rights reserved. This project is proprietary software.
