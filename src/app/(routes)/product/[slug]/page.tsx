'use client'

import { useGetAllProductBySlug } from '@/api/use-get-all-product-by-slug'
import { useParams } from 'next/navigation'

export default function Page() {
  const { slug } = useParams<{ slug: string }>()
  console.log(slug)

  const { data } = useGetAllProductBySlug(slug)
  console.log(data)

  return <>Product</>
}
