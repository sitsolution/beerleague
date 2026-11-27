# Beer League 2026 (web)

Static site. No build step. Needs a Firebase project for Google sign-in and the live database.

## 1. Firebase (about 10 minutes, free tier is enough)
1. console.firebase.google.com > Add project.
2. Build > Authentication > Get started > Sign-in method > enable **Google**.
3. Build > Firestore Database > Create database > production mode, region asia-south1 (Mumbai).
4. Firestore > Rules tab > paste the contents of `firestore.rules` > Publish.
5. Project settings > General > Your apps > Web (</>) > register app > copy the config into `firebase-config.js`.
6. Authentication > Settings > Authorized domains > add your Vercel domain (and your Hostinger domain if you use it).

## 2. Deploy on Vercel
Option A, command line (in this folder): `npx vercel`, accept the defaults (framework: Other, output directory: `.`), then `npx vercel --prod`.
Option B: push this folder to a GitHub repo, then Vercel > Add New > Project > import it. No build command needed.

## 2b. Or Hostinger
hPanel > File Manager > public_html > upload every file in this folder. Add your domain under Firebase Authorized domains.

## 3. First run
Open the site yourself first, sign in with Google and tap **I am the organiser**. That locks the organiser role to you.
Then open the gear icon to set team names, prices and stock, and add players. Share the link with everyone else.
