# CaseFlow AI Landing Page

Static pre-launch landing page for CaseFlow AI by CaseFlow Labs.

## Local Preview

This site has no build step. Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Files

- `index.html` - landing page content and metadata
- `docs.html` - product overview, compatibility, support, and compliance notes
- `privacy.html` - basic privacy notes for beta email and AI usage
- `styles.css` - responsive dark SaaS styling
- `script.js` - beta waitlist success-state behavior
- `CNAME` - GitHub Pages custom domain
- `robots.txt` - crawler rules
- `sitemap.xml` - sitemap for `caseflowlabs.store`
- `og-image.svg` - social preview image

## GitHub Pages Deployment

1. Create a GitHub repository named `caseflowlabs-site`.
2. Push these files to the `main` branch.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
6. Save.
7. Under **Custom domain**, enter:

```text
caseflowlabs.store
```

8. Keep the `CNAME` file in the repository root.
9. Enable **Enforce HTTPS** once GitHub finishes provisioning the certificate.

## DNS Setup

Set the GitHub Pages custom domain to:

```text
caseflowlabs.store
```

For the apex domain, configure these GitHub Pages records:

```text
@ A 185.199.108.153
@ A 185.199.109.153
@ A 185.199.110.153
@ A 185.199.111.153
@ AAAA 2606:50c0:8000::153
@ AAAA 2606:50c0:8001::153
@ AAAA 2606:50c0:8002::153
@ AAAA 2606:50c0:8003::153
```

For the `www` subdomain, create a `CNAME` record:

```text
www.caseflowlabs.store CNAME mcincura.github.io
```

The `www` record must point directly to `mcincura.github.io`, not to
`caseflowlabs.store` and not to the repository URL. Do not use wildcard DNS
records for GitHub Pages.

## Deployment With GitHub CLI

If the GitHub CLI is installed and authenticated:

```bash
git init
git add .
git commit -m "Add CaseFlow AI landing page"
gh repo create caseflowlabs-site --public --source=. --remote=origin --push
gh api -X POST repos/:owner/caseflowlabs-site/pages \
  -f source='{"branch":"main","path":"/"}'
```

If the Pages API call reports that Pages already exists, enable or update Pages in the repository settings using the instructions above.
