'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Card, CardContent } from '@/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface CarouselBannerProps {
  title: string
  description: string
  link: string
}

const CAROUSEL_BANNER: CarouselBannerProps[] = [
  {
    id: 1,
    title: 'Envio en 24/48 h',
    description: 'Como cliente VIP, tus envios en 24/48 horas. Obten mas información en nuestras redes.',
    link: '#'
  },
  {
    id: 2,
    title: 'Consigue hasta un -25% en compras superiores a 40€',
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
      <Carousel className="w-full max-w-4xl mx-auto" plugins={[Autoplay({ delay: 3000 })]}>
        <CarouselContent>
          {CAROUSEL_BANNER.map(({ id, title, description, link }) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center items-center text-center p-2">
                  <p className="sm:text-lg text-wrap text-gray-900 dark:text-red-50 font-semibold">{title}</p>
                  <p className="text-xs sm:text-sm text-wrap text-gray-900 dark:text-red-50 font-medium">{description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export { CarouselBanner }
