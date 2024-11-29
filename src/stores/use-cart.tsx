import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/types/product'
import { toast } from '@/hooks/use-toast'

interface CartStore {
  cartItems: Product[]
  addItemCart: (data: Product) => void
  removeItemCart: (id: number) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      addItemCart: (data: Product) => {
        const currentItems = get().cartItems
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast({
            title: 'El producto ya existe en el carrito ⛔.',
            variant: 'destructive'
          })
        }

        set((state) => ({ cartItems: [...state.cartItems, data] }))
        toast({ title: 'Producto agregado al carrito 🛒.' })
      },
      removeItemCart: (id) => {
        set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) }))
        toast({ title: 'Producto eliminado del carrito 🗑️.', variant: 'destructive' })
      },
      clearCart: () => set({ cartItems: [] })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
