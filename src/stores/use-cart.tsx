import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/types/product'
import { toast } from '@/hooks/use-toast'

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast({
            title: 'El producto ya existe en el carrito ⛔.',
            variant: 'destructive'
          })
        }

        set((state) => ({ items: [...state.items, data] }))
        toast({ title: 'Producto agregado al carrito 🛒.' })
      },
      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }))
        toast({ title: 'Producto eliminado del carrito 🗑️.', variant: 'destructive' })
      },
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
