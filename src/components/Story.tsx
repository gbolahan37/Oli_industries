import { site } from '../data/site'
import Reveal from './Reveal'

export default function Story() {
  return (
    <section id="story" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-9 px-6 md:grid-cols-2 md:gap-[72px]">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#c9a88a] via-cognac to-choc">
            {site.images.story ? (
              <img src={site.images.story} alt="A craftsperson working with leather" className="h-full w-full object-cover" />
            ) : (
              <div role="img" aria-label="Placeholder for a workshop photograph" className="grid h-full place-items-end p-6 text-[.7rem] tracking-[.25em] text-ivory/80">PLACEHOLDER — WORKSHOP PHOTO</div>
            )}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="h2">Crafted by hand. Made to last.</h2>
          <p className="mt-6 max-w-[52ch]">Every piece tells a story of patience, precision, and passion. From selecting premium leather to the final stitch, our commitment to craftsmanship remains at the heart of everything we create.</p>
          <p className="max-w-[52ch]">Our new identity represents more than a change in appearance. It reflects our growth, our vision, and our dedication to creating leather goods that become part of your story.</p>
          <a className="btn mt-3" href="#craft">Discover our story</a>
        </Reveal>
      </div>
    </section>
  )
}
