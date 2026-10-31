import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

const categories = ['All', ...new Set(products.map((p) => p.category))]

export default function Shop() {
  const [cat, setCat] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<'new' | 'lo' | 'hi'>('new')

  const list = useMemo(() => {
    const l = products.filter((p) => (cat === 'All' || p.category === cat) && p.name.toLowerCase().includes(query.trim().toLowerCase()))
    return l.sort((a, b) => (sort === 'lo' ? a.price - b.price : sort === 'hi' ? b.price - a.price : b.order - a.order))
  }, [cat, query, sort])

  return (
    <section id="shop" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <h2 className="h2">The New Collection</h2>
          <p className="mt-2.5 font-serif text-xl italic text-cognac">Timeless pieces. Thoughtfully crafted.</p>
        </div>
        <div className="mb-9 flex flex-wrap items-center justify-between gap-4 border-y border-line py-3.5">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}
                className={`border px-4 py-1.5 text-xs tracking-[.08em] transition ${cat === c ? 'border-choc bg-choc text-ivory' : 'border-line'}`}>{c}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <label className="sr-only" htmlFor="q">Search</label>
            <input id="q" type="search" className="field" placeholder="Search pieces" value={query} onChange={(e) => setQuery(e.target.value)} />
            <label className="sr-only" htmlFor="sort">Sort</label>
            <select id="sort" className="field" value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
              <option value="new">Newest arrivals</option>
              <option value="lo">Price: low to high</option>
              <option value="hi">Price: high to low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-6 gap-y-8" aria-live="polite">
          {list.length ? list.map((p) => <ProductCard key={p.id} product={p} />) : (
            <p className="col-span-full p-10 text-center text-cognac">No pieces match yet. Try another category or search term.</p>
          )}
        </div>
      </div>
    </section>
  )
}
