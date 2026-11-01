export type Kind = 'bag' | 'cross' | 'wallet' | 'belt' | 'card'

export interface Product {
  id: number
  name: string
  category: string
  price: number // naira
  colors: string[]
  kind: Kind // used for the drawn placeholder only
  order: number // higher = newer
  images?: string[] // e.g. ['/images/aria-front.jpg', '/images/aria-hover.jpg']
}

// EDIT PRODUCTS HERE. Add `images` to use real photos; the second one shows on hover.
export const products: Product[] = [
  { id: 1, name: 'Aria Tote', category: 'Handbags', price: 185000, colors: ['#986442', '#422719', '#24201D'], kind: 'bag', order: 9, images: ['images/cross-removebg-preview.png'] },
  { id: 2, name: 'Lena Crossbody', category: 'Crossbody', price: 128000, colors: ['#986442', '#422719'], kind: 'cross', order: 8, images: ['images/cross-removebg-preview.png'] },
  { id: 3, name: 'Noor Bifold Wallet', category: 'Wallets', price: 42000, colors: ['#422719', '#986442', '#24201D'], kind: 'wallet', order: 7, images: ['images/cross-removebg-preview.png'] },
  { id: 4, name: 'Heritage Belt', category: 'Belts', price: 36000, colors: ['#422719', '#986442'], kind: 'belt', order: 6, images: ['images/cross-removebg-preview.png'] },
  { id: 5, name: 'Slim Cardholder', category: 'Cardholders', price: 24000, colors: ['#986442', '#24201D'], kind: 'card', order: 5, images: ['images/cross-removebg-preview.png'] },
  { id: 6, name: 'Soleil Shoulder Bag', category: 'Handbags', price: 210000, colors: ['#986442', '#422719'], kind: 'bag', order: 4, images: ['images/cross-removebg-preview.png'] },
  { id: 7, name: 'Key Pouch', category: 'Accessories', price: 18000, colors: ['#422719', '#986442'], kind: 'card', order: 3, images: ['images/cross-removebg-preview.png'] },
  { id: 8, name: 'Mara Crossbody', category: 'Crossbody', price: 142000, colors: ['#24201D', '#986442'], kind: 'cross', order: 2, images: ['images/cross-removebg-preview.png'] },
  { id: 9, name: 'Long Zip Wallet', category: 'Wallets', price: 58000, colors: ['#986442', '#422719'], kind: 'wallet', order: 1, images: ['images/cross-removebg-preview.png'] },
]
