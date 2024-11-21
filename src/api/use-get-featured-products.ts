'use client'

import { useEffect, useState } from 'react'

import { query } from '@/lib/strapi'

interface ProductImage {
  name: string
  url: string
}

interface Product {
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
}

export function useGetFeaturedProducts() {
  const [data, setData] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const { data, error } = await query<Product[]>('products?populate[images][fields][0]=name&populate[images][fields][1]=urls')
      if (error) {
        setLoading(false)
        setError(error.message ?? 'Unknown error')
        return
      }

      setData(data)
      setLoading(false)
    }
    fetchQuery()
  }, [])

  return { data, loading, error }
}
