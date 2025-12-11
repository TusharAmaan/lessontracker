\# LessonTracker — Next.js + Supabase (MVP)





\## Quick start

1\. Copy files into a local folder `lessontracker`.

2\. Create a Supabase project and run the SQL schema under \*\*/sql/schema.sql\*\* (or paste the SQL from this document into Supabase SQL editor).

3\. Create a `.env.local` from `.env.example` and fill with your Supabase keys.

4\. Install dependencies: `npm install`.

5\. Run dev server: `npm run dev` and open `http://localhost:3000`.





\## Deploy to Vercel

1\. Push repository to GitHub (or upload via GitHub UI).

2\. In Vercel, import the repo and set env vars (NEXT\_PUBLIC\_SUPABASE\_URL, NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY, SUPABASE\_SERVICE\_ROLE\_KEY).

3\. Deploy.





\## Notes

\- Keep SUPABASE\_SERVICE\_ROLE\_KEY secret; only use on server-side.

\- This scaffold is minimal — add authentication and UI polish in next iterations.

