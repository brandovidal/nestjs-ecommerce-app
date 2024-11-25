'use client'

import { useEffect, useState } from 'react'

import { query } from '@/lib/strapi'

import { Product } from '@/types/product'
import { ProductSchema } from '@/types/product-schema'

export function useGetAllProductField() {
  const [data, setData] = useState<Product[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const { data: types, error } = await query<ProductSchema>(`content-type-builder/content-types/api::product.product`)

      if (error) {
        setLoading(false)
        setError(error.message ?? 'Unknown error')
        return
      }

      if (types === null) return setData([])

      const data = types.schema.attributes.origin.enum

      setData(data)
      setLoading(false)
    }
    fetchQuery()
  }, [])

  return { data, loading, error }
}
