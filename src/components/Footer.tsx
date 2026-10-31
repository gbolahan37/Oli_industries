import { site } from '../data/site'

const col = 'block py-0.5 text-beige/85 no-underline hover:text-beige hover:underline'

export default function Footer() {
  return (
    <footer id="contact" className="bg-choc pb-7 pt-[72px] text-sm text-beige">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="mb-3 inline-block font-serif text-2xl font-semibold tracking-[.3em] text-ivory no-underline">{site.brandName}</a>
            <p className="max-w-[34ch]">Handmade leather goods, crafted to last and made to be treasured.</p>
          </div>
          <div><h3 className="mb-3.5 text-lg uppercase tracking-[.14em] !text-ivory">Shop</h3>{['Handbags', 'Wallets', 'Belts', 'Accessories'].map((l) => <a key={l} href="#shop" className={col}>{l}</a>)}</div>
          <div><h3 className="mb-3.5 text-lg uppercase tracking-[.14em] !text-ivory">Care</h3>{['Shipping & returns', 'Privacy policy', 'Terms & conditions'].map((l) => <a key={l} href="#contact" className={col}>{l}</a>)}</div>
          <div>
            <h3 className="mb-3.5 text-lg uppercase tracking-[.14em] !text-ivory">Contact</h3>
            <a href={`mailto:${site.email}`} className={col}>{site.email}</a>
            <span className={col}>{site.location}</span>
            {site.instagramUrl && <a href={site.instagramUrl} className={col} target="_blank" rel="noopener noreferrer">Instagram</a>}
          </div>
        </div>
        <div className="mt-11 border-t border-beige/25 pt-5 text-xs opacity-80">© 2026 {site.brandName}. All rights reserved. Brand name and contact details are placeholders.</div>
      </div>
    </footer>
  )
}
