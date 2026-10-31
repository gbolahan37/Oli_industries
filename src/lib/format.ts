export const naira = (n: number) => '₦' + n.toLocaleString('en-NG')
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
