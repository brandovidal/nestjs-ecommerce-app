'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Expand, ShoppingCart } from 'lucide-react'

import { useGetFeaturedProducts } from '@/api/use-get-featured-products'

import { Carousel, CarouselContent, CarouselItem } from '@/ui/carousel'
import { Card, CardContent } from '@/ui/card'

import { FeaturedProductsSkeleton } from './featured-products-skeleton'
import { IconButton } from '../icon-button/icon-button'

const FeaturedProducts = () => {
  const router = useRouter()

  const { data, error, loading } = useGetFeaturedProducts()
  console.info({ data, error, loading })

  return (
    <section className="max-w-5xl py-4 max-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4 flex gap-4">
          {loading && <FeaturedProductsSkeleton grid={3} />}
          {data !== null &&
            data.map(({ id, name, slug, images }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                <article className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <Image src={images[0].url} alt={name} width={300} height={300} className="object-cover aspect-square" />
                      <div className="absolute w-full px-6 transition duration-300 opacity-0 group-hover:opacity-100">
                        <div className="flex items-center justify-center gap-2">
                          <IconButton icon={<Expand />} onClick={() => router.push(`product/${slug}`)} size={20} clasName="text-gray-600" />
                          <IconButton icon={<ShoppingCart />} onClick={() => router.push(`cart`)} clasName="text-gray-600" size={20} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              </CarouselItem>
            ))}
          {error && <p>Vuelva a cargar la pagina</p>}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { FeaturedProducts }
