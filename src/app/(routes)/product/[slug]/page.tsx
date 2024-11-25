'use client'

import { useGetAllProductBySlug } from '@/api/use-get-all-product-by-slug'
import { useParams } from 'next/navigation'
import { ProductSkeleton } from './components/product-skeleton'

export default function Page() {
  const { slug } = useParams<{ slug: string }>()
  console.log(slug)

  const { data, loading } = useGetAllProductBySlug(slug)
  console.log(data)

  if (loading) {
    return <ProductSkeleton />
  }

  return (
    <section className="max-x-6xl mx-auto py-4 sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>Carousel</div>
        <div className='sm:px-12'>Info</div>
      </div>
    </section>
  )
}
