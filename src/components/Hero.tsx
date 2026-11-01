// import { ProductArt } from './ProductArt'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(ellipse_at_80%_20%,#E6D7C6,transparent_60%)]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-14 md:min-h-[min(86vh,760px)] md:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-5 grid h-[54px] w-[54px] place-items-center rounded-full border border-cognac font-serif text-2xl text-cognac" aria-hidden="true"></div>
          <p className="mb-3.5 text-[.72rem] tracking-[.24em] text-cognac">HANDMADE WITH PASSION. CRAFTED TO LAST.</p>
          <h1 className="text-[clamp(3.4rem,10vw,7.4rem)] uppercase tracking-[.02em]">We’ve evolved.</h1>
          <p className="script mt-2">A new chapter begins for us.</p>
          <p className="my-5 max-w-[470px]">Our leather handmade brand has officially rebranded, bringing you a fresh new identity, elevated designs, and new collections made with the same love and craftsmanship you’ve always known.</p>
          <div className="flex flex-wrap gap-3.5">
            <a className="btn" href="#shop">Explore the collection</a>
            <a className="btn btn-ghost" href="#story">Our story</a>
          </div>
        </div>
        <div className="relative aspect-square max-h-[640px] md:aspect-[4/5]" aria-hidden="true">
          <svg className="pointer-events-none absolute inset-0 opacity-[.14]" viewBox="0 0 200 250"><g fill="#422719"><path d="M100 250C96 180 90 120 60 40c40 30 52 100 40 210z" /><path d="M100 230c10-60 40-100 90-130-20 50-50 90-90 130z" /><path d="M100 200C60 170 20 150 0 100c40 10 80 50 100 100z" /></g></svg>
          {[
            ['right-[2%] top-[2%] w-[62%]', 'images/leather_bad-removebg-preview.png', 'Handmade leather handbag'],
            ['left-0 top-[44%] w-[42%]', 'images/leatherpurse-removebg-preview.png', 'Leather purse'],
            ['bottom-0 right-[6%] w-[46%]', 'images/cross-removebg-preview.png', 'Leather crossbody bag'],
          ].map(([pos, image, description]) => (
            <div
              key={pos}
              className={`absolute aspect-square overflow-hidden bg-beige shadow-[0_24px_40px_-18px_rgba(66,39,25,.45)] ${pos}`}
            >
              <img
                src={image}
                alt={description}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
