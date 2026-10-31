import Reveal from './Reveal'

// Sample content only. Replace with real customer reviews when you have them.
const samples = [1, 2, 3].map((i) => ({
  id: i,
  text: 'Sample review text to show how this card will look once real customer feedback is added.',
  name: 'Sample name',
  product: 'Sample product',
}))

export default function Testimonials() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center"><h2 className="h2">Words From Our Customers</h2></div>
        <Reveal className="grid gap-6 md:grid-cols-3">
          {samples.map((s) => (
            <blockquote key={s.id} className="m-0 border border-line bg-white p-8">
              “{s.text}”
              <cite className="mt-4 block text-sm not-italic text-cognac">{s.name} — {s.product}</cite>
            </blockquote>
          ))}
        </Reveal>
        <p className="mt-6 text-center text-sm text-cognac">These are clearly marked sample testimonials, not real customer reviews.</p>
      </div>
    </section>
  )
}
