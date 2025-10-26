# Sunrise Overseas - Study Abroad Consultancy Website

A modern, responsive website for overseas education consultancy services, built with React, TypeScript, and modern web technologies.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance optimizations
- **Performance Monitoring**: Core Web Vitals tracking and optimization
- **Multi-Country Support**: Detailed information for 10+ study destinations
- **Service Pages**: Comprehensive service offerings with detailed information
- **Contact Integration**: Direct call and consultation booking features

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd edu-compass-global-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:8080` (or next available port).

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn-ui components
│   ├── HeroCarousel.tsx
│   ├── LazyImage.tsx
│   ├── PerformanceMonitor.tsx
│   └── SEO.tsx
├── pages/              # Main page components
│   ├── Index.tsx       # Homepage
│   ├── Country.tsx     # Country detail pages
│   ├── Services.tsx    # Service pages
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── data/               # Static data and configurations
└── hooks/              # Custom React hooks
```

## 🌍 Supported Countries

The website provides detailed information for studying in:
- 🇺🇸 United States
- 🇨🇦 Canada  
- 🇬🇧 United Kingdom
- 🇦🇺 Australia
- 🇮🇪 Ireland
- 🇩🇪 Germany
- 🇳🇿 New Zealand
- 🇱🇻 Latvia
- 🇸🇮 Slovenia
- 🇲🇹 Malta

## 📊 SEO & Performance Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema for better search engine understanding
- **Sitemap**: Auto-generated XML sitemap
- **Performance Monitoring**: Core Web Vitals tracking (LCP, FID, CLS)
- **Image Optimization**: Lazy loading and optimized image delivery
- **Code Splitting**: Route-based code splitting for faster load times

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn-ui with Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Performance Monitoring

The application includes a `PerformanceMonitor` component that tracks:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Navigation timing metrics

## 🚀 Deployment

The website is ready for deployment to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is proprietary software. All rights reserved.
