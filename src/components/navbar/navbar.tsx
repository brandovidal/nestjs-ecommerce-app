'use client'

import { BaggageClaim, Heart, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { MenuList } from '@/components/navbar/menu-list'
import { ItemsMenuMobile } from '@/components/navbar/items-menu-mobile'
import { ToggleTheme } from '@/components/theme/toogle-theme'

import { useCart } from '@/stores/use-cart'

const CART_EMPTY = 0

const NavBar = () => {
  const router = useRouter()

  const cartItems = useCart((state) => state.items)
  const cartItemsLength = cartItems.length

  const handleGoToHome = () => {
    router.push('/')
  }

  const handleGoToCart = () => {
    router.push('/cart')
  }
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
        {cartItemsLength === CART_EMPTY && <ShoppingCart className="cursor-pointer" strokeWidth={1} onClick={handleGoToCart} />}
        {cartItemsLength > CART_EMPTY && (
          <div className="flex gap-1" onClick={handleGoToCart}>
            <BaggageClaim className="cursor-pointer" strokeWidth={1} />
            <span>{cartItemsLength}</span>
          </div>
        )}
        <Heart className="cursor-pointer" strokeWidth={1} onClick={handleGoToFavorite} />
        <User className="cursor-pointer" strokeWidth={1} />
        <ToggleTheme />
      </section>
    </aside>
  )
}

export { NavBar }
