import NextImage from 'next/image'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/carousel'

import { Image } from '@/types/image'

interface ProductCarouselProps {
  images: Image[]
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  return (
    <section className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map(({ id, name, url }) => (
            <CarouselItem key={id} className="flex justify-center items-center group">
              <NextImage
                src={url}
                alt={name}
                width={250}
                height={350}
                className="rounded-lg object-cover aspect-auto group-hover:scale-110 transition duration-300 ease-in-out"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export { ProductCarousel }
