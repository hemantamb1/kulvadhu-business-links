# Kulvadhu By Deepdarshit

A lightweight, mobile-first landing page for Kulvadhu By Deepdarshit, a handloom saree showroom in Burhanpur, Madhya Pradesh. It is designed for customers arriving via a QR code and is intended to be hosted as a GitHub Pages project site.

## Repository structure

```text
.
|-- index.html          (markup and inlined CSS)
|-- script.js           (business details and links)
|-- README.md
`-- assets/
    |-- Kulvadhu_Deepdarshit_logo_transparent_HD.png  (original, not loaded by the page)
    |-- logo-144.png    (optimized logo shown on the page)
    |-- favicon-64.png
    |-- apple-touch-icon.png
    `-- share.jpg       (1200x630 link-preview image)
```

## Update business details and links

All editable business information is grouped at the start of [script.js](script.js) in the `business` configuration object. Update the name, tagline, address, hours, phone number, email, and social or map links there. The page automatically applies those values to its contact and action links.

## Replace the logo

The page loads the small `assets/logo-144.png`, not the 1.2 MB original. To change the logo, resize the new transparent PNG to 144x144 and replace `assets/logo-144.png` (also refresh `favicon-64.png`, `apple-touch-icon.png` and `share.jpg`). Keep the page small so it loads quickly on mobile data.

## Test locally

This is a static site with no dependencies or build step. Open `index.html` in a browser to test it locally. Confirm that the action links and logo load correctly before publishing.

## Enable GitHub Pages

1. Push the `main` branch to GitHub.
2. In the GitHub repository, open **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. GitHub will publish the project site at `https://hemantamb1.github.io/kulvadhu-business-links/` once the deployment completes.

The page uses relative paths such as `style.css` and `assets/...`, so it works under the `/kulvadhu-business-links/` project-site path without a custom domain or server.

## Update the website later

Edit the required files, test `index.html`, commit, and push to `main`. GitHub Pages redeploys from that branch. Keep the GitHub Pages URL unchanged and point the printed QR code to the landing page URL, not directly to WhatsApp, Instagram, YouTube, or Maps. This means those destinations can be updated later in `script.js` without reprinting the QR code.
