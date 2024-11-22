export interface ProductImage {
  id: number
  documentId: string
  name: string
  url: string
  createdAt: string
  updatedAt: string
}
export interface ProductCategory {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: number
  documentId: string
  name: string
  slug: string
  description: string
  active: boolean
  price: number
  origin: string
  taste: string
  isFeatured: null
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  images: ProductImage[]
  category: ProductCategory
}
