import { Clock, Gem, Hand, Heart } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  { Icon: Gem, title: 'Premium Leather', text: 'Carefully selected materials for quality and durability.' },
  { Icon: Hand, title: 'Handmade With Care', text: 'Thoughtfully crafted with attention to every detail.' },
  { Icon: Clock, title: 'Timeless Design', text: 'Classic silhouettes designed to transcend trends.' },
  { Icon: Heart, title: 'Made To Be Treasured', text: 'Exceptional pieces created to accompany you for years.' },
]

export default function Craftsmanship() {
  return (
    <section id="craft" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center"><h2 className="h2">Our Craftsmanship</h2></div>
        <Reveal className="grid grid-cols-2 gap-y-9 text-center md:grid-cols-4 md:gap-y-0">
          {items.map(({ Icon, title, text }, i) => (
            <div key={title} className={`px-7 py-2.5 ${i % 2 === 1 ? 'border-l border-line' : ''} ${i > 0 ? 'md:border-l md:border-line' : ''}`}>
              <Icon size={38} strokeWidth={1.1} className="mx-auto mb-3.5 text-cognac" />
              <h3 className="mb-2 text-xl uppercase tracking-[.1em]">{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
