# Acquire.com Hero Section - Next.js

This is a Next.js conversion of the Acquire.com hero section with animated Lottie graphics.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Lottie Animations**: Interactive business card animations using Lottie/Bodymovin
- **Modern Next.js**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Lazy loading animations and optimized assets
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and hero section CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── HeroSection.tsx      # Main hero section component
│   ├── LottieAnimation.tsx  # Lottie animation wrapper
│   └── VideoModal.tsx       # Video modal component
├── hooks/
│   └── useAnimation.ts      # Custom hook for loading animations
├── types/
│   └── lottie.ts           # TypeScript types for Lottie
└── utils/
    └── eventTracking.ts    # Event tracking utilities
```

## Animations

The project includes two Lottie animations:
- **Desktop**: `/assets/bodymovin/home/display_1/Home_1.json`
- **Tablet/Mobile**: `/assets/bodymovin/home/Home_1_TABLET/Home_1_TABLET.json`

These animations show interactive business cards and buyer profiles that animate in sequence.

## Customization

### Styling
- Main styles are in `src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Component-specific styles are inline or in CSS modules

### Content
- Hero text content is in `src/components/HeroSection.tsx`
- Metadata and SEO in `src/app/layout.tsx`

### Animations
- Animation loading logic in `src/components/LottieAnimation.tsx`
- Custom animation hook in `src/hooks/useAnimation.ts`

## Deployment

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

For static export:

```bash
npm run export
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lottie React**: For rendering Bodymovin/Lottie animations
- **React Hooks**: For state management and side effects