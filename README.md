# Jinosoft Website

Static company website for Jinosoft, including LockSheet and Beecabi pages.
Production domain: https://jinosoft.com/

## GitHub Pages

1. Push this project to the `jinosoft-website` repository on branch `main`.
2. In repository Settings > Pages, select GitHub Actions as the source.
3. Configure `jinosoft.com` as the custom domain in Settings > Pages.
4. Point the domain's DNS records to GitHub Pages and enable Enforce HTTPS
   when the certificate is available. Preserve the blog and email DNS records.
5. Run the Deploy website to GitHub Pages workflow from Actions if needed.

Subsequent pushes to `main` deploy automatically. The workflow publishes only
`public/`; test files and original image backups are excluded from Git.

The site uses root-relative links such as `/assets/` and `/apps/`. Use the
configured custom domain to view it. A project URL such as
`https://USERNAME.github.io/jinosoft-website/` needs base-path adjustments.

GitHub Pages does not apply the hosting settings in `firebase.json`.
For workflow-based Pages deployments, configure the domain in repository
settings; a `CNAME` file is not required.

## Local Preview

With Python 3 installed, run a static server from the project root:

```powershell
py -m http.server 4173 --directory public
```

Then open `http://localhost:4173`.

## Firebase Hosting (Alternative)

```powershell
firebase login
firebase init hosting
firebase deploy
```

When initializing, select the existing project for `jinosoft.com` and set the public directory to `public`.

## Content To Replace

- Contact email: `support@jinosoft.com`
- Product names/descriptions if the public lineup changes
- Social/app store links when they are ready
