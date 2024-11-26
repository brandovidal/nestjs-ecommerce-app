'use client'

import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'

import { Separator } from '@/ui/separator'

import { useGetAllProductByCategory } from '@/api/use-get-all-product-by-category'

import { FiltersControlsCategory } from './components/filters/filters-controls-category'
import { ProductCart } from './components/product-cart/product-cart'
import { ProductsCartSkeleton } from './components/product-cart/product-cart-skeleton'

export default function Page() {
  const { slug } = useParams<{ slug: string }>()

  const { data, loading } = useGetAllProductByCategory(slug)

  const [filteredOrigin, setFilteredOrigin] = useState('')

  const filteredData = useMemo(() => {
    if (data === null) return []

    if (filteredOrigin === '') return data

    return data.filter((product) => product.origin === filteredOrigin)
  }, [data, filteredOrigin])

  return (
    <section className="max-w-6xl p-4 mx-auto sm:py-16 sm:px-24">
      {loading && <p>Cargando...</p>}
      {data.length > 0 && <h1 className="text-3xl font-medium">Cafe {data[0]?.category.name}</h1>}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory handleOrigin={setFilteredOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10 w-full place-content-center">
          {loading && <ProductsCartSkeleton grid={3} />}
          {filteredData !== null && filteredData.map((product) => <ProductCart key={product.id} product={product} />)}
          {filteredData !== null && filteredData.length === 0 && (
            <p className="sm:col-span-2 md:col-span-3 text-center">No hay productos disponibles.</p>
          )}
        </div>
      </div>
    </section>
  )
}
