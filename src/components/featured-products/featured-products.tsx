'use client'

import { useGetFeaturedProducts } from '@/api/use-get-featured-products'

const FeaturedProducts = () => {
  const { data, error, loading } = useGetFeaturedProducts()
  console.log({ data, error, loading })

  return (
    <section className="max-w-5xl py-4 max-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
    </section>
  )
}

export { FeaturedProducts }
