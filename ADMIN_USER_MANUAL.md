# 📖 Wanderlax Travel Agency — Admin Panel User Manual

**Version:** 1.0
**Last Updated:** March 3, 2026

---

## Table of Contents

1. [Accessing the Admin Panel](#1-accessing-the-admin-panel)
2. [Dashboard Overview](#2-dashboard-overview)
3. [Managing Tours](#3-managing-tours)
4. [Managing Hotels](#4-managing-hotels)
5. [Managing Fleet (Cars)](#5-managing-fleet-cars)
6. [Managing Bookings](#6-managing-bookings)
7. [Payments & Invoicing](#7-payments--invoicing)
8. [CRM (Customer Management)](#8-crm-customer-management)
9. [Staff Management](#9-staff-management)
10. [Reports & Analytics](#10-reports--analytics)
11. [Messages & Inquiries](#11-messages--inquiries)
12. [Testimonials / Reviews](#12-testimonials--reviews)
13. [Site Settings](#13-site-settings)

---

## 1. Accessing the Admin Panel

### Login
1. Navigate to your website URL + `/admin` (e.g., `https://yoursite.com/admin`)
2. If not signed in, you'll be redirected to the Clerk sign-in page
3. Sign in with your **admin email** and password
4. Only users with `ADMIN` or `SUPER_ADMIN` roles can access the panel

### Navigation
- The **sidebar** on the left lists all admin sections
- Click any section to navigate directly
- The top bar shows your profile and notification bell

---

## 2. Dashboard Overview

**Route:** `/admin`

The dashboard is your command center. It displays:

- **Key Metrics Cards** — Total bookings, revenue, active tours, registered users
- **Revenue Chart** — Visual graph of income trends
- **Recent Bookings** — Quick view of the latest booking activity
- **Quick Actions** — Shortcuts to create tours, hotels, or manage bookings

### How to Use
- Glance at the top metric cards for a real-time snapshot
- Use the revenue chart to monitor income over time
- Click on any recent booking to view its full details
- Use the quick action buttons to jump straight to common tasks

---

## 3. Managing Tours

**Route:** `/admin/tours`

### Viewing Tours
- All tour packages are listed with their name, destination, price, duration, status, and featured badge
- Use the **search bar** to filter tours by name
- Toggle the **Featured** star icon to mark/unmark a tour as featured on the homepage

### Creating a New Tour
1. Click the **"Add Tour"** button
2. Fill in the required fields:
   - **Title** — The name of the tour (e.g., "Serengeti Safari Adventure")
   - **Destination** — Select from existing destinations
   - **Category** — Safari, Beach, Cultural, Adventure, Honeymoon, or Family
   - **Overview** — A detailed description of the tour
   - **Duration** — Number of days and nights
   - **Base Price** — The starting price per person
   - **Group Size** — Minimum and maximum group capacity
   - **Included/Excluded** — What's included (meals, transport) and what's not
   - **Images** — Upload tour photos (use image URLs)
3. Click **"Create Tour"** to save

### Editing a Tour
1. Click the **Edit** icon (pencil) on any tour row
2. Modify any fields
3. Click **"Update Tour"** to save changes

### Deleting a Tour
1. Click the **Delete** icon (trash) on any tour row
2. Confirm the deletion in the dialog
3. **Warning:** This action is permanent and cannot be undone

### Managing Itineraries
- When editing a tour, you can add day-by-day itineraries
- Each itinerary entry includes: day number, title, description, meals, activities

---

## 4. Managing Hotels

**Route:** `/admin/hotels`

### Viewing Hotels
- All hotels are listed with their name, destination, star rating, and status

### Creating a New Hotel
1. Click **"Add Hotel"**
2. Fill in: Name, Destination, Description, Star Rating, Address, Amenities, Images
3. Click **"Create Hotel"**

### Managing Rooms
- Navigate into a hotel to manage its room types
- Each room has: Type (Standard, Deluxe, Suite, etc.), Name, Price per Night, Capacity, Amenities

### Editing / Deleting
- Use the pencil icon to edit, trash icon to delete
- Confirm all delete operations before proceeding

---

## 5. Managing Fleet (Cars)

**Route:** `/admin/fleet`

### Vehicle Inventory
- View all vehicles with their make, model, year, category, status, and daily rate
- **Status Types:** Available, Rented, Maintenance, Decommissioned

### Adding a Vehicle
1. Click **"Add Vehicle"**
2. Fill in: Make, Model, Year, License Plate, Category, Capacity, Transmission, Fuel Type, Daily Rate, Features
3. Upload vehicle images (URLs)
4. Click **"Create Car"**

### Maintenance Logs
- Track routine maintenance, repairs, inspections, and cleaning for each vehicle
- Each log includes: type, description, cost, provider, and date

---

## 6. Managing Bookings

**Route:** `/admin/bookings`

### Booking Overview
- All bookings are listed with: Reference number, Customer name, Service type, Amount, Status, Date
- **Service Types:** Tour Package, Hotel, Car Hire, Flight, Custom

### Filtering Bookings
- Filter by **status**: Pending, Confirmed, Cancelled, Completed
- Filter by **service type**: Tour, Hotel, Car Hire
- Search by **booking reference** or **customer name**

### Processing a Booking
1. Click on any booking to view full details
2. **Confirm** — Approve a pending booking
3. **Cancel** — Cancel the booking (consider sending a notification to the customer)
4. **Complete** — Mark as completed after the service has been delivered

### Booking Details Include
- Customer information (name, email, phone)
- Service-specific details (tour dates, hotel room, car details)
- Payment status and amounts
- Any special requests from the customer

---

## 7. Payments & Invoicing

**Route:** `/admin/payments`

### Transaction List
- View all payment transactions with: Transaction ID, Customer, Amount, Method, Status, Date
- **Payment Methods:** Credit Card, PayPal, Bank Transfer, Stripe

### Filtering Transactions
- Click the status tabs: **All**, **Pending**, **Completed**, **Failed**, **Refunded**
- Transactions update in real-time based on the selected filter

### Exporting Reports
- Click **"Export Report"** to download a CSV file of all filtered transactions
- The CSV includes all transaction details for your accounting records

### Processing a Refund
1. Find the relevant transaction in the list
2. Click the **Actions** menu (⋮) on the transaction row
3. Select **"Process Refund"**
4. Confirm the refund amount and submit

### Creating Invoices
- Click **"Create Invoice"** to generate a new invoice
- Fill in: Booking reference, Due date, Line items, Tax
- Invoices are automatically linked to their corresponding booking

### Advanced Analytics
- Click **"Advanced Analytics"** for detailed financial data
- View revenue breakdowns, payment method distributions, and trend analysis

---

## 8. CRM (Customer Management)

**Route:** `/admin/crm`

### Customer Directory
- View all registered customers with: Name, Email, Phone, Total Bookings, Total Spent, Last Activity
- Search and filter customers by name or email

### Customer Profile
- Click on any customer to view their full profile:
  - **Personal Information** — Name, email, phone, avatar
  - **Booking History** — All past and current bookings
  - **Activity Log** — Actions the customer has taken on the platform
  - **Loyalty Points** — Current points balance

### Managing Customers
- **Edit** — Update customer information
- **Delete** — Remove a customer record (use with caution)
- **Add Note** — Add internal notes about the customer for your team

---

## 9. Staff Management

**Route:** `/admin/staff`

### Staff Directory
- View all staff members with their name, role, department, job title, and active status

### Adding Staff
1. A user must first sign up on the platform
2. Navigate to `/admin/staff`
3. Click **"Add Staff"**
4. Assign the user's email, department, job title, and role

### Setting Permissions
Each staff member can have granular permissions per module:
- **Can View** — Read-only access
- **Can Create** — Create new records
- **Can Edit** — Update existing records
- **Can Delete** — Remove records
- **Can Export** — Export data

Available modules: Bookings, Tours, Hotels, Fleet, Payments, CRM, Reports, Messages, Settings

### Managing Blocked Dates
- Set dates when a staff member is unavailable (vacation, sick leave)
- Blocked dates prevent them from being assigned to appointments during these periods

---

## 10. Reports & Analytics

**Route:** `/admin/reports`

### Revenue Reports
- View total revenue, booking counts, and average order values
- Data is displayed in charts and summary cards

### Date Range Selection
- **Quick Ranges:** Today, Last 7 Days, Last 30 Days, Last 90 Days, This Year
- **Custom Range:** Pick specific start and end dates for your report

### Report Metrics Include
- Total Revenue & Booking Count
- Revenue by Service Type (Tours, Hotels, Cars)
- Booking Status Breakdown (Pending, Confirmed, Completed, Cancelled)
- Payment Method Distribution
- Top-performing tours and hotels

---

## 11. Messages & Inquiries

**Route:** `/admin/messages`

### Inbox
- View all customer inquiries with: Sender name, Subject, Status, Date
- **Status Types:** New, In Progress, Resolved, Closed

### Responding to Inquiries
1. Click on an inquiry to open the conversation thread
2. Read the customer's message and any previous replies
3. Type your response in the reply box
4. Click **Send** to reply
5. Update the status as appropriate (In Progress → Resolved → Closed)

---

## 12. Testimonials / Reviews

**Route:** `/admin/testimonials`

### Review Moderation
- View all customer reviews with: Customer name, Rating, Comment, Published status
- **Publish** — Make a review visible on the public website
- **Unpublish** — Hide a review from the public website
- **Delete** — Permanently remove a review

### Best Practices
- Regularly review new submissions
- Publish 4-5 star reviews to build trust with potential customers
- Respond to negative reviews professionally before publishing

---

## 13. Site Settings

**Route:** `/admin/settings`

### Configurable Settings
- **Site Name** — Your website's display name
- **Site Image / Logo** — The logo shown in the header
- **Language** — Default language for the site
- **Timezone** — Server timezone for date/time display
- **Currency** — Default currency for pricing (e.g., USD, EUR, KES)

### How to Update
1. Navigate to `/admin/settings`
2. Modify any field
3. Click **"Save Settings"**
4. Changes take effect immediately across the website

---

## 🆘 Need Help?

If you encounter issues with the admin panel:

1. **Check the browser console** (F12 → Console tab) for error messages
2. **Clear your browser cache** and try again
3. **Try a different browser** to rule out browser-specific issues
4. **Check if the database is accessible** via the database provider dashboard
5. **Review the Vercel deployment logs** for server-side errors

### Common Issues & Solutions

| Issue                           | Solution                                                |
|---------------------------------|--------------------------------------------------------|
| Can't access admin panel        | Verify your user role is `ADMIN` or `SUPER_ADMIN` in the database |
| Images not loading              | Check that image URLs are valid and domains are whitelisted in `next.config.ts` |
| Data not updating               | Try a hard refresh (Ctrl+Shift+R) — data may be cached |
| Payment actions failing         | Check payment provider credentials in environment variables |
| Login redirects in a loop       | Verify Clerk environment variables are correctly set   |

---

*For developer-level support, refer to the main HANDOVER.md document or contact the development team.*
