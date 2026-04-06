# STATUS — Professional HVAC. DIY Prices.

A modern, high-performance marketing website for STATUS, a DIY ductless mini-split heat pump brand. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **5 Pages** — Home, Products, Sizing & Tools, Support, About
- **BTU Calculator** — Interactive room sizing tool
- **Brand Comparison** — Feature comparison against competitors
- **Product Catalog** — Wall Mount, Ceiling Cassette, and Concealed Ducted systems
- **FAQ Accordion** — Expandable FAQ section with smooth animations
- **Contact Form** — Support request form with subject categories
- **Responsive Design** — Mobile-first with sticky navbar and hamburger menu
- **Rebates & Tax Credits** — Federal and state incentive information

## Tech Stack

- **Framework**: Next.js 16.2.2 (App Router, Turbopack)
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Font**: Inter (Google Fonts, auto-optimized)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   ├── globals.css       # Design tokens & custom styles
│   ├── about/page.tsx    # About page
│   ├── products/page.tsx # Product catalog
│   ├── support/page.tsx  # Support & contact
│   └── tools/page.tsx    # BTU calculator & sizing tools
├── components/
│   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   ├── Footer.tsx        # Site footer with link columns
│   └── FAQ.tsx           # Accordion FAQ component
public/
├── wall-mount.png        # Wall mount system photo
├── ceiling-cassette.png  # Ceiling cassette system photo
└── ducted-system.png     # Concealed ducted system photo
```

## License

Private — All rights reserved.
