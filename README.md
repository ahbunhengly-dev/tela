# Tela website – demo (static)

8 pages, plain HTML/CSS/JS, no build step.

## Deploy to Vercel (about 1 minute)

Option A – Vercel CLI
1. Install Node.js, then open a terminal in this folder.
2. Run: `npx vercel --prod`
3. Log in when asked, accept the defaults (framework: Other, no build command, output: ./).
4. Vercel prints your link, e.g. https://tela-demo.vercel.app

Option B – GitHub
1. Create a new GitHub repository and upload all files in this folder.
2. On vercel.com: Add New → Project → Import that repository → Deploy (no settings needed).

The site is set to "noindex" (meta tag, X-Robots-Tag header and robots.txt) so search engines will not list the demo.
