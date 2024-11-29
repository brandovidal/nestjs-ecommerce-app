'use client'

import { useParams } from 'next/navigation'

import { useGetAllProductBySlug } from '@/api/use-get-all-product-by-slug'

import { ProductSkeleton } from './components/product-skeleton'
import { ProductCarousel } from './components/product-carousel'
import { ProductInfo } from './components/product-info'

export default function Page() {
  const { slug } = useParams<{ slug: string }>()

  const { data, loading } = useGetAllProductBySlug(slug)

  if (loading) {
    return <ProductSkeleton />
  }

  return (
    <section className="max-w-6xl mx-auto py-4 sm:py-32 sm:px-24">
      <div className="grid md:grid-cols-2">
        <div>
          <ProductCarousel images={data.images} />
        </div>
        <div className="px-4 sm:px-8 lg:px-12">
          <ProductInfo product={data} />
        </div>
      </div>
    </section>
  )
}
