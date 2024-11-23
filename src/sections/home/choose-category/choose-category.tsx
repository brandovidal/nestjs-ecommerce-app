'use client'

import { useGetAllCategory } from '@/api/use-get-all-category'
import Image from 'next/image'
import Link from 'next/link'
import { FeaturedProductsSkeleton } from '../featured-products/featured-products-skeleton'

const ChooseCategory = () => {
  const { data, error, loading } = useGetAllCategory()
  console.log({ data, error, loading })

  return (
    <section className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="text-3xl px-6 pb-4 sm:pb-8">Elige tu categoria favorita</h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {loading && <FeaturedProductsSkeleton grid={3} />}
        {data !== null &&
          data.map(({ id, name, slug, image }) => (
            <Link key={id} href={`category/${slug}`} className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
              <Image src={image.url} alt={name} width={300} height={300} className="transition duration-300 ease-inout rounded-lg hover:scale-110" />
              <p className="absolute w-full">{name}</p>
            </Link>
          ))}
      </div>
    </section>
  )
}

export { ChooseCategory }
