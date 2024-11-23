'use client'

import { useEffect, useState } from 'react'

import { query } from '@/lib/strapi'
import { Category } from '@/types/category'

const STRAPI_URL = process.env['NEXT_PUBLIC_STRAPI_URL']

export function useGetAllCategory() {
  const [data, setData] = useState<Category[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const { data: categories = [], error } = await query<Category[]>('categories?populate[image][fields][0]=name&populate[image][fields][1]=url')

      if (error) {
        setLoading(false)
        setError(error.message ?? 'Unknown error')
        return
      }

      const isNotArray = !Array.isArray(categories)
      if (isNotArray || categories.length === 0) return setData([])

      const data = categories.map((item) => {
        const { image: rawImage } = item
        const image: Image = { ...rawImage, url: `${STRAPI_URL}${rawImage.url}` }

        return { ...item, image }
      })
      console.log("🚀 ~ data ~ data:", data)

      setData(data)
      setLoading(false)
    }
    fetchQuery()
  }, [])

  return { data, loading, error }
}
