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
  { id: 1, name: 'Aria Tote', category: 'Crossbag', price: 185000, colors: ['#986442', '#422719', '#24201D'], kind: 'bag', order: 9, images: ['images/cross-removebg-preview.png'] },
  { id: 2, name: 'Aria Crossbody', category: 'Crossbag', price: 185000, colors: ['#986442', '#422719', '#24201D'], kind: 'cross', order: 8, images: ['images/893823857304150740.jpg'] },
  { id: 3, name: 'Aria Wallet', category: 'Wallet', price: 85000, colors: ['#986442', '#422719', '#24201D'], kind: 'wallet', order: 7, images: ['images/gorchis New Fashion Clutch Bag With Password Lock And Multiple Pockets, Handheld Bag For Phone And Accessories, Suitable For Business And Casual Occasions For Travel Fall Stuff Anti-Theft Portable….jpg'] },
  { id: 4, name: 'Aria Belt', category: 'suitcase', price: 65000, colors: ['#986442', '#422719', '#24201D'], kind: 'belt', order: 6, images: ['images/1093037772060905485.jpg'] },
]