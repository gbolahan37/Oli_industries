# Leather brand website

React + TypeScript + Tailwind CSS storefront (Vite). This is the frontend: homepage, shop grid with
filters/search/sorting, quick view, wishlist, cart drawer in naira, and newsletter form.
Checkout and the newsletter run in **demo mode**; no payment is taken and nothing is saved on a server.

## Run it
Requires Node.js 18+.

    npm install
    npm run dev        # opens at http://localhost:5173
    npm run build      # production build in /dist

## Where to change things
| What | File |
| --- | --- |
| Brand name, email, location, Instagram URL, story and campaign photos | `src/data/site.ts` |
| Products, prices (₦), colours, product photos | `src/data/products.ts` |
| Your photos | `public/images/` (use as `/images/name.jpg`) |
| Colours and fonts | `tailwind.config.js` and `index.html` |
| Page sections | `src/components/` (`Hero.tsx`, `Shop.tsx`, `Story.tsx`, ...) |
| Section order | `src/App.tsx` |
| Cart and wishlist logic | `src/context/ShopContext.tsx` |

Product photos: add `images: ['/images/aria-front.jpg', '/images/aria-hover.jpg']` to a product.
The second image appears on hover.

## Still to build
Product detail pages and routing, customer accounts, checkout and order history, and the backend
(Node/Express + PostgreSQL) with Paystack. Keep the Paystack **secret key on the server only**;
the frontend should only ever use the public key.
# Oli_industries
