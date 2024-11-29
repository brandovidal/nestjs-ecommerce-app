'use client'

import { CART_EMPTY } from '@/constants/cart'

import { Toaster } from '@/ui/toaster'
import { FavoriteItem } from './components/favorite-item'

import { useFavorite } from '@/stores/use-favorite'

export default function Page() {
  const favoriteItems = useFavorite((state) => state.favoriteItems)

  const favoriteItemsLength = favoriteItems.length
  const hasFavoriteItems = favoriteItemsLength > CART_EMPTY

  return (
    <>
      <section className="max-w-4xl py-4 sm:py-32 sm:px-24 mx-auto">
        <h1 className="sm:text-2xl font-semibold">Productos favoritos</h1>
        <div>
          <div>{!hasFavoriteItems && <p>No hay productos favoritos disponibles</p>}</div>
          <ul>
            {favoriteItems.map((item) => (
              <FavoriteItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
      </section>
      <Toaster />
    </>
  )
}
