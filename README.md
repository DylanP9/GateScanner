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

## Current Project Status

The project currently has a working frontend MVP using mock/local data.

Completed so far:

- Initial Next.js web app created
- GateScanner landing page created
- Landing page split into reusable components
- Mock airport search added
- Queue report submission form added
- Dynamic airport detail pages added
- Landing page design polished
- README roadmap created and updated
- GitHub feature branch workflow being used

Backend/database work has not started yet. The next major technical decision is choosing and setting up the backend, likely Supabase or another backend alternative.

---

## Tech Stack

Current stack:

- Next.js
- TypeScript
- Tailwind CSS
- GitHub

Planned stack:

- Supabase or another backend/database provider
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
          airports/
            [code]/
              page.tsx
        components/
          AirportQueueMetric.tsx
          AirportReportCard.tsx
          AirportSearchCard.tsx
          Header.tsx
          HeroSection.tsx
          HowItWorks.tsx
          RecentAirportReports.tsx
          ReportQueuePanel.tsx
        data/
          airportReports.ts
  packages/
    shared/
  docs/
    product/
    engineering/
  .github/
    workflows/
  README.md
```

Planned structure as the project grows:

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
    AirportQueueMetric.tsx
    RecentAirportReports.tsx
    HowItWorks.tsx
  data/
    airportReports.ts
  types/
    airport.ts
  lib/
    supabase.ts
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

To test the production build:

```bash
cd apps/web
npm run build
```

---

## Git Workflow

All new work should be done on feature branches.

Create a new branch:

```bash
git checkout main
git pull
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

Important workflow reminders:

- Create the feature branch before starting work
- Avoid committing `.DS_Store` files
- Make sure `.DS_Store` is included in `.gitignore`
- Push the branch you are actually working on
- Run `npm run build` before opening or merging a pull request

---

## Suggested Branches

```text
feature/landing-page
feature/component-cleanup
feature/mock-airport-search
feature/report-submission-form
feature/airport-detail-pages
feature/landing-page-polish
feature/backend-provider-decision
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
feat: add queue report submission form
feat: add airport detail pages
style: polish GateScanner landing page
docs: update README with completed progress
feat: add Supabase schema
feat: connect queue reports to Supabase
feat: calculate airport wait estimates
chore: deploy web app to Vercel
```

---

## Completed Work

### Initial Project Setup

- [x] Created GitHub repository
- [x] Created Next.js web app
- [x] Added TypeScript
- [x] Added Tailwind CSS
- [x] Confirmed app runs locally with `npm run dev`
- [x] Confirmed app builds with `npm run build`
- [x] Added `.gitignore`
- [x] Added `.DS_Store` to `.gitignore`

Notes:

- The app is currently located inside `apps/web`.
- NPM commands must be run from `apps/web`, not from the root `GateScanner` folder.
- The root repo does not currently have its own `package.json`.

### Landing Page

- [x] Created GateScanner homepage
- [x] Added header/navigation
- [x] Added GateScanner branding
- [x] Added hero section
- [x] Added airport search card
- [x] Added plane graphic in hero section
- [x] Added airport queue cards
- [x] Added report queue panel
- [x] Added combined departure queue messaging

Notes:

- The landing page is currently frontend-only.
- Airport data is still mock data.
- Combined queue estimates currently use security + passport control.

### Component Cleanup

- [x] Split homepage into reusable components
- [x] Moved airport card into `AirportReportCard.tsx`
- [x] Moved search card into `AirportSearchCard.tsx`
- [x] Moved header into `Header.tsx`
- [x] Moved hero into `HeroSection.tsx`
- [x] Moved report panel into `ReportQueuePanel.tsx`
- [x] Moved mock data into `airportReports.ts`

Notes:

- This made `page.tsx` much cleaner.
- Components are now easier to update independently.

### Mock Airport Search

- [x] Added airport search input
- [x] Added terminal filter
- [x] Search supports airport name
- [x] Search supports airport code
- [x] Search supports city
- [x] Search supports terminal
- [x] Added “No airport found” state
- [x] Search filters airport cards locally

Example searches:

```text
Heathrow
LHR
Edinburgh
EDI
Manchester
MAN
Terminal 5
```

Notes:

- Search currently uses local mock data.
- This will later be replaced or supported by database queries.

### Queue Report Submission Form

- [x] Added report submission form
- [x] Added airport field
- [x] Added terminal field
- [x] Added queue type selector
- [x] Added wait time input
- [x] Added optional note field
- [x] Added form validation
- [x] Prevents empty airport
- [x] Prevents empty terminal
- [x] Prevents empty wait time
- [x] Prevents negative wait times
- [x] Prevents unrealistic wait times above 240 minutes
- [x] Shows success message after valid submission
- [x] Stores submitted reports in local state
- [x] Displays recent local reports on the page

Queue types:

```text
Security
Passport control
Immigration
Baggage
Customs
```

Notes:

- Submitted reports are not saved to a database yet.
- Reports disappear when the page refreshes.
- This is expected for the current mock frontend phase.

### Airport Detail Pages

- [x] Added dynamic airport routes
- [x] Added `/airports/[code]` page
- [x] Made airport cards clickable
- [x] Added airport detail hero section
- [x] Added airport name, code, city, country, and terminal
- [x] Added security queue metric
- [x] Added passport control queue metric
- [x] Added baggage queue metric
- [x] Added customs queue metric
- [x] Added combined departure estimate
- [x] Added recent mock airport reports
- [x] Added not-found handling for unknown airport codes

Example routes:

```text
/airports/lhr
/airports/edi
/airports/man
/airports/lgw
```

Notes:

- Detail pages use mock data from `airportReports.ts`.
- The page is generated from airport code values.
- Unknown airport codes use the Next.js not found page.

### Landing Page Polish

- [x] Tightened hero spacing
- [x] Reduced visual dominance of plane graphic
- [x] Redesigned airport cards to prioritise combined departure queue time
- [x] Renamed airport section to “Current airport queue estimates”
- [x] Added “How it works” section
- [x] Preserved existing search functionality
- [x] Preserved existing report form functionality

Notes:

- The landing page now feels more like a polished travel product.
- The combined departure queue estimate is now the main visual focus of each airport card.

---

## MVP Roadmap

### Phase 1: Project Setup

- [x] Confirm the Next.js app runs locally
- [x] Confirm Tailwind CSS is working
- [x] Confirm the project is connected to GitHub
- [x] Confirm `.gitignore` excludes `node_modules`, `.next`, `.env`, `.env.local`, and `.DS_Store`
- [x] Create the initial GateScanner landing page
- [x] Push the first stable version to GitHub
- [x] Use branches for all new features
- [x] Use pull requests before merging into `main`

Notes:

- Basic project setup is complete.
- Git workflow issues around branch creation and `.DS_Store` have been identified and corrected.

### Phase 2: Landing Page

- [x] Create a polished GateScanner homepage
- [x] Add a header/navigation bar
- [x] Add GateScanner branding
- [x] Add a hero section
- [x] Add a plane graphic or travel-themed background
- [x] Add an airport search card
- [x] Add tabs for departure queues, arrivals, baggage, and customs
- [x] Show that departure queues combine security and passport control
- [x] Add mock airport queue cards
- [x] Add a “Submit live report” panel
- [x] Make the page responsive on desktop
- [ ] Fully review and polish tablet layout
- [ ] Fully review and polish mobile layout

Notes:

- The main desktop layout is complete.
- Mobile and tablet layouts should still be checked carefully before deployment.

### Phase 3: Code Organisation

- [x] Split the homepage into reusable components
- [x] Move mock airport data into a separate file
- [x] Keep `page.tsx` cleaner and more readable
- [x] Create a components folder
- [x] Create a data folder
- [ ] Create a dedicated types folder later if shared types grow

Notes:

- Current type definitions live inside `airportReports.ts`.
- A separate `types` folder can be added later when the data model grows.

### Phase 4: Mock Airport Search

- [x] Add airport search input functionality
- [x] Allow search by airport name
- [x] Allow search by airport code
- [x] Allow search by city
- [x] Add terminal filter
- [x] Filter mock airport reports based on the search
- [x] Show a “No airport found” message
- [x] Keep “Departure queues” selected by default
- [x] Calculate combined departure queue time from security and passport control
- [x] Display combined queue estimate clearly
- [x] Add mock data for more airports

Notes:

- This feature is complete for the mock frontend phase.
- Later, airport search may need autocomplete and database-backed search.

### Phase 5: Report Submission Form

- [x] Create a report submission form
- [x] Add airport field
- [x] Add terminal field
- [x] Add queue type field
- [x] Add wait time field
- [x] Add optional notes field
- [x] Add submit button
- [x] Validate that airport is required
- [x] Validate that queue type is required
- [x] Validate that wait time is required
- [x] Validate that wait time is a positive number
- [x] Prevent unrealistic wait times
- [x] Show a success message after submission
- [x] Add submitted reports to local mock state first
- [x] Display newly submitted reports on the page

Notes:

- This works locally in the frontend.
- The next improvement would be saving submitted reports to a backend.

### Phase 6: Airport Detail Pages

- [x] Create dynamic airport pages
- [x] Add route for individual airport pages
- [x] Display airport name
- [x] Display airport code
- [x] Display city and country
- [x] Display terminals
- [x] Display security wait time
- [x] Display passport control wait time
- [x] Display combined departure queue estimate
- [x] Display arrivals/immigration-related information through mock data
- [x] Display baggage and customs information
- [x] Display recent reports
- [x] Add a “Submit report for this airport” button/link

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

Notes:

- Airport detail pages are complete using mock data.
- The airport-specific report flow can be improved later by pre-filling the report form.

### Phase 7: Backend Provider Decision

- [ ] Decide final backend provider
- [ ] Compare Supabase, Firebase, Appwrite, Convex, Neon, and custom Postgres
- [ ] Choose the option that best fits GateScanner
- [ ] Document the decision in the README or a separate architecture note

Potential options:

```text
Supabase
Firebase
Appwrite
Convex
Neon + Next.js API routes
MongoDB Atlas
Railway/Render + Postgres
PocketBase
```

Notes:

- Supabase is still a strong option because GateScanner data is relational.
- Alternatives should be considered before locking in the backend.

### Phase 8: Supabase Backend or Alternative Backend

- [ ] Create backend project
- [ ] Add backend URL to `.env.local`
- [ ] Add public API key or anon key to `.env.local`
- [ ] Create `airports` table/collection
- [ ] Create `terminals` table/collection
- [ ] Create `queue_reports` table/collection
- [ ] Add backend client to the Next.js app
- [ ] Fetch airport data from backend
- [ ] Fetch queue reports from backend
- [ ] Submit queue reports to backend
- [ ] Make sure private keys are not committed to GitHub
- [ ] Add example environment file

Suggested environment files:

```text
.env.local
.env.example
```

Suggested `.env.example`:

```env
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_BACKEND_ANON_KEY=
```

Notes:

- Backend work has not started yet.
- The app currently uses local mock data.

### Phase 9: Database Schema

Suggested relational tables:

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
- [ ] Add security rules or Row Level Security policies
- [ ] Test inserting reports
- [ ] Test reading reports

Notes:

- The current mock data already gives a good starting point for the real database model.

### Phase 10: Wait-Time Estimate Logic

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

Notes:

- Some status labels already exist in mock data.
- The real logic should be calculated from reports later.

### Phase 11: Trust and Safety

- [x] Prevent negative wait times in the local form
- [x] Prevent extremely high wait times in the local form
- [ ] Add report expiry
- [ ] Prevent duplicate reports
- [ ] Add basic spam protection
- [ ] Add optional anonymous reporting
- [ ] Add optional user accounts
- [ ] Add moderation tools later
- [ ] Add report flagging later
- [ ] Add admin dashboard later

Notes:

- Basic form validation is complete.
- Real trust and safety features will need backend support.

### Phase 12: Airport Data

- [x] Add initial mock UK airports
- [x] Add airport codes for mock airports
- [x] Add terminal names for mock airports
- [x] Add city and country data for mock airports
- [ ] Add airport coordinates
- [ ] Add search keywords
- [ ] Add airport aliases
- [ ] Add more UK airports
- [ ] Add major European airports
- [ ] Add major US airports

Initial airports:

```text
London Heathrow - LHR
London Gatwick - LGW
Manchester - MAN
Edinburgh - EDI
Glasgow - GLA
Birmingham - BHX
```

Future airport additions:

```text
London Stansted - STN
London Luton - LTN
Bristol - BRS
Dublin - DUB
Amsterdam Schiphol - AMS
Paris Charles de Gaulle - CDG
New York JFK - JFK
Los Angeles - LAX
```

Notes:

- Current airport data is enough for frontend testing.
- Real airport data should eventually come from a seed file or database.

### Phase 13: UI Improvements

- [x] Improve landing page hero spacing
- [x] Improve airport card hierarchy
- [x] Add “How it works” section
- [x] Add queue status badges
- [x] Add empty state for search results
- [x] Add form validation messages
- [x] Add better hover states on airport cards
- [ ] Improve mobile navigation
- [ ] Add loading states
- [ ] Add error messages for backend operations
- [ ] Add better focus states
- [ ] Improve accessibility
- [ ] Improve colour contrast where needed
- [ ] Add icons

Notes:

- The UI is now stronger visually.
- Accessibility and mobile polish should be reviewed before deployment.

### Phase 14: Testing

- [x] Test homepage loads
- [x] Test search input
- [x] Test airport filtering
- [x] Test report submission form
- [x] Test invalid form inputs
- [x] Test empty data states
- [x] Test airport detail pages
- [x] Test production build
- [ ] Test mobile layout thoroughly
- [ ] Test tablet layout thoroughly
- [ ] Test wait-time calculations from backend data
- [ ] Test backend read operations
- [ ] Test backend write operations

Notes:

- Current testing is manual.
- Automated tests can be added later if the project grows.

### Phase 15: Deployment

- [ ] Create Vercel account
- [ ] Connect GitHub repo to Vercel
- [ ] Deploy the web app
- [ ] Add backend environment variables to Vercel
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

Notes:

- Deployment has not started yet.
- Vercel is the likely deployment target for the Next.js web app.

### Phase 16: Future Mobile App

Do not start this until the web MVP is working.

- [ ] Create `apps/mobile`
- [ ] Use Expo / React Native
- [ ] Reuse backend
- [ ] Reuse shared TypeScript types
- [ ] Add nearby airport detection
- [ ] Add push notifications
- [ ] Add saved airports
- [ ] Add airport alerts
- [ ] Publish to TestFlight
- [ ] Publish to Google Play testing

Notes:

- Mobile app development should wait until the web app and backend are stable.

---

## MVP Definition

The MVP is complete when a traveller can:

- [x] Search for an airport using mock data
- [x] View current estimated queue times using mock data
- [x] See a combined departure queue estimate using mock data
- [x] Submit a queue report locally
- [x] View recent local reports
- [x] Open airport detail pages
- [ ] Submit reports to a real backend
- [ ] View reports from a real backend
- [ ] Use the deployed website comfortably on mobile and desktop

---

## Next Recommended Steps

The best next steps are:

1. Finish reviewing and merging the landing page polish branch
2. Decide which backend provider to use
3. Create the backend schema
4. Replace mock airport data with backend data
5. Save queue report submissions to the backend
6. Deploy the web MVP to Vercel

Suggested next branch:

```text
feature/backend-provider-decision
```

or, if Supabase is chosen:

```text
feature/supabase-schema
```

---

## Notes

GateScanner should stay focused on solving one problem first: helping travellers understand airport queue times before they arrive.

Extra features should only be added after the core search, report submission, and wait-time estimate flow works properly.

The current frontend is now strong enough to begin backend planning.
