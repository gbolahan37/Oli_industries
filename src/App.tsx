import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Story from './components/Story'
import Craftsmanship from './components/Craftsmanship'
import Carousel from './components/Carousel'
import Campaign from './components/Campaign'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QuickView from './components/QuickView'
import Toast from './components/Toast'
import { useShop } from './context/ShopContext'

export default function App() {
  const { setCartOpen, setQuickViewId } = useShop()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setCartOpen(false); setQuickViewId(null) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setCartOpen, setQuickViewId])

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Shop />
        <Story />
        <Craftsmanship />
        <Carousel />
        <Campaign />
        <Testimonials />
        <Instagram />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <QuickView />
      <Toast />
    </>
  )
}
