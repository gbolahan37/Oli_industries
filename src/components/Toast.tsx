import { useShop } from '../context/ShopContext'

export default function Toast() {
  const { toast } = useShop()
  return (
    <div role="status" className={`pointer-events-none fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 bg-charcoal px-5 py-3 text-sm text-ivory transition-all ${toast ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>{toast}</div>
  )
}
