# 🎬 Wanderlax Travel Agency — Final Demo / Walkthrough Call Guide

**Prepared For:** Client Handover Meeting
**Duration:** 30-60 minutes
**Tools Needed:** Zoom / Google Meet, Screen Sharing

---

## 📋 Pre-Call Checklist

- [ ] Verify the live site is accessible and fully operational
- [ ] Verify admin panel login works with client credentials
- [ ] Prepare the demo data (ensure there are tours, hotels, cars, bookings visible)
- [ ] Test screen sharing works
- [ ] Start recording at the beginning of the call

---

## 🎯 Demo Script / Agenda

### Part 1: Public Website Walkthrough (10—15 min)

#### Homepage
- Show the hero section, featured tours/hotels, and newsletter signup
- Highlight the navigation — Tours, Hotels, Car Hire, Concierge, Contact, Weather
- Point out the responsive design (briefly resize the browser)

#### Tours Page
- Browse tour listings with filters
- Click into a tour detail page — show description, itinerary, pricing, reviews
- Demonstrate the booking flow (without completing a booking)

#### Hotels Page
- Browse hotel listings with star ratings and pricing
- Click a hotel to see rooms, amenities, and availability

#### Car Hire Page
- Show the fleet of available vehicles
- Demonstrate how customers can view car details and rates

#### User Registration & Sign-In
- Show the Clerk-powered sign-in/sign-up pages
- Briefly mention how Clerk handles authentication (Google OAuth, email)

#### Customer Portal
- Log in as a customer (or show the portal structure)
- Show: Profile, My Bookings, Wishlist, Notifications

---

### Part 2: Admin Panel Walkthrough (15—25 min)

#### Login to Admin
- Navigate to `/admin`
- Log in with the client's admin credentials
- Confirm they can see the dashboard

#### Dashboard
- Walk through all the stat cards (bookings, revenue, users, tours)
- Show the revenue chart and recent activity

#### Tour Management (Live Demo)
1. Navigate to `/admin/tours`
2. **Create a test tour** — fill in title, destination, category, price, etc.
3. Show the tour appears in the list
4. **Edit the tour** — change the price or description
5. **Toggle featured** — mark the tour as featured
6. Return to the public tours page and show it appears
7. **Delete the test tour**

#### Hotel Management
1. Navigate to `/admin/hotels`
2. Show the hotel list and how to add/edit/delete hotels
3. Briefly show room management

#### Fleet Management
1. Navigate to `/admin/fleet`
2. Show how to add vehicles and track maintenance

#### Booking Management
1. Navigate to `/admin/bookings`
2. Show how to view, filter, confirm, and cancel bookings
3. Demonstrate status transitions (Pending → Confirmed → Completed)

#### Payments
1. Navigate to `/admin/payments`
2. Show the transaction list and status filters
3. Demonstrate the **Export Report** (CSV download)
4. Show the **Create Invoice** feature

#### CRM
1. Navigate to `/admin/crm`
2. Show customer profiles, booking history, and activity logs

#### Staff Management
1. Navigate to `/admin/staff`
2. Show how to add staff and assign permissions
3. Explain the permissions matrix (View, Create, Edit, Delete, Export)

#### Reports & Analytics
1. Navigate to `/admin/reports`
2. Show the revenue reports and date range selection
3. Demonstrate the custom date range picker

#### Messages
1. Navigate to `/admin/messages`
2. Show the inquiry inbox and how to respond

#### Settings
1. Navigate to `/admin/settings`
2. Show how to update: Site Name, Logo, Language, Timezone, Currency
3. Save the settings and show the change takes effect

---

### Part 3: Client Hands-On (5—10 min)

- **Have the client share their screen** or take control
- Ask them to:
  - [ ] Log into the admin panel with their credentials
  - [ ] Navigate to the tours section
  - [ ] Edit a tour title or price
  - [ ] Save the change and verify it on the public site
  - [ ] Change the site name in Settings
- Answer any questions they have in real-time

---

### Part 4: Q&A and Wrap-Up (5—10 min)

- Ask if they have any questions about any feature
- Remind them about the documentation:
  - `HANDOVER.md` — Technical reference
  - `ADMIN_USER_MANUAL.md` — How to use every admin feature
  - `DELIVERY_CHECKLIST.md` — Verify all deliverables
  - `.env.sample` — Environment variable template
- Discuss post-delivery support timeline (if applicable)
- Confirm the recording will be shared after the call

---

## 📧 Post-Call Email Template

```
Subject: Wanderlax Travel Agency — Project Handover Complete

Hi [Client Name],

Thank you for joining the project walkthrough today! Here's a summary of everything we covered:

📹 Meeting Recording: [Insert link]

📁 Key Documents:
- HANDOVER.md — Master project reference
- ADMIN_USER_MANUAL.md — Admin panel guide
- DELIVERY_CHECKLIST.md — Delivery verification checklist
- .env.sample — Environment variables template

🔑 Next Steps:
1. Change your admin password in Clerk settings
2. Review the admin user manual for any features we didn't cover
3. Confirm receipt of all credentials and environment variables
4. Sign off on the delivery checklist

If you have any questions, don't hesitate to reach out.

Best regards,
[Your Name]
Akubrecah Tech Hub
```

---

*This document is an internal guide. Share the recording and email template with the client post-call.*
