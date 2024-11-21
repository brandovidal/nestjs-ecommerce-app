'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/carousel'

interface CarouselProps {
  title: string
  description: string
  link: string
}

const CAROUSEL: CarouselProps[] = [
  {
    id: 1,
    title: 'Envio en 24/48 h',
    description: 'Como cliente VIP, tus envios en 24/48 horas. Obten mas información en nuestras redes.',
    link: '#!'
  },
  {
    id: 2,
    Title: 'Consigue hasta un -25% en compras superiores a 40€',
    description: '-20 % al gastar 100 € o -25 % al gastar 150 €. Usa el código CYBER25.',
    link: '#'
  },
  {
    id: 3,
    title: 'Devoluciones y entregas gratuitas',
    description: 'Como cliente, tienes envios y devoluciones gratis en un plazo de 7 dias',
    link: '#'
  },
  {
    id: 4,
    title: 'Comprar novedades',
    description: 'Todas Las novedades al 50% de descuento.',
    link: '#'
  }
]

const CarouselBanner = () => {
  const router = useRouter()

  return (
    <section className="bg-gray-200 dark:bg-primary">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {CAROUSEL.map((carousel) => (
            <CarouselItem key={carousel.id} onClick={() => router.push(carousel.link)} className='cursor-pointer'>
              {carousel.title}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export { CarouselBanner }
