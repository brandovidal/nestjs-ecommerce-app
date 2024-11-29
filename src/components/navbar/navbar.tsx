'use client'

import { useCallback } from 'react'
import { BaggageClaim, Heart, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { MenuList } from '@/components/navbar/menu-list'
import { ItemsMenuMobile } from '@/components/navbar/items-menu-mobile'
import { ToggleTheme } from '@/components/theme/toogle-theme'

import { CART_EMPTY } from '@/constants/cart'

import { cn } from '@/lib/utils'

import { useCart } from '@/stores/use-cart'
import { useFavorite } from '@/stores/use-favorite'

const NavBar = () => {
  const router = useRouter()

  const cartItems = useCart((state) => state.cartItems)
  const favoriteItems = useFavorite((state) => state.favoriteItems)

  const cartItemsLength = cartItems.length
  const hasCartItems = cartItemsLength > CART_EMPTY

  const hasFavoriteItems = favoriteItems.length > CART_EMPTY

  const handleGoToHome = useCallback(() => {
    router.push('/')
  }, [router])

  const handleGoToCart = useCallback(() => {
    router.push('/cart')
  }, [router])

  const handleGoToFavorite = () => {
    router.push('/favorite')
  }

  return (
    <aside className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={handleGoToHome}>
        Dracon <span className="font-bold">Shop</span>
      </h1>
      <section className="items-center justify-between hidden sm:flex">
        <MenuList />
      </section>
      <nav className="flex sm:hidden">
        <ItemsMenuMobile />
      </nav>
      <section className="flex items-center justify-between gap-2 sm:gap-7">
        {!hasCartItems && <ShoppingCart className="cursor-pointer" strokeWidth={1} onClick={handleGoToCart} />}
        {hasCartItems && (
          <div className="flex gap-1" onClick={handleGoToCart}>
            <BaggageClaim className="cursor-pointer" strokeWidth={1} />
            <span>{cartItemsLength}</span>
          </div>
        )}
        <Heart className={cn('cursor-pointer', hasFavoriteItems && 'fill-black dark:fill-white')} strokeWidth={1} onClick={handleGoToFavorite} />
        <User className="cursor-pointer" strokeWidth={1} />
        <ToggleTheme />
      </section>
    </aside>
  )
}

export { NavBar }
