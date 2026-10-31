import type { Kind, Product } from '../data/products'

const stroke = { stroke: '#F8F2E9', strokeOpacity: 0.5, strokeWidth: 2, fill: 'none' }

// Drawn placeholder shown until a product has real photos.
export function ProductArt({ kind, color }: { kind: Kind; color: string }) {
  const shapes: Record<Kind, JSX.Element> = {
    bag: (<><path d="M110 150h180l22 190H88z" fill={color} /><path d="M150 150c0-60 100-60 100 0" stroke={color} strokeWidth={9} fill="none" /><path d="M100 190h200" {...stroke} /></>),
    cross: (<><path d="M90 120c40-50 180-50 220 0" stroke={color} strokeWidth={8} fill="none" /><rect x="100" y="150" width="200" height="150" rx="14" fill={color} /><path d="M100 200q100 40 200 0" {...stroke} /></>),
    wallet: (<><rect x="80" y="130" width="240" height="160" rx="10" fill={color} /><path d="M80 190h240M270 200v40" {...stroke} /></>),
    belt: (<><rect x="40" y="170" width="320" height="60" fill={color} /><rect x="250" y="160" width="46" height="80" fill="none" stroke="#E6D7C6" strokeWidth={5} /><path d="M60 200h170" {...stroke} strokeDasharray="6 6" /></>),
    card: (<><rect x="110" y="120" width="180" height="150" rx="8" fill={color} /><path d="M110 170h180" {...stroke} /><rect x="130" y="100" width="140" height="40" rx="5" fill="#F8F2E9" opacity={0.6} /></>),
  }
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Placeholder product image" className="block h-full w-full">
      <rect width="400" height="400" fill="#E6D7C6" />
      <ellipse cx="200" cy="350" rx="120" ry="12" fill="#422719" opacity=".12" />
      {shapes[kind]}
    </svg>
  )
}

// Shows a real photo when the product has one, otherwise the drawn placeholder.
export function ProductImage({ product, index = 0, className = '' }: { product: Product; index?: number; className?: string }) {
  const src = product.images?.[index] ?? product.images?.[0]
  return src ? (
    <img src={src} alt={product.name} loading="lazy" className={`block h-full w-full object-cover ${className}`} />
  ) : (
    <div className={`h-full w-full ${className}`}><ProductArt kind={product.kind} color={product.colors[index] ?? product.colors[0]} /></div>
  )
}
