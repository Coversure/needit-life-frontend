# NeedIt Life Frontend

A responsive frontend prototype for the NeedIt Life Quick Life lead-generation website.

## What is included

- Next.js App Router
- TypeScript
- Tailwind CSS 4
- Responsive public website based on the supplied NeedIt Life concept
- Quick Life product page
- Multi-step quote enquiry form
- Resource articles and FAQ filtering
- Customer support, claims, complaints, legal and disclosure routes
- Custom `/admin` lead login and read-only mock dashboard
- Typed mock lead data for frontend review
- Payload-ready content structure
- SEO metadata, `robots.txt` and `sitemap.xml`
- Supplied family image and a cleaned transparent NeedIt Life logo

## Important prototype limitations

- The quote form does not store or send data.
- Admin authentication is not connected. The preview login only redirects to mock leads.
- Lead data is fictional.
- Payload CMS is not connected yet.
- Product, legal, financial strength, disclosure, contact and compliance content must be reviewed before publication.
- No policy documents are bundled. Approved files should be uploaded through Payload later.

## Create the project from scratch in VSCode

Open the VSCode terminal with `Ctrl + backtick`, then run:

```powershell
npx create-next-app@latest needit-life-frontend --typescript --tailwind --eslint --app --use-npm --import-alias "@/*" --yes
cd needit-life-frontend
npm install lucide-react react-hook-form zod @hookform/resolvers clsx tailwind-merge
npm run dev
```

Open `http://localhost:3000`.

## Run this supplied project

Do not run `create-next-app` inside this extracted folder. The project is already initialised.

```powershell
cd path\to\needit-life-frontend
npm install
copy .env.local.example .env.local
npm run dev
```

Open `http://localhost:3000`.

### Admin preview

Open:

```text
http://localhost:3000/admin
```

Use any valid-looking email and a password with at least 12 characters. This is only a visual preview.

## Useful commands

```powershell
npm run dev
npm run lint
npm run build
npm run start
```

## Environment variables

Copy `.env.local.example` to `.env.local`.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_CMS_URL=http://localhost:3001
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Never place these server secrets in the frontend:

```env
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
PAYLOAD_SECRET=
```

## Main routes

### Public

- `/`
- `/quick-life-insurance`
- `/about-us`
- `/faqs`
- `/resources`
- `/resources/[slug]`
- `/resources/documents-and-forms`
- `/contact`
- `/get-a-quote`
- `/thank-you`
- `/existing-customers`
- `/claims`
- `/complaints`
- `/privacy-policy`
- `/terms-and-conditions`
- `/financial-advice-disclosure`
- `/financial-strength`
- `/fair-conduct-programme`

### Lead administration

- `/admin`
- `/admin/leads`
- `/admin/leads/[id]`
- `/admin/forgot-password`
- `/admin/reset-password`
- `/admin/verify-email`

## Planned backend integration

The frontend expects a separate Express API repository.

```text
POST /api/v1/leads
GET  /api/v1/admin/leads
GET  /api/v1/admin/leads/:id
GET  /api/v1/admin/leads/summary
```

There should be no `PATCH`, `PUT` or `DELETE` lead endpoints in the initial release.

## Planned Payload integration

Payload will be a separate repository and deployment. It will manage:

- Homepage content
- Quick Life content
- Header and footer settings
- FAQs
- Resource articles
- Contact information
- Documents and media
- SEO fields
- Legal and disclosure content
- Drafts, publishing and version history

The custom `/admin` route remains the lead viewer. Payload should use a different address, such as `cms.needitlife.co.nz/admin`.

## Folder overview

```text
app/
  (site)/             Public pages
  admin/              Lead dashboard preview
components/
  admin/              Admin UI
  forms/              Quote and contact forms
  layout/             Header and footer
  sections/           Homepage sections
  ui/                 Shared UI
lib/
  mock-leads.ts       Fictional lead data
  resources.ts        Mock CMS resource content
  site.ts             Site-wide settings and navigation
public/images/        Brand and hero images
```

## Next phase

1. Review visual design and copy.
2. Confirm final lead fields and consent wording.
3. Build the Express API and Supabase schema.
4. Connect Supabase Auth to `/admin`.
5. Replace mock leads with read-only API requests.
6. Build and connect Payload CMS.
7. Replace draft regulated content with approved wording.
