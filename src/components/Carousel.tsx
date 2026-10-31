import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Carousel() {
  const rail = useRef<HTMLDivElement>(null)
  const scroll = (d: number) => rail.current?.scrollBy({ left: d * 280, behavior: 'smooth' })
  const list = [...products].sort((a, b) => b.order - a.order)
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center"><h2 className="h2">Pieces You’ll Love</h2></div>
        <div className="mb-3 flex justify-end gap-2">
          <button className="icon-btn" aria-label="Previous" onClick={() => scroll(-1)}><ChevronLeft size={21} strokeWidth={1.3} /></button>
          <button className="icon-btn" aria-label="Next" onClick={() => scroll(1)}><ChevronRight size={21} strokeWidth={1.3} /></button>
        </div>
        <div ref={rail} tabIndex={0} aria-label="Bestsellers and new arrivals" className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {list.map((p) => <ProductCard key={p.id} product={p} variant="rail" />)}
        </div>
      </div>
    </section>
  )
}
