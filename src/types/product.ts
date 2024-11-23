import { Category } from './category'
import { Image } from './image'

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
  images: Image[]
  category: Category
}
