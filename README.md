<![CDATA[<div align="center">

# ✦ Wanderlux — Luxury Travel Agency

**Curated journeys for the discerning traveler.**

Experience private jets, secluded islands, and unforgettable luxury destinations worldwide.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)

---

[Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Database](#-database-schema) · [Deployment](#-deployment)

</div>

---

## 🌍 Overview

**Wanderlux** is a full-stack luxury travel agency platform built with modern web technologies. It provides a premium booking experience for travelers and a powerful management dashboard for administrators. The platform supports multi-service bookings including tours, hotels, car rentals, and private consultations — all wrapped in a stunning dark-themed UI with glassmorphism effects and smooth animations.

---

## ✨ Features

### 🧳 Customer-Facing

| Feature | Description |
|---|---|
| **Homepage** | Immersive hero section with parallax, booking search bar, destination carousel, services showcase, stats, and newsletter signup |
| **Tour Packages** | Browse curated luxury travel packages with detailed itineraries, pricing, and availability |
| **Hotel Browsing** | Explore premium 5-star accommodations with room types, amenities, and star ratings |
| **Car Hire** | Luxury fleet selection with vehicle categories (Economy → Luxury), daily rates, and features |
| **Booking Flow** | Multi-step checkout with traveler details, extras/add-ons, and payment processing |
| **User Portal** | Personal dashboard with trip history, booking management, and profile settings |
| **Wishlist** | Save and manage favorite destinations, hotels, and tour packages |
| **Loyalty Rewards** | Points ledger, redemption system, and tiered rewards program |
| **Profile Management** | Edit personal information, account settings, and travel documents |
| **Consultation Booking** | Schedule one-on-one sessions with travel consultants |
| **Reviews** | Rate and review hotels and tour experiences with social sharing |
| **PDF Itineraries** | Downloadable trip itineraries with weather tips, visa info, packing essentials, and photo galleries |

### 🛡️ Admin Dashboard

| Feature | Description |
|---|---|
| **Overview Panel** | KPI cards (bookings, revenue, active rentals, pending applications), revenue trend charts, and top destinations |
| **Bookings Management** | View, filter, and manage all customer bookings with status tracking |
| **Fleet Management** | Add, edit, and track rental vehicles with maintenance logs |
| **Tour Package Builder** | Create and manage tour packages with itinerary builder |
| **Customer CRM** | Omnichannel inquiry inbox, customer profiles, and message templates |
| **Financial Reports** | Revenue analytics, payment/invoice tracking, and performance dashboards |
| **Staff Management** | Staff directory, role-based permissions matrix, and scheduling |
| **Review Moderation** | Approve, reject, and manage customer reviews |
| **Testimonials Manager** | Curate and feature customer testimonials |

### 🔐 Authentication & Authorization

- **Clerk Integration** — Secure authentication with sign-in, sign-up, and session management
- **Role-Based Access Control** — Four roles: `CUSTOMER`, `CONSULTANT`, `ADMIN`, `SUPER_ADMIN`
- **Automatic Role Detection** — Post-login redirect based on user role
- **Protected Routes** — Server-side admin layout protection with database role verification
- **Webhook Sync** — Clerk webhooks automatically sync user data to the database

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with custom dark theme |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Database** | [Neon PostgreSQL](https://neon.tech/) (serverless) |
| **ORM** | [Prisma 7](https://www.prisma.io/) with `@prisma/adapter-pg` |
| **Webhooks** | [Svix](https://www.svix.com/) for Clerk webhook verification |
| **Icons** | [Material Symbols](https://fonts.google.com/icons) (Outlined) |
| **Fonts** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn/pnpm)
- A [Clerk](https://clerk.com/) account
- A [Neon](https://neon.tech/) PostgreSQL database

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wanderlux-travel-agency.git
cd wanderlux-travel-agency
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@host/dbname?sslmode=require"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
CLERK_WEBHOOK_SECRET=whsec_xxxxx

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/portal/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/auth-redirect
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/auth-redirect
```

### 4. Set Up the Database

```bash
# Push schema to your Neon database
npx prisma db push

# (Optional) Seed with sample data
npx prisma db seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
wanderlux-travel-agency/
├── app/
│   ├── (stitch)/              # Design screens (Stitch-generated UI components)
│   ├── admin/                 # Admin dashboard (protected)
│   │   ├── layout.tsx         # Server-side role guard
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── bookings/          # Booking management
│   │   ├── crm/               # Customer relationship management
│   │   ├── fleet/             # Vehicle fleet management
│   │   ├── reports/           # Analytics & reports
│   │   ├── staff/             # Staff management
│   │   └── testimonials/      # Testimonial curation
│   ├── api/
│   │   ├── admin/             # Admin API endpoints
│   │   ├── auth/role/         # Role lookup endpoint
│   │   ├── user/profile/      # User profile API
│   │   └── webhooks/clerk/    # Clerk webhook handler
│   ├── auth-redirect/         # Post-login role-based redirect
│   ├── components/
│   │   ├── Header.tsx         # Global header with role-aware nav
│   │   └── Footer.tsx         # Global footer
│   ├── portal/                # Customer portal
│   │   ├── book/              # Booking flow
│   │   ├── checkout/          # Payment checkout
│   │   ├── dashboard/         # User dashboard
│   │   ├── itinerary/         # Trip itineraries
│   │   ├── login/             # Sign-in page
│   │   ├── loyalty/           # Rewards program
│   │   ├── profile/           # Profile management
│   │   └── wishlist/          # Saved journeys
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   ├── sign-in/               # Clerk sign-in
│   ├── sign-up/               # Clerk sign-up
│   ├── tours/                 # Tour packages listing
│   ├── globals.css            # Global styles & design tokens
│   ├── layout.tsx             # Root layout with ClerkProvider
│   └── page.tsx               # Homepage
├── lib/
│   └── prisma.ts              # Prisma client singleton
├── prisma/
│   └── schema.prisma          # Database schema (20+ models)
├── public/                    # Static assets
├── scripts/                   # Build & utility scripts
└── proxy.ts                   # Proxy middleware
```

---

## 🗄 Database Schema

The application uses a comprehensive PostgreSQL schema managed by Prisma with **20+ models**:

```mermaid
erDiagram
    User ||--o{ Booking : creates
    User ||--o{ CarHireBooking : books
    User ||--o{ HotelBooking : reserves
    User ||--o{ TourBooking : joins
    User ||--o{ Review : writes
    User ||--o{ WishlistItem : saves
    User ||--o{ Payment : makes
    User ||--o| StaffProfile : has

    Booking ||--o{ Payment : has
    Booking ||--o| Invoice : generates
    Booking ||--o| CarHireBooking : linked
    Booking ||--o| HotelBooking : linked
    Booking ||--o| TourBooking : linked

    Destination ||--o{ Hotel : contains
    Destination ||--o{ TourPackage : features

    Hotel ||--o{ HotelRoom : has
    Hotel ||--o{ HotelBooking : booked

    TourPackage ||--o{ TourItinerary : includes
    TourPackage ||--o{ TourAvailability : scheduled
    TourPackage ||--o{ TourBooking : booked

    Car ||--o{ CarHireBooking : rented
    Car ||--o{ MaintenanceLog : serviced
```

### Key Models

| Model | Purpose |
|---|---|
| `User` | Core user with Clerk integration and role assignment |
| `Booking` | Unified booking entity linking car, hotel, tour, and appointment bookings |
| `Destination` | Travel destination catalog with country/continent data |
| `TourPackage` | Full tour packages with itineraries, availability, and pricing |
| `Hotel` / `HotelRoom` | Hotel catalog with room types, star ratings, and amenities |
| `Car` | Rental fleet with categories, maintenance tracking, and status |
| `Payment` / `Invoice` | Payment processing with multiple methods and invoice generation |
| `Appointment` | Consultation scheduling between clients and consultants |
| `Promotion` | Discount codes with validity periods and usage limits |
| `StaffProfile` / `StaffPermission` | Staff management with granular module-level permissions |
| `ActivityLog` | Comprehensive audit trail for all system actions |

### User Roles

| Role | Access Level |
|---|---|
| `CUSTOMER` | Browse, book, manage personal trips and profile |
| `CONSULTANT` | Customer access + consultation management |
| `ADMIN` | Full admin dashboard access |
| `SUPER_ADMIN` | Admin access + staff management and system settings |

---

## 🎨 Design System

The application uses a **premium dark theme** with custom design tokens defined in `globals.css`:

| Token | Value | Usage |
|---|---|---|
| `--background-dark` | `#0d0d0d` | Page backgrounds |
| `--surface-dark` | `#1a1a1a` | Card surfaces |
| `--border-dark` | `#2a2a2a` | Borders and dividers |
| `--primary` | `#C61010` | Brand red — CTAs, accents |
| `--text-muted` | `#737373` | Secondary text |

### Design Highlights

- 🌑 **Dark mode** throughout with glassmorphism effects
- ✨ **Micro-animations** on hover, scroll, and page transitions
- 📱 **Fully responsive** — mobile-first approach with adaptive layouts
- 🔤 **Plus Jakarta Sans** — modern premium typography
- 🎯 **Material Symbols** — consistent iconography system

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (visual DB editor) |
| `npx prisma db push` | Push schema changes to the database |
| `npx prisma generate` | Regenerate Prisma Client |

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/)
3. Add all environment variables from `.env`
4. Deploy — Vercel auto-detects Next.js settings

### Other Platforms

The app is a standard Next.js application and can be deployed on any platform that supports Node.js:

- **Railway** — `railway up`
- **Render** — Connect GitHub repo, set build command to `npm run build`
- **Docker** — Use the official [Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

<div align="center">

**Built with ❤️ by the Wanderlux Team**

*Experience the Extraordinary.*

</div>
]]>
