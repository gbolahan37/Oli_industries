import { products } from '../data/products'
import { site } from '../data/site'
import { useShop } from '../context/ShopContext'
import { ProductImage } from './ProductArt'

export default function Instagram() {
  const { notify } = useShop()
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <h2 className="h2">Follow Our Journey</h2>
          <p className="mt-3">Discover our world of craftsmanship, timeless design, and everyday luxury.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {products.slice(0, 6).map((p, i) => <div key={p.id} className="aspect-square overflow-hidden"><ProductImage product={p} index={i % 2} /></div>)}
        </div>
        <p className="mt-7 text-center">
          {site.instagramUrl ? (
            <a className="btn btn-ghost" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
          ) : (
            <button className="btn btn-ghost" onClick={() => notify('Add your Instagram URL in src/data/site.ts to enable this link.')}>Follow on Instagram</button>
          )}
        </p>
      </div>
    </section>
  )
}
