import { Heart } from 'lucide-react'
import type { Product } from '../data/products'
import { naira } from '../lib/format'
import { useShop } from '../context/ShopContext'
import { ProductImage } from './ProductArt'

export default function ProductCard({ product, variant = 'grid' }: { product: Product; variant?: 'grid' | 'rail' }) {
  const { add, toggleWish, wishlist, setQuickViewId } = useShop()
  const wished = wishlist.includes(product.id)
  return (
    <article className={`group ${variant === 'rail' ? 'w-[min(260px,72vw)] shrink-0 snap-start' : ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <ProductImage product={product} className="transition-transform duration-700 group-hover:scale-105" />
        {product.images?.length === 1 ? null : (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
            <ProductImage product={product} index={1} />
          </div>
        )}
        {product.order > 6 && <span className="absolute left-2.5 top-2.5 bg-ivory px-2 py-0.5 text-[.62rem] tracking-[.14em]">NEW</span>}
        <button className="icon-btn absolute right-1.5 top-1.5 z-10" aria-label={`Save ${product.name} to wishlist`} aria-pressed={wished} onClick={() => toggleWish(product.id)}>
          <Heart size={21} strokeWidth={1.3} className={wished ? 'fill-cognac stroke-cognac' : ''} />
        </button>
        {variant === 'grid' && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full text-[.68rem] font-medium uppercase tracking-[.14em] transition-transform group-focus-within:translate-y-0 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
            <button className="flex-1 bg-ivory/95 py-3.5 text-choc" onClick={() => setQuickViewId(product.id)}>Quick view</button>
            <button className="flex-1 bg-choc py-3.5 text-ivory hover:bg-cognac" onClick={() => add(product.id)}>Add to bag</button>
          </div>
        )}
      </div>
      <div className="flex justify-between gap-2.5 pt-3.5">
        <div>
          <h3 className="text-xl">{product.name}</h3>
          <div className="mt-1.5 flex gap-1.5" aria-label="Available colours">
            {product.colors.map((c) => <i key={c} className="block h-3 w-3 rounded-full border border-line" style={{ background: c }} />)}
          </div>
        </div>
        <span className="whitespace-nowrap font-normal text-cognac">{naira(product.price)}</span>
      </div>
      {variant === 'rail' && (
        <button className="mt-2 w-full border border-choc py-2.5 text-[.68rem] font-medium uppercase tracking-[.14em] text-choc hover:bg-choc hover:text-ivory" onClick={() => add(product.id)}>Quick add</button>
      )}
    </article>
  )
}
