import { X } from 'lucide-react'
import { products } from '../data/products'
import { naira } from '../lib/format'
import { useShop } from '../context/ShopContext'
import { ProductImage } from './ProductArt'

export default function QuickView() {
  const { quickViewId, setQuickViewId, add } = useShop()
  const p = products.find((x) => x.id === quickViewId)
  if (!p) return null
  const close = () => setQuickViewId(null)
  return (
    <>
      <div className="fixed inset-0 z-[60] bg-charcoal/50" onClick={close} />
      <div role="dialog" aria-modal="true" aria-label={`Quick view: ${p.name}`}
        className="fixed left-1/2 top-1/2 z-[80] grid max-h-[90vh] w-[min(780px,92vw)] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-ivory md:grid-cols-2">
        <div className="aspect-square"><ProductImage product={p} /></div>
        <div className="px-7 py-9">
          <button className="icon-btn float-right" aria-label="Close" onClick={close}><X size={21} strokeWidth={1.3} /></button>
          <h2 className="h2 !text-3xl">{p.name}</h2>
          <p className="my-2 text-xl text-cognac">{naira(p.price)}</p>
          <p>Handmade from full-grain leather. Product photography and the full description will replace this placeholder.</p>
          <div className="my-4 flex items-center gap-1.5 text-sm">Colours: {p.colors.map((c) => <i key={c} className="inline-block h-3.5 w-3.5 rounded-full" style={{ background: c }} />)}</div>
          <button className="btn" onClick={() => { add(p.id); close() }}>Add to bag</button>
        </div>
      </div>
    </>
  )
}
