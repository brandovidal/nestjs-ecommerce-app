'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { X } from 'lucide-react'

import { Button } from '@/ui/button'
import { ProductCharacteristics } from '@/components/product-characteristics/product-characteristics'

import { Product } from '@/types/product'

import { formatPrice } from '@/lib/format-price'

import { useCart } from '@/stores/use-cart'

interface CartItemsProps {
  product: Product
}

const CartItem = ({ product }: CartItemsProps) => {
  const { id, name, slug, origin, taste, images, price } = product

  const router = useRouter()

  const removeItemCart = useCart((state) => state.removeItemCart)

  const handleGoToProduct = useCallback(
    (slug: string) => () => {
      router.push(`product/${slug}`)
    },
    [router]
  )

  const handleRemoveItem = useCallback(
    (id: number) => () => {
      removeItemCart(id)
    },
    [removeItemCart]
  )

  return (
    <li className="flex py-6 border-b">
      <div className="cursor-pointer" onClick={handleGoToProduct(slug)}>
        <Image
          src={images[0].url}
          alt={name}
          width={250}
          height={250}
          className="w-24 h-24 object-cover aspect-square group-hover:rotate-6 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-1 justify-center sm:justify-between px-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg-font-bold">{name}</h4>
          <p className="font-bold">{formatPrice(price)}</p>
          <ProductCharacteristics taste={taste} origin={origin} />
        </div>
        <div>
          <Button
            variant="secondary"
            className="rounded-full flex items-center justify-center shadow-md p-3 hover:scale-110 transition duration-300 ease-in-out"
            onClick={handleRemoveItem(id)}
          >
            <X size={20} />
          </Button>
        </div>
      </div>
    </li>
  )
}

export { CartItem }
