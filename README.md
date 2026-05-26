# GateScanner

GateScanner is a crowdsourced airport wait-time platform for tracking live airport queue times across security, passport control, immigration, baggage, and customs.

The goal is to help travellers check airport queues before they arrive and allow other travellers to submit live wait-time reports.

---

## Project Goal

GateScanner is being built as a web-first MVP before expanding into a mobile app.

The MVP should allow travellers to:

- Search for an airport
- View estimated queue times
- See a combined departure queue estimate
- Submit live queue reports
- View recent crowd-sourced reports
- Use the website comfortably on mobile and desktop

---

## Core Idea

Most travellers do not want to check every airport process separately. They want a simple answer:

> How long will I probably spend queuing at the airport?

For departures, GateScanner combines:

- Security wait time
- Passport control wait time

into one simple:

- Combined departure queue estimate

Additional queue types can still be tracked separately:

- Arrivals
- Immigration
- Baggage
- Customs

---

## Tech Stack

Current stack:

- Next.js
- TypeScript
- Tailwind CSS
- GitHub

Planned stack:

- Supabase for backend/database
- Vercel for deployment
- Expo / React Native for the future mobile app

---

## Project Structure

Current structure:

```text
GateScanner/
  apps/
    web/
      src/
        app/
          page.tsx
  packages/
    shared/
  docs/
    product/
    engineering/
  .github/
    workflows/
  README.md
```

Planned structure:

```text
apps/web/src/
  app/
    page.tsx
    airports/
      [code]/
        page.tsx
  components/
    Header.tsx
    HeroSection.tsx
    AirportSearchCard.tsx
    AirportReportCard.tsx
    ReportQueuePanel.tsx
  data/
    airportReports.ts
  types/
    airport.ts
```

---

## Running the Project Locally

From the repository root:

```bash
cd apps/web
npm run dev
```

Then open:

```text
http://localhost:3000
```

To stop the development server:

```text
Ctrl + C
```

---

## Git Workflow

All new work should be done on feature branches.

Create a new branch:

```bash
git checkout -b feature/name-of-feature
```

After making changes:

```bash
git status
git add .
git commit -m "feat: describe the feature"
git push -u origin feature/name-of-feature
```

Then open a pull request on GitHub and merge into `main` after checking the changes.

Once the project becomes more developed, avoid committing directly to `main`.

---

## Suggested Branches

```text
feature/landing-page
feature/component-cleanup
feature/mock-airport-search
feature/report-submission-form
feature/airport-detail-pages
feature/supabase-schema
feature/supabase-integration
feature/wait-estimate-logic
feature/vercel-deployment
```

---

## Suggested Commit Messages

```text
chore: create initial GateScanner web app
feat: create GateScanner landing page
refactor: split landing page into components
feat: add mock airport search
feat: add report submission form
feat: add airport detail pages
feat: add Supabase schema
feat: connect queue reports to Supabase
feat: calculate airport wait estimates
chore: deploy web app to Vercel
```

---

## MVP Roadmap

### Phase 1: Project Setup

- [ ] Confirm the Next.js app runs locally
- [ ] Confirm Tailwind CSS is working
- [ ] Confirm the project is connected to GitHub
- [ ] Confirm `.gitignore` excludes `node_modules`, `.next`, `.env`, and `.env.local`
- [ ] Create the initial GateScanner landing page
- [ ] Push the first stable version to GitHub
- [ ] Use branches for all new features
- [ ] Use pull requests before merging into `main`

### Phase 2: Landing Page

- [ ] Create a polished GateScanner homepage
- [ ] Add a header/navigation bar
- [ ] Add GateScanner branding
- [ ] Add a hero section
- [ ] Add a plane graphic or travel-themed background
- [ ] Add an airport search card
- [ ] Add tabs for departure queues, arrivals, baggage, and customs
- [ ] Show that departure queues combine security and passport control
- [ ] Add mock airport queue cards
- [ ] Add a “Submit live report” panel
- [ ] Make the page responsive on mobile, tablet, and desktop

### Phase 3: Code Organisation

- [ ] Split the homepage into reusable components
- [ ] Move mock airport data into a separate file
- [ ] Keep `page.tsx` clean and readable
- [ ] Create a components folder
- [ ] Create a data folder
- [ ] Create a types folder

### Phase 4: Mock Airport Search

- [ ] Add airport search input functionality
- [ ] Allow search by airport name
- [ ] Allow search by airport code
- [ ] Allow search by city
- [ ] Add terminal filter
- [ ] Filter mock airport reports based on the search
- [ ] Show a “No airport found” message
- [ ] Keep “Departure queues” selected by default
- [ ] Calculate combined departure queue time from security and passport control
- [ ] Display combined queue estimate clearly
- [ ] Add mock data for more airports

Example searches:

```text
Heathrow
LHR
Edinburgh
EDI
Manchester
MAN
```

### Phase 5: Report Submission Form

- [ ] Create a report submission form
- [ ] Add airport field
- [ ] Add terminal field
- [ ] Add queue type field
- [ ] Add wait time field
- [ ] Add optional notes field
- [ ] Add submit button
- [ ] Validate that airport is required
- [ ] Validate that queue type is required
- [ ] Validate that wait time is required
- [ ] Validate that wait time is a positive number
- [ ] Prevent unrealistic wait times
- [ ] Show a success message after submission
- [ ] Add submitted reports to local mock state first
- [ ] Display newly submitted reports on the page

Queue types:

```text
Security
Passport control
Immigration
Baggage
Customs
```

### Phase 6: Airport Detail Pages

- [ ] Create dynamic airport pages
- [ ] Add route for individual airport pages
- [ ] Display airport name
- [ ] Display airport code
- [ ] Display city and country
- [ ] Display terminals
- [ ] Display security wait time
- [ ] Display passport control wait time
- [ ] Display combined departure queue estimate
- [ ] Display arrivals queue information
- [ ] Display baggage and customs information
- [ ] Display recent reports
- [ ] Add a “Submit report for this airport” button

Suggested routes:

```text
/airports/lhr
/airports/edi
/airports/man
```

Suggested file:

```text
apps/web/src/app/airports/[code]/page.tsx
```

### Phase 7: Supabase Backend

- [ ] Create Supabase project
- [ ] Add Supabase URL to `.env.local`
- [ ] Add Supabase anon key to `.env.local`
- [ ] Create `airports` table
- [ ] Create `terminals` table
- [ ] Create `queue_reports` table
- [ ] Add Supabase client to the Next.js app
- [ ] Fetch airport data from Supabase
- [ ] Fetch queue reports from Supabase
- [ ] Submit queue reports to Supabase
- [ ] Make sure private keys are not committed to GitHub
- [ ] Add example environment file

Suggested environment files:

```text
.env.local
.env.example
```

Suggested `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### Phase 8: Database Schema

Suggested tables:

```text
airports
  id
  iata_code
  icao_code
  name
  city
  country
  latitude
  longitude
  created_at

terminals
  id
  airport_id
  name
  created_at

queue_reports
  id
  airport_id
  terminal_id
  queue_type
  wait_minutes
  note
  created_at
  expires_at
```

Database tasks:

- [ ] Design airport table
- [ ] Design terminal table
- [ ] Design queue report table
- [ ] Add created timestamps
- [ ] Add report expiry timestamps
- [ ] Add queue type constraints
- [ ] Add wait time constraints
- [ ] Add indexes for airport and queue type
- [ ] Add Row Level Security policies
- [ ] Test inserting reports
- [ ] Test reading reports

### Phase 9: Wait-Time Estimate Logic

- [ ] Only use recent reports
- [ ] Ignore expired reports
- [ ] Calculate security wait estimate
- [ ] Calculate passport control wait estimate
- [ ] Calculate combined departure queue estimate
- [ ] Calculate arrivals estimate
- [ ] Calculate baggage and customs estimate
- [ ] Count number of reports used
- [ ] Show last updated time
- [ ] Add confidence level based on report count and freshness
- [ ] Add queue status labels

Suggested status logic:

```text
0–15 minutes: Clear
16–30 minutes: Busy
31+ minutes: Heavy
```

Suggested confidence logic:

```text
High confidence: 10+ recent reports
Medium confidence: 4–9 recent reports
Low confidence: 1–3 recent reports
No data: 0 recent reports
```

### Phase 10: Trust and Safety

- [ ] Prevent negative wait times
- [ ] Prevent extremely high wait times
- [ ] Add report expiry
- [ ] Prevent duplicate reports
- [ ] Add basic spam protection
- [ ] Add optional anonymous reporting
- [ ] Add optional user accounts
- [ ] Add moderation tools later
- [ ] Add report flagging later
- [ ] Add admin dashboard later

### Phase 11: Airport Data

- [ ] Add initial UK airports
- [ ] Add major European airports
- [ ] Add major US airports
- [ ] Add airport codes
- [ ] Add terminal names
- [ ] Add city and country data
- [ ] Add airport coordinates
- [ ] Add search keywords
- [ ] Add airport aliases

Initial airports:

```text
London Heathrow - LHR
London Gatwick - LGW
London Stansted - STN
London Luton - LTN
Manchester - MAN
Edinburgh - EDI
Glasgow - GLA
Birmingham - BHX
Bristol - BRS
Dublin - DUB
```

### Phase 12: UI Improvements

- [ ] Improve mobile navigation
- [ ] Add loading states
- [ ] Add empty states
- [ ] Add error messages
- [ ] Add form validation messages
- [ ] Add better button states
- [ ] Add hover states
- [ ] Add focus states
- [ ] Improve accessibility
- [ ] Improve colour contrast
- [ ] Add icons
- [ ] Add airport cards
- [ ] Add recent reports list
- [ ] Add queue status badges

### Phase 13: Testing

- [ ] Test homepage loads
- [ ] Test search input
- [ ] Test airport filtering
- [ ] Test report submission form
- [ ] Test wait-time calculations
- [ ] Test mobile layout
- [ ] Test tablet layout
- [ ] Test desktop layout
- [ ] Test invalid form inputs
- [ ] Test empty data states
- [ ] Test Supabase read operations
- [ ] Test Supabase write operations

### Phase 14: Deployment

- [ ] Create Vercel account
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy the web app
- [ ] Add Supabase environment variables to Vercel
- [ ] Test production deployment
- [ ] Fix production build errors
- [ ] Add custom domain later
- [ ] Add analytics later
- [ ] Add error monitoring later

Possible domains:

```text
gatescanner.app
gatescanner.co
gatescanner.io
```

### Phase 15: Future Mobile App

Do not start this until the web MVP is working.

- [ ] Create `apps/mobile`
- [ ] Use Expo / React Native
- [ ] Reuse Supabase backend
- [ ] Reuse shared TypeScript types
- [ ] Add nearby airport detection
- [ ] Add push notifications
- [ ] Add saved airports
- [ ] Add airport alerts
- [ ] Publish to TestFlight
- [ ] Publish to Google Play testing

---

## MVP Definition

The MVP is complete when a traveller can:

- Search for an airport
- View current estimated queue times
- See a combined departure queue estimate
- Submit a queue report
- View recent reports from other travellers
- Use the website comfortably on mobile and desktop

---

## Notes

GateScanner should stay focused on solving one problem first: helping travellers understand airport queue times before they arrive.

Extra features should only be added after the core search, report submission, and wait-time estimate flow works properly.
