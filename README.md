# Hitesh Yadav — Portfolio

Next.js 15 (App Router, JavaScript) + Tailwind CSS 3. No TypeScript.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

> Fonts load from Google Fonts at build time (Bricolage Grotesque, Instrument Sans, IBM Plex Mono) — internet needed on first build.

## Edit content

All resume content lives in one file: `components/data.js`
(profile, stats, skills, experience, projects, education).

## Structure

```
app/
  layout.jsx      fonts + metadata (SEO/OG)
  page.jsx        section composition
  globals.css     theme, reveal animations, focus styles
components/
  data.js         ALL content here
  Navbar.jsx      sticky request-bar nav + mobile menu
  Hero.jsx        typed JSON "API response" hero
  Sections.jsx    marquee, about/stats, stack layers
  Work.jsx        experience timeline, projects grid
  Contact.jsx     POST /contact CTA + footer
```

## Payments (Razorpay), services & policy pages

1. Copy `.env.example` to `.env.local` and add your Razorpay keys (use `rzp_test_` keys first).
2. Edit **services, prices, advance %** and business details in `components/data.js` (`services`, `business`, `payment`).
3. Policy text lives in `components/legal.js` — read it once and adjust to your real terms.

```
app/pay                       checkout page  (/pay, /pay?service=ecommerce, /pay?service=custom)
app/api/razorpay/order        creates the Razorpay order (amount decided on the server)
app/api/razorpay/verify       verifies the payment signature (HMAC-SHA256)
app/privacy-policy | terms-and-conditions | refund-policy | shipping-policy | contact-us
components/Services.jsx       pricing section on the home page
components/PayForm.jsx        payment form + Razorpay Checkout
```
