# 📋 Wanderlax Travel Agency — Project Delivery Checklist

**Client Name:** ______________________
**Project Name:** Wanderlax Travel Agency
**Delivery Date:** March __, 2026
**Delivered By:** Akubrecah Tech Hub

---

## ✅ Pre-Delivery Preparation

### Documentation
- [ ] **HANDOVER.md** — Master handover document created and reviewed
- [ ] **.env.sample** — Environment variables template with dummy values committed to repository
- [ ] **ADMIN_USER_MANUAL.md** — Admin panel user guide created with feature descriptions
- [ ] **README.md** — Project README updated with setup instructions

### Credentials & Access
- [ ] Default admin account created in Clerk
- [ ] Admin role (`SUPER_ADMIN`) assigned in the database
- [ ] All credentials documented securely (not in plain text)

---

## ✅ Third-Party Service Transfer

### Hosting — Vercel
- [ ] Vercel project identified: `wanderlax-travel-agency`
- [ ] Client added as team member / project transferred
- [ ] Custom domain configured and verified (if applicable)
- [ ] Environment variables set in Vercel dashboard

### Database — PostgreSQL
- [ ] Database provider dashboard access shared with client
- [ ] Client added as team member or project transferred
- [ ] Connection strings documented in `.env` handoff

### Authentication — Clerk
- [ ] Clerk application ownership transferred to client
- [ ] Client has access to Clerk dashboard
- [ ] Webhook endpoints verified and documented
- [ ] API keys rotated post-transfer (for security)

### Domain & DNS
- [ ] Domain registrar account access provided (if applicable)
- [ ] DNS records documented
- [ ] SSL certificate verified as active

### Email Service (if applicable)
- [ ] Email service credentials shared
- [ ] Email templates transferred

---

## ✅ Environment Variables (.env)

- [ ] `.env.sample` committed to repository with all required variables listed
- [ ] Actual `.env.local` values shared securely via:
  - [ ] Encrypted password manager (1Password, Bitwarden, etc.)
  - [ ] OR secure one-time link service
  - **⚠️ NOT via plain text email, Slack, or WhatsApp**
- [ ] Client verified they can use the variables to run the app locally

---

## ✅ Source Code Transfer

### GitHub Repository
- [ ] Repository: `github.com/Akubrecah/wanderlax-travel-agency`
- [ ] Repository transferred to client's GitHub account/organization
- [ ] Client confirmed they can clone and access the repo
- [ ] Branch protection rules explained (if any)

### ZIP Backup (Optional)
- [ ] ZIP archive created (excluding `node_modules`, `.next`, `.env`)
- [ ] ZIP file shared via secure file transfer
- [ ] Client confirmed receipt

---

## ✅ Admin Panel User Manual

### Documentation Provided
- [ ] PDF guide with feature walkthrough (ADMIN_USER_MANUAL.md)
- [ ] Screenshots of key workflows included (if applicable)

### Video Walkthroughs (Recommended)
- [ ] **Video 1:** Dashboard overview & navigating the admin panel
- [ ] **Video 2:** Managing tours (create, edit, delete, feature)
- [ ] **Video 3:** Managing hotels & rooms
- [ ] **Video 4:** Processing bookings & payments
- [ ] **Video 5:** Managing staff & permissions
- [ ] **Video 6:** Viewing reports & analytics
- [ ] **Video 7:** Site settings & CRM overview

### Recording Tool Suggestions
- [Loom](https://loom.com) — Quick screen recordings with shareable links
- [OBS Studio](https://obsproject.com) — Free, open-source recording
- Zoom/Google Meet — Record during the demo call

---

## ✅ Final Demo / Walkthrough Call

### Pre-Call Preparation
- [ ] Meeting scheduled (30-60 minutes)
- [ ] Meeting link sent to client (Zoom / Google Meet)
- [ ] Demo environment verified as working
- [ ] Screen sharing tested

### During the Call
- [ ] Walk through the live website as a normal user:
  - [ ] Homepage, Tours, Hotels, Car Hire
  - [ ] Booking flow (search → select → book)
  - [ ] User registration & sign-in
  - [ ] Customer portal features
- [ ] Demonstrate the Admin Panel:
  - [ ] Dashboard overview
  - [ ] Adding/editing a tour
  - [ ] Processing a booking
  - [ ] Viewing payments & generating reports
  - [ ] Managing staff & permissions
  - [ ] Updating site settings
- [ ] Have the client log in during the call:
  - [ ] Verify their admin credentials work
  - [ ] Let them perform a test action (e.g., edit a tour)
- [ ] Answer any questions

### Post-Call
- [ ] Meeting recording saved and shared with client
- [ ] Follow-up email sent with:
  - [ ] Recording link
  - [ ] Summary of action items
  - [ ] Contact information for future support

---

## ✅ Final Sign-Off

### Acceptance Criteria
- [ ] Client confirms the live website is functional
- [ ] Client confirms admin panel access works
- [ ] Client confirms they have received:
  - [ ] Source code (GitHub + optional ZIP)
  - [ ] All environment variables
  - [ ] All third-party service credentials
  - [ ] Admin user manual
  - [ ] Demo call recording
- [ ] Client signs off on the project delivery

### Post-Delivery Support (Optional)
- [ ] Support period agreed upon: _____ days/weeks
- [ ] Bug reporting process documented
- [ ] Contact method for urgent issues: _________________

---

**Client Signature:** _________________________ **Date:** ___________

**Developer Signature:** _________________________ **Date:** ___________

---

*This checklist serves as a mutual agreement that all project deliverables have been received and verified by the client.*
