import { Image } from './image'

export interface Category {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  image: Image
}
