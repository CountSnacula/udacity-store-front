export interface Product {
  id: number,
  name: string,
  price: number,
  url: string,
  description: string
}

export interface ProductCartEntry {
  product: Product,
  quantity: number,
}
