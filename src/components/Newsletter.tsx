import { useState, type FormEvent } from 'react'
import { isEmail } from '../lib/format'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!isEmail(email.trim())) return setMsg('Enter a valid email address, like name@example.com.')
    // TODO: POST to your backend / email service (e.g. Mailchimp, Brevo) here.
    setMsg('Demo mode: no subscription service is connected yet, so this address was not saved.')
  }
  return (
    <section className="bg-beige py-16 text-center md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="h2">A Little Luxury In Your Inbox</h2>
        <p className="mt-3.5">Be the first to discover new collections, exclusive releases, and stories from our workshop.</p>
        <form onSubmit={submit} noValidate className="mt-6 flex flex-wrap justify-center gap-2">
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" autoComplete="email" required className="field w-full max-w-[360px]" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn" type="submit">Subscribe</button>
        </form>
        <div role="status" className="mt-3 min-h-[1.6em] text-sm">{msg}</div>
      </div>
    </section>
  )
}
