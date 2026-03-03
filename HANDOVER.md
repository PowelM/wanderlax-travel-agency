# 🌍 Wanderlax Travel Agency — Project Handover Document

**Project Name:** Wanderlax Travel Agency
**Handover Date:** March 3, 2026
**Prepared By:** Akubrecah Tech Hub
**Repository:** [github.com/Akubrecah/wanderlax-travel-agency](https://github.com/Akubrecah/wanderlax-travel-agency)

---

## 📌 Table of Contents

1. [Live Links](#-live-links)
2. [Admin Credentials](#-admin-credentials)
3. [Tech Stack Overview](#-tech-stack-overview)
4. [Project Architecture](#-project-architecture)
5. [Third-Party Services](#-third-party-service-ownership--credentials)
6. [Environment Variables](#-environment-variables)
7. [Source Code Transfer](#-source-code-transfer)
8. [Getting Started (Local Development)](#-getting-started-local-development)
9. [Database Schema Overview](#-database-schema-overview)
10. [Admin Panel Features](#-admin-panel-features)

---

## 🔗 Live Links

| Resource          | URL                                          |
|-------------------|----------------------------------------------|
| **Live Website**  | `https://wanderlax-travel-agency.vercel.app`  |
| **Admin Panel**   | `https://wanderlax-travel-agency.vercel.app/admin` |
| **GitHub Repo**   | `https://github.com/Akubrecah/wanderlax-travel-agency` |

> [!IMPORTANT]
> Replace the URLs above with the actual production domain once a custom domain is configured.

---

## 🔐 Admin Credentials

| Field     | Value                         |
|-----------|-------------------------------|
| **Email** | *(Your registered Clerk admin email)* |
| **Role**  | `SUPER_ADMIN`                 |

> [!CAUTION]
> **Change your password immediately** upon first login via the Clerk user settings. Admin access is managed through Clerk — user roles (`ADMIN`, `SUPER_ADMIN`) are assigned in the database.

---

## 🛠 Tech Stack Overview

| Layer              | Technology                              |
|--------------------|-----------------------------------------|
| **Framework**      | Next.js 16 (App Router)                 |
| **UI Library**     | React 19                                |
| **Styling**        | Tailwind CSS v4                         |
| **Language**       | TypeScript 5                            |
| **ORM**            | Prisma 6 with PostgreSQL adapter        |
| **Database**       | PostgreSQL (via Neon / Supabase)        |
| **Authentication** | Clerk (v6.38+)                          |
| **Hosting**        | Vercel                                  |
| **PDF Generation** | jsPDF + html2canvas                     |
| **Webhook Handling** | Svix                                  |

---

## 🏗 Project Architecture

```
wanderlax-travel-agency/
├── app/                    # Next.js App Router pages & API routes
│   ├── actions/            # Server Actions (bookings, CRM, payments, etc.)
│   ├── admin/              # Admin Panel (dashboard, tours, hotels, fleet, etc.)
│   ├── api/                # API routes (webhooks, endpoints)
│   ├── portal/             # Customer Portal
│   ├── tours/              # Public Tour pages
│   ├── hotels/             # Public Hotel pages
│   ├── car-hire/           # Car Hire page
│   ├── concierge/          # Concierge service
│   ├── contact/            # Contact page
│   ├── about/              # About page
│   ├── sign-in/            # Clerk Sign In
│   ├── sign-up/            # Clerk Sign Up
│   └── weather/            # Weather widget
├── components/             # Reusable UI Components
│   └── admin/              # Admin-specific components
├── lib/                    # Shared utilities (Prisma client, helpers)
├── prisma/                 # Database schema & migrations
├── public/                 # Static assets (images, icons)
├── scripts/                # Utility scripts (seed data, etc.)
└── package.json            # Dependencies & scripts
```

### Key Server Actions (`app/actions/`)

| File                   | Purpose                                     |
|------------------------|---------------------------------------------|
| `bookingActions.ts`    | Booking CRUD, status management             |
| `carActions.ts`        | Fleet management (cars)                     |
| `crmActions.ts`        | Customer relationship management            |
| `hotelActions.ts`      | Hotel & room CRUD operations                |
| `loyalty.ts`           | Loyalty points system                       |
| `paymentActions.ts`    | Payment processing & refunds                |
| `reportsActions.ts`    | Analytics & reporting                       |
| `settingsActions.ts`   | Site settings management                    |
| `staffActions.ts`      | Staff profile & permission management       |
| `tourActions.ts`       | Tour package CRUD operations                |
| `wishlistActions.ts`   | Customer wishlist management                |

---

## 🔑 Third-Party Service Ownership & Credentials

### 1. Hosting — Vercel

| Detail           | Info                                          |
|------------------|-----------------------------------------------|
| **Platform**     | [vercel.com](https://vercel.com)              |
| **Project**      | `wanderlax-travel-agency`                     |
| **Transfer**     | Go to *Project → Settings → General → Transfer Project* to transfer to client's Vercel team |

### 2. Database — PostgreSQL (Neon / Supabase)

| Detail           | Info                                          |
|------------------|-----------------------------------------------|
| **Provider**     | *(Neon / Supabase — update with actual provider)* |
| **Dashboard**    | *(Provider dashboard URL)*                    |
| **Transfer**     | Add the client as a team member / transfer the project in the provider dashboard |

> [!WARNING]
> The database contains the `DATABASE_URL` and `DIRECT_URL` connection strings. Never share these over unsecured channels.

### 3. Authentication — Clerk

| Detail           | Info                                          |
|------------------|-----------------------------------------------|
| **Platform**     | [clerk.com](https://clerk.com)                |
| **Dashboard**    | [dashboard.clerk.com](https://dashboard.clerk.com) |
| **Transfer**     | Go to *Organization Settings → Members* and add the client as an admin. Then transfer the Clerk application ownership. |

### 4. Domain & DNS

| Detail           | Info                                          |
|------------------|-----------------------------------------------|
| **Registrar**    | *(GoDaddy / Namecheap / Cloudflare — update)*|
| **Transfer**     | Initiate domain transfer from registrar settings, or update DNS nameservers to Vercel |

### 5. Email Service (if configured)

| Detail           | Info                                          |
|------------------|-----------------------------------------------|
| **Provider**     | *(Resend / SendGrid — update if applicable)* |
| **Transfer**     | Add client as team member or transfer the project |

---

## 🌐 Environment Variables

All environment variables required to run the application are listed below. A `.env.sample` file is included in the repository root.

| Variable                                       | Purpose                                  |
|------------------------------------------------|------------------------------------------|
| `DATABASE_URL`                                 | PostgreSQL connection string (pooled)    |
| `DIRECT_URL`                                   | PostgreSQL direct connection string      |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`            | Clerk publishable key (frontend)         |
| `CLERK_SECRET_KEY`                             | Clerk secret key (backend)               |
| `CLERK_WEBHOOK_SECRET`                         | Clerk webhook verification secret        |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`                | Sign-in page route                       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`                | Sign-up page route                       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Post sign-in redirect fallback        |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Post sign-up redirect fallback        |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`          | Post sign-in redirect URL               |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`          | Post sign-up redirect URL               |

> [!CAUTION]
> **Never** commit the `.env` or `.env.local` file to GitHub. The actual credentials should be shared securely via an encrypted password manager (e.g., 1Password, Bitwarden) or a secure note — **never** via email.

---

## 📦 Source Code Transfer

### Option A: GitHub Repository Transfer
1. Go to the repo: [github.com/Akubrecah/wanderlax-travel-agency](https://github.com/Akubrecah/wanderlax-travel-agency)
2. Navigate to **Settings → Danger Zone → Transfer Repository**
3. Enter the client's GitHub username or organization
4. Confirm the transfer

### Option B: ZIP Backup
A `.zip` backup of the codebase can be provided (excluding `node_modules`, `.next`, and `.env.local`):

```bash
zip -r wanderlax-travel-agency-backup.zip . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".env" \
  -x ".env.local"
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js** 18+ (recommended: 20 LTS)
- **npm** 9+ (comes with Node.js)
- **PostgreSQL** database (or use a cloud provider like Neon/Supabase)

### Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/Akubrecah/wanderlax-travel-agency.git
cd wanderlax-travel-agency

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.sample .env.local
# Then fill in the actual values in .env.local

# 4. Generate Prisma client
npx prisma generate

# 5. Run database migrations
npx prisma migrate deploy

# 6. (Optional) Seed the database
npx tsx scripts/seed.ts

# 7. Start the development server
npm run dev
# → App runs on http://localhost:3000

# 8. Build for production
npm run build

# 9. Start production server
npm start
```

### Available Scripts

| Command           | Description                             |
|-------------------|-----------------------------------------|
| `npm run dev`     | Start development server                |
| `npm run build`   | Generate Prisma client & build for production |
| `npm start`       | Start production server                 |
| `npm run lint`    | Run ESLint                              |

---

## 🗄 Database Schema Overview

The application uses **Prisma ORM** with **PostgreSQL**. Below is a summary of all database models:

### Core Models

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `User`               | All users (customers, staff, admins) via Clerk   |
| `Session`            | User session tracking                            |
| `StaffProfile`       | Extended staff information                       |
| `StaffPermission`    | Granular module-level permissions                |

### Booking & Commerce

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `Booking`            | Master booking record (links to sub-bookings)    |
| `Payment`            | Payment transactions                             |
| `Invoice`            | Generated invoices for bookings                  |
| `Promotion`          | Promo codes & discounts                          |

### Tours

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `TourPackage`        | Tour listings with pricing & details             |
| `TourItinerary`      | Day-by-day tour itinerary                        |
| `TourAvailability`   | Tour date availability & capacity                |
| `TourBooking`        | Customer tour reservations                       |
| `TourTraveler`       | Individual traveler details per tour booking     |

### Hotels

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `Hotel`              | Hotel listings with amenities & ratings          |
| `HotelRoom`         | Room types, pricing & capacity                   |
| `HotelBooking`      | Customer hotel reservations                      |

### Cars / Fleet

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `Car`                | Fleet vehicles with specs & pricing              |
| `CarHireBooking`     | Customer car rental reservations                 |
| `MaintenanceLog`     | Vehicle maintenance records                      |

### Engagement

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `Review`             | Customer reviews for hotels & tours              |
| `Inquiry` / `InquiryMessage` | Contact form submissions & replies      |
| `WishlistItem`       | Customer saved items                             |
| `Notification`       | In-app notifications                             |
| `NewsletterSubscriber` | Email newsletter subscriptions                 |
| `EmailTemplate`      | Configurable email templates                     |

### System

| Model               | Purpose                                          |
|----------------------|--------------------------------------------------|
| `ActivityLog`        | Audit trail of all system actions                |
| `SiteSetting`        | Dynamic site configuration (key-value)           |
| `Destination`        | Travel destination catalog                       |
| `Appointment`        | Consultation booking system                      |
| `BlockedDate`        | Staff unavailability dates                       |

### User Roles

| Role           | Access Level                                       |
|----------------|-----------------------------------------------------|
| `CUSTOMER`     | Browse, book, review, manage profile                |
| `CONSULTANT`   | Handle inquiries, manage appointments               |
| `ADMIN`        | Access admin panel, manage content                  |
| `SUPER_ADMIN`  | Full system access, staff management, settings      |

---

## 🎛 Admin Panel Features

The admin panel is accessible at `/admin` and provides comprehensive management tools:

| Section          | Route               | Features                                              |
|------------------|----------------------|-------------------------------------------------------|
| **Dashboard**    | `/admin`             | Overview stats, charts, recent activity, quick actions |
| **Bookings**     | `/admin/bookings`    | View, filter, confirm/cancel all booking types        |
| **Tours**        | `/admin/tours`       | CRUD tour packages, manage itineraries, toggle featured |
| **Hotels**       | `/admin/hotels`      | CRUD hotels & rooms, manage availability              |
| **Fleet**        | `/admin/fleet`       | Manage vehicles, track maintenance logs               |
| **CRM**          | `/admin/crm`         | Customer profiles, booking history, activity logs     |
| **Payments**     | `/admin/payments`    | Transaction history, refunds, invoices, CSV export    |
| **Reports**      | `/admin/reports`     | Revenue analytics, booking trends, custom date ranges |
| **Staff**        | `/admin/staff`       | Staff profiles, permissions, role assignment          |
| **Messages**     | `/admin/messages`    | Customer inquiries & response management              |
| **Testimonials** | `/admin/testimonials`| Review moderation & publishing                        |
| **Settings**     | `/admin/settings`    | Site name, logo, timezone, currency, language         |

---

## 📋 Post-Handover Checklist

- [ ] Client has received and verified access to the live site
- [ ] Client can log into the admin panel successfully
- [ ] Repository has been transferred to the client's GitHub account
- [ ] All environment variables shared securely
- [ ] Clerk application ownership transferred
- [ ] Database access transferred
- [ ] Vercel project transferred
- [ ] Domain/DNS ownership transferred (if applicable)
- [ ] Email service transferred (if applicable)
- [ ] Client has received the `.env.local` file via secure channel
- [ ] Client has changed the default admin password
- [ ] Final walkthrough/demo call completed
- [ ] Demo call recording shared with client

---

*This document should be treated as confidential and shared only with authorized personnel.*
