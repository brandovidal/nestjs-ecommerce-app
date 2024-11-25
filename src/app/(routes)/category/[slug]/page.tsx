'use client'

import { useParams } from 'next/navigation'

import { Separator } from '@/ui/separator'

import { useGetAllProductCategory } from '@/api/use-get-all-product-category'

import { FiltersControlsCategory } from '@/sections/category/filters/filters-controls-category'
import { ProductsFeaturedSkeleton } from '@/sections/home/products-featured/products-featured-skeleton'
import { ProductCart } from '@/sections/category/filters/product-cart'

function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()

  const { data, loading } = useGetAllProductCategory(slug)

  return (
    <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {loading && <p>Cargando...</p>}
      {data && <h1 className="text-3xl font-medium">Cafe {data[0].category.name}</h1>}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">{loading && <ProductsFeaturedSkeleton grid={3} />}</div>
        {data && data.map((product) => <ProductCart key={product.id} data={product} />)}
      </div>
    </section>
  )
}

export default CategoryPage
