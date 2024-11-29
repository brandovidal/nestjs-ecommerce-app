'use client'

import { CART_EMPTY } from '@/constants/cart'

import { Button } from '@/ui/button'
import { Separator } from '@/ui/separator'
import { Toaster } from '@/ui/toaster'

import { formatPrice } from '@/lib/format-price'
import { useCart } from '@/stores/use-cart'

import { CartItems } from './components/cart-items'

export default function Page() {
  const cartItems = useCart((state) => state.cartItems)

  const cartItemsLength = cartItems.length
  const hasCartItems = cartItemsLength > CART_EMPTY

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  const handleBuyNow = () => {
    console.log('Comprar ahora')
  }

  return (
    <>
      <section className="max-x-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-5">Carrito</h1>
        <div className="grid sm:grid-cols-2 sm:gap-5">
          <div>
            {!hasCartItems && <p>No hay productos en el carrito</p>}
            <ul>
              {cartItems.map((item) => (
                <CartItems key={item.id} product={item} />
              ))}
            </ul>
          </div>
          <div className="max-w-xl">
            <div className="p-6 rounded-lg bg-slate-100 dark:bg-slate-900">
              <p className="mb-3 text-lg font-semibold">Resumen</p>
              <Separator />
              <div className="flex justify-between gap-5 my-4">
                <p>Orden total</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex items-center justify-center w-full mt-3">
                <Button className="w-full" onClick={handleBuyNow}>
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
