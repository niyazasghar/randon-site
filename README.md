# DevShuttle Agency - Project Overview

## 1. Project Summary
**Name**: devshuttle-agency (DevShuttle)
**Website Title**: "DevShuttle | Software Agency"
**Description**: DevShuttle is a digital agency focused on building premium websites, scalable web applications, and modern mobile apps for startups and growing businesses.
**Type**: Next.js Website / Web Application

## 2. Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, version latest)
- **Library**: React version 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.3.0) with custom configurations (`tailwind.config.ts`, `globals.css`)
- **UI Components**: Shadcn UI 
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (v12) and `tailwindcss-animate`
- **Smooth Scrolling**: Lenis (v1.3.21)
- **Icons**: `lucide-react`
- **Forms & Validation**: `react-hook-form`, `zod`, `@hookform/resolvers`
- **Notifications**: `sonner`
- **Typography**: Google Fonts (Inter, Plus Jakarta Sans, Montserrat)

## 3. Architecture and Directory Structure
The application follows a clean component-based architecture using Next.js App Router:

- `src/app/`: Contains routing pages and global configurations.
  - `page.tsx`: The main landing page integrating all home components.
  - `layout.tsx`: Global layout, fonts setup, and smooth scrolling wrapper.
  - `globals.css`: Tailwind directives, custom classes (e.g., `.btn-premium`), and theme variables.
  - Sub-directories for routes: `/about`, `/blog`, `/contact`, `/services`, etc.
  
- `src/components/`: Contains reusable React components organized by feature.
  - `home/`: Landing page sections (`Hero`, `WhatWeBuild`, `FAQ`, `Testimonials`, `OurTeam`, `ContactSection`, etc.).
  - `layout/`: Structural components like `Navbar`, `Footer`, `SmoothScroll`.
  - `animations/`: Reusable animation wrappers (e.g., `TextReveal`).

- `src/lib/` & `src/hooks/`: Utility functions (like `cn` for Tailwind merging) and custom React hooks.
- `src/assets/` & `public/`: Image and static asset storage.

## 4. Styling & Theming
- **Theme**: Dark by default with a modern, glassmorphic aesthetic.
- **Color Palette**:
  - Background Dark: `#0a0a0a` (Charcoal/Near-black hero)
  - Background Surface: `#141414`
  - Accent Color: `#f05d23` (Copper Red / Deep Coral)
- **Interactions**: Heavy use of Framer Motion for scroll reveals, text reveals, and micro-interactions (hover states, scaling, background pulses).

## 5. Key Features & Sections
- **Hero**: Immersive introduction with animated text, marquee brand logos, and clear CTAs.
- **Featured Work**: Highlights distinct offerings (Custom Development, SaaS Prebuilt) with aesthetic cards.
- **What We Build**: Detailed breakdown of services (Business Websites, SaaS MVPs, Dashboards, etc.) with hover effects.
- **Proof Of Work (Social Presence)**: Showcases past projects and clients with a dynamic grid and scrolling banner.
- **Testimonials**: Interactive client feedback section with imagery.
- **Our Team**: Grid showcasing founders and key team members.
- **FAQ**: Accordion-style frequently asked questions.
- **Contact**: Functional form integrated with Web3Forms for direct inquiries.

## 6. Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development
```bash
# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 7. License
This project is private and intended for DevShuttle internal use.
