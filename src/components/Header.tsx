import { useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useShop } from '../context/ShopContext'
import { site } from '../data/site'

const links = [
  ['Home', '#top'], ['Shop', '#shop'], ['Collections', '#shop'],
  ['Our Story', '#story'], ['Craftsmanship', '#craft'], ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { count, setCartOpen, notify } = useShop()
  return (
    <>
      <div className="bg-choc px-3 py-2 text-center text-[.7rem] tracking-[.2em] text-beige">
        NEW LOOK. NEW COLLECTIONS. WELCOME TO OUR NEW ERA.
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
          <a href="#top" className="font-serif text-2xl font-semibold tracking-[.3em] text-choc no-underline">{site.brandName}</a>
          <nav aria-label="Main" className={`absolute left-0 right-0 top-[72px] flex-col overflow-hidden bg-ivory transition-[max-height] duration-500 md:static md:flex md:max-h-none md:flex-row md:gap-9 ${open ? 'flex max-h-96 border-b border-line' : 'hidden max-h-0 md:flex'}`}>
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}
                className="border-t border-line px-6 py-4 text-xs uppercase tracking-[.14em] no-underline hover:text-cognac md:border-0 md:p-0 md:py-1">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a href="#shop" className="icon-btn" aria-label="Search the shop"><Search size={21} strokeWidth={1.3} /></a>
            <button className="icon-btn" aria-label="Account" onClick={() => notify('Customer accounts connect once the backend is configured.')}><User size={21} strokeWidth={1.3} /></button>
            <button className="icon-btn" aria-label="Open bag" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={21} strokeWidth={1.3} />
              <span key={count} className="absolute right-0 top-0.5 grid h-[17px] min-w-[17px] animate-pop place-items-center rounded-full bg-cognac text-[.62rem] text-white">{count}</span>
            </button>
            <button className="icon-btn md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? <X size={21} strokeWidth={1.3} /> : <Menu size={21} strokeWidth={1.3} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
