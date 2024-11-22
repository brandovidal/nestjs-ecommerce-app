'use client'

import { useEffect, useState } from 'react'

import { query } from '@/lib/strapi'
import { Product, ProductImage } from '@/types/product'

const STRAPI_URL = process.env['NEXT_PUBLIC_STRAPI_URL']

export function useGetFeaturedProducts() {
  const [data, setData] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const { data: products = [], error } = await query<Product[]>(
        'products?filters[isFeatured][$eq]=true&populate[images][fields][0]=name&populate[images][fields][1]=url&populate[category][fields][0]=name'
      )

      if (error) {
        setLoading(false)
        setError(error.message ?? 'Unknown error')
        return
      }

      const isNotArray = !Array.isArray(products)
      if (isNotArray || products.length === 0) return setData([])

      const data = products.map((product) => {
        const { images: rawImages } = product
        const images: ProductImage[] = rawImages.map((image) => ({ ...image, url: `${STRAPI_URL}${image.url}` }))

        return { ...product, images }
      })

      setData(data)
      setLoading(false)
    }
    fetchQuery()
  }, [])

  return { data, loading, error }
}
