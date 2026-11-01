import { Minus, Plus, X } from 'lucide-react'
import { products } from '../data/products'
import { naira } from '../lib/format'
import { useShop } from '../context/ShopContext'
import { ProductImage } from './ProductArt'

export default function CartDrawer() {
  const { cart, total, cartOpen, setCartOpen, setQty, notify } = useShop()
  return (
    <>
      <div className={`fixed inset-0 z-[60] bg-charcoal/50 transition-opacity ${cartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setCartOpen(false)} />
      <aside aria-label="Shopping bag" aria-hidden={!cartOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(420px,100%)] flex-col bg-ivory p-6 transition-transform duration-500 ${cartOpen ? '' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-line pb-3.5">
          <h3 className="text-[1.6rem]">Your bag</h3>
          <button className="icon-btn" aria-label="Close bag" onClick={() => setCartOpen(false)}><X size={21} strokeWidth={1.3} /></button>
        </div>
        <div className="my-2.5 flex-1 overflow-auto">
          {cart.length ? cart.map((l) => {
            const p = products.find((x) => x.id === l.id)!
            return (
              <div key={l.id} className="grid grid-cols-[64px_1fr_auto] items-center gap-3.5 border-b border-line py-3.5">
                <div className="aspect-square overflow-hidden"><ProductImage product={p} /></div>
                <div>
                  <strong className="font-medium">{p.name}</strong>
                  <div className="mt-1 inline-flex items-center border border-line">
                    <button className="grid h-7 w-7 place-items-center" aria-label="Decrease quantity" onClick={() => setQty(p.id, l.qty - 1)}><Minus size={14} /></button>
                    <span className="w-7 text-center">{l.qty}</span>
                    <button className="grid h-7 w-7 place-items-center" aria-label="Increase quantity" onClick={() => setQty(p.id, l.qty + 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <span className="text-cognac">{naira(p.price * l.qty)}</span>
              </div>
            )
          }) : <p className="p-10 text-center text-cognac">Your bag is empty. Browse the collection to add a piece.</p>}
        </div>
        <div className="mb-3 border-l-2 border-cognac bg-beige px-3 py-2.5 text-xs">Demo mode: Paystack is not connected, so no payment is taken and no order is placed.</div>
        <div className="my-3 flex justify-between font-serif text-2xl"><span>Total</span><span>{naira(total)}</span></div>
        <button className="btn" disabled={!cart.length} onClick={() => notify('Demo mode: connect Paystack and a backend to take real orders.')}>Checkout</button>
      </aside>
    </>
  )
}
