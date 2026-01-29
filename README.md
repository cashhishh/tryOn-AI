# TryOnAI - AI Virtual Try-On Landing Page

A professional B2B SaaS landing website for an AI Virtual Try-On tool targeting Indian fashion e-commerce brands.

## Product Overview

TryOnAI is a plug-and-play AI virtual try-on solution for D2C fashion brands selling sarees, kurtis, dresses, and apparel. Customers upload one full-body photo and see every clothing product on themselves while browsing the brand's website.

## Features

- ✨ **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- 🎨 **shadcn/ui Components**: Beautiful, accessible UI components
- 🌓 **Dark/Light Mode**: Fully functional theme toggle with next-themes
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Smooth Animations**: Professional transitions and hover effects
- 🎯 **Premium SaaS Design**: Stripe/Vercel/Linear inspired aesthetic
- 🇮🇳 **Indian Market Focus**: INR pricing and local market messaging
- 🔒 **Type-Safe**: Built with TypeScript for better developer experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tryOn-AI/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page with all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/           # Page sections (in order)
│   │   ├── hero-section.tsx
│   │   ├── who-this-is-for-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── features-section.tsx
│   │   ├── demo-section.tsx
│   │   ├── how-brands-integrate-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── disclaimer-section.tsx
│   │   └── cta-section.tsx
│   ├── navbar.tsx          # Sticky navbar with theme toggle
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── theme-toggle.tsx    # Dark/light mode toggle button
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
└── public/                 # Static assets
```

## Sections

### 1. Hero Section
- Clear value proposition for fashion brands
- Focus on sarees, dresses, and apparel
- Dual CTAs: "Request Demo" and "See How It Works"

### 2. Who This Is For
- Target customer segments
- D2C fashion brands, saree stores, apparel retailers
- Teams focused on conversion and returns reduction

### 3. How It Works
- 3-step customer journey
- Upload photo → Browse products → See instant try-on
- Icon-based numbered cards

### 4. Features Section
- 5 core product features
- Persistent try-on, plug-and-play integration
- Privacy-first, no app required, works with existing stores

### 5. Demo Section (Product Preview)
- Prototype preview placeholder
- Disclaimer about final output variance
- Coming soon state with clear messaging

### 6. How Brands Integrate
- 3-step integration process
- Example code snippet (visual only)
- No backend rebuild required messaging

### 7. Pricing Section
- **Indian Rupee (INR) pricing**
- Starter: ₹2,999/month (200 try-ons)
- Growth: ₹5,999/month (600 try-ons) - Most Popular
- Pro: ₹9,999/month (1,500 try-ons)
- Extra try-ons: ₹5-₹10 each
- Usage-based, cancel anytime

### 8. Disclaimer Section
- Important notice about sizing accuracy
- Transparent about limitations
- Professional and trustworthy tone

### 9. CTA Section
- "See how TryOnAI fits into your store"
- Contact Us and Request Pilot buttons
- Indian market messaging

### 10. Footer
- Brand information and contact email
- Clean, minimal design
- Copyright notice

## Customization

### Colors
Edit the CSS variables in `app/globals.css` to customize the color scheme for both light and dark modes.

### Content
All section content can be edited in their respective component files under `components/sections/`.

### Styling
The project uses Tailwind CSS. Modify `tailwind.config.ts` to customize the design system.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theme**: next-themes
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Design Principles

- Premium SaaS aesthetic (Stripe / Vercel / Linear inspired)
- Clean and minimal UI
- Neutral color palette (slate, gray, zinc)
- No heavy gradients
- Rounded cards (rounded-xl)
- Subtle shadows and hover effects
- Professional typography with high whitespace
- Trustworthy and enterprise-friendly
- Smooth Tailwind transitions

## Target Audience

This landing page is designed for:
- **D2C Fashion Brands** in India
- **Saree and Kurti Stores**
- **Apparel Retailers** with existing websites
- **E-commerce Teams** looking to reduce returns and increase conversions

## Pricing Structure

All pricing in **Indian Rupees (INR)**:
- **Starter**: ₹2,999/month (200 try-ons) - Best for pilots
- **Growth**: ₹5,999/month (600 try-ons) - Most Popular
- **Pro**: ₹9,999/month (1,500 try-ons) - Best for scaling brands
- **Extra try-ons**: ₹5-₹10 per try-on
- Usage-based pricing, cancel anytime

## License

This project is built for demonstration purposes.

## Contact

For questions or support: hello@tryonai.com
