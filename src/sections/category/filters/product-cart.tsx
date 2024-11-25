import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Expand, ShoppingCart } from 'lucide-react'

import { Carousel, CarouselItem } from '@/ui/carousel'

import { IconButton } from '@/components/icon-button/icon-button'

import { Product } from '@/types/product'

import { formatPrice } from '@/lib/format-price'

interface ProductCartProps {
  data: Product
}

const ProductCart = ({ data }: ProductCartProps) => {
  const router = useRouter()

  return (
    <Link href={`product/${data.slug}`} className="relative p-2 transition-all duration-300 hover:shadow-md">
      <div className="absolute flex items-center justify-center gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white dark:text-black bg-black dark:bg-white  rounded-full w-fit">{data.taste}</p>
        <p className="px-2 py-1 text-xs text-white bg-red-500 rounded-full w-fit">{data.origin}</p>
      </div>

      <Carousel opts={{ align: 'start' }} className="w-full max-x-sm">
        {data.images.map((image) => (
          <CarouselItem key={image.id} className="group">
            <Image src={image.url} width={300} height={300} alt={data.name} className="rounded-lg object-cover aspect-square" />
            <div className="absolute w-full px-4 transition duration-300 opacity-0 group-hover:opacity-100 bottom-5">
              <div className="flex justify-center gap-x-6">
                <IconButton icon={<Expand size={20} className="text-gray-600" />} onClick={() => router.push(`/product/${data.slug}`)} />
                <IconButton icon={<ShoppingCart size={20} className="text-gray-600" />} onClick={() => console.log('product')} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
      <p className="text-2xl text-center">{data.name}</p>
      <p className="font-bold text-center">{formatPrice(data.price)}</p>
    </Link>
  )
}

export { ProductCart }