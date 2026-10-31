import { site } from '../data/site'
import Reveal from './Reveal'

export default function Campaign() {
  const bg = site.images.campaign
    ? `linear-gradient(rgba(36,32,29,.45),rgba(36,32,29,.45)), url(${site.images.campaign}) center/cover`
    : 'radial-gradient(ellipse at 30% 30%, #7a4a2e, #422719 70%)'
  return (
    <section className="relative overflow-hidden py-28 text-center text-ivory md:py-40" style={{ background: bg }}>
      <div className="relative mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="h2 !text-[clamp(2.2rem,6vw,4.6rem)] !text-ivory">This isn’t just a rebrand.</h2>
          <span className="script my-3 mb-8 block !text-[clamp(2.6rem,6vw,4.4rem)] !text-beige">It’s an upgrade.</span>
          <a className="btn btn-light" href="#shop">Shop the new era</a>
        </Reveal>
      </div>
    </section>
  )
}
