'use client'

import { useEffect, useState } from 'react'

import { query } from '@/lib/strapi'

import { Product } from '@/types/product'
import { Image } from '@/types/image'

const STRAPI_URL = process.env['NEXT_PUBLIC_STRAPI_URL']

export function useGetAllProductCategory(name: string) {
  const [data, setData] = useState<Product[] | []>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const { data: products = [], error } = await query<Product[]>(`products?populate[category][fields][0]=slug&populate[category][fields][1]=name&filters[category][slug][$eq]=${name}&populate[images][fields][0]=name&populate[images][fields][1]=url`)

      if (error) {
        setLoading(false)
        setError(error.message ?? 'Unknown error')
        return
      }

      const isNotArray = !Array.isArray(products)
      if (isNotArray || products.length === 0) return setData([])

      const data = products.map((item) => {
        const { images: rawImages } = item
        const images: Image[] = rawImages.map((image) => ({ ...image, url: `${STRAPI_URL}${image.url}` }))

        return { ...item, images }
      })

      setData(data)
      setLoading(false)
    }
    fetchQuery()
  }, [name])

  return { data, loading, error }
}
