import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { products } from '../data/products'

interface Line { id: number; qty: number }

interface ShopCtx {
  cart: Line[]
  count: number
  total: number
  wishlist: number[]
  cartOpen: boolean
  quickViewId: number | null
  toast: string
  add: (id: number) => void
  setQty: (id: number, qty: number) => void
  toggleWish: (id: number) => void
  setCartOpen: (open: boolean) => void
  setQuickViewId: (id: number | null) => void
  notify: (message: string) => void
}

const Ctx = createContext<ShopCtx | null>(null)

function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return v ? (JSON.parse(v) as T) : fallback
  } catch {
    return fallback
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Line[]>(() => load('cart', []))
  const [wishlist, setWishlist] = useState<number[]>(() => load('wishlist', []))
  const [cartOpen, setCartOpen] = useState(false)
  const [quickViewId, setQuickViewId] = useState<number | null>(null)
  const [toast, setToast] = useState('')
  const timer = useRef<number>()

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    } catch { /* storage unavailable */ }
  }, [cart, wishlist])

  const notify = useCallback((message: string) => {
    setToast(message)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToast(''), 2600)
  }, [])

  const add = (id: number) => {
    setCart((c) => (c.some((l) => l.id === id) ? c.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...c, { id, qty: 1 }]))
    notify(`${products.find((p) => p.id === id)?.name} added to your bag`)
  }
  const setQty = (id: number, qty: number) =>
    setCart((c) => (qty <= 0 ? c.filter((l) => l.id !== id) : c.map((l) => (l.id === id ? { ...l, qty } : l))))
  const toggleWish = (id: number) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))

  const count = cart.reduce((a, l) => a + l.qty, 0)
  const total = cart.reduce((a, l) => a + l.qty * (products.find((p) => p.id === l.id)?.price ?? 0), 0)

  return (
    <Ctx.Provider value={{ cart, count, total, wishlist, cartOpen, quickViewId, toast, add, setQty, toggleWish, setCartOpen, setQuickViewId, notify }}>
      {children}
    </Ctx.Provider>
  )
}

export function useShop() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useShop must be used inside <ShopProvider>')
  return c
}
