'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Expand, ShoppingCart } from 'lucide-react'

import { useGetFeaturedProducts } from '@/api/use-get-featured-products'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/carousel'
import { Card, CardContent } from '@/ui/card'

import { FeaturedProductsSkeleton } from './featured-products-skeleton'
import { IconButton } from '../../../components/icon-button/icon-button'

const FeaturedProducts = () => {
  const router = useRouter()

  const { data, error, loading } = useGetFeaturedProducts()

  return (
    <section className="max-w-5xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4 flex gap-4">
          {loading && <FeaturedProductsSkeleton grid={3} />}
          {data !== null &&
            data.map(({ id, name, slug, origin, taste, images }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                <section className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <Image src={images[0].url} alt={name} width={300} height={300} className="object-cover aspect-square" onClick={(e) => e.stopPropagation()} />
                      <div className="absolute w-full px-6 transition duration-300 opacity-0 group-hover:opacity-100">
                        <div className="flex items-center justify-center gap-2">
                          <IconButton icon={<Expand />} onClick={() => router.push(`product/${slug}`)} size={20} clasName="text-gray-600 dark:text-gray-400" />
                          <IconButton icon={<ShoppingCart />} onClick={() => router.push(`cart`)} size={20} clasName="text-gray-600 dark:text-gray-400" />
                        </div>
                      </div>
                    </CardContent>
                    <section className="flex justify-between gap-4 px-8">
                      <h3 className="text-lg font-bold">{name}</h3>
                      <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white dark:text-black bg-black dark:bg-white rounded-full w-fit text-sm">{taste}</p>
                        <p className="px-2 py-1 text-white bg-primary rounded-full w-fit text-sm">{origin}</p>
                      </div>
                    </section>
                  </Card>
                </section>
              </CarouselItem>
            ))}
          {error && <p>Ocurrio un error al cargar los productos.</p>}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export { FeaturedProducts }
