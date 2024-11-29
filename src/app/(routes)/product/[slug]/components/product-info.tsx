'use client'

import { useCallback } from 'react'
import { Heart } from 'lucide-react'

import { formatPrice } from '@/lib/format-price'

import { Separator } from '@/ui/separator'
import { Button } from '@/ui/button'
import { Toaster } from '@/ui/toaster'

import { Product } from '@/types/product'
import { useCart } from '@/stores/use-cart'
import { useFavorite } from '@/stores/use-favorite'

interface ProductInfoProps {
  product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, taste, origin, description, price } = product

  const addItemCart = useCart((state) => state.addItemCart)
  const addItemFavorite = useFavorite((state) => state.addItemFavorite)

  const handleAddToCart = useCallback(
    (product: Product) => () => {
      addItemCart(product)
    },
    [addItemCart]
  )

  const handleAddToFavorite = useCallback(
    (product: Product) => () => {
      console.log("🚀 ~ ProductInfo ~ product:", product)
      addItemFavorite(product)
    },
    [addItemFavorite]
  )

  return (
    <>
      <section>
        <div className="justify-between sm:flex mb-3">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex items-center justify-start gap-3">
            <p className="px-2 py-1 text-gray-600 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-full w-fit text-sm">
              {taste}
            </p>
            <p className="px-2 py-1 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-full w-fit text-sm">{origin}</p>
          </div>
        </div>
        <Separator className="my-4" />
        <p>{description}</p>
        <Separator className="my-4" />
        <p className="my-4 text-2xl">{formatPrice(price)}</p>
        <div className="flex items-center gap-5">
          <Button className="w-full" onClick={handleAddToCart(product)}>
            Comprar
          </Button>
          <Heart
            className="transition duration-300 cursor-pointer hover:fill-black hover:dark:fill-white"
            width={30}
            strokeWidth={1}
            onClick={handleAddToFavorite(product)}
          />
        </div>
      </section>
      <Toaster />
    </>
  )
}

export { ProductInfo }
