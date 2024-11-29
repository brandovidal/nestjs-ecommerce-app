import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/types/product'
import { toast } from '@/hooks/use-toast'

interface FavoriteStore {
  favoriteItems: Product[]
  addItemFavorite: (data: Product) => void
  removeItemFavorite: (id: number) => void
  clearFavorite: () => void
}

export const useFavorite = create(
  persist<FavoriteStore>(
    (set, get) => ({
      favoriteItems: [],
      addItemFavorite: (data: Product) => {
        const currentItems = get().favoriteItems
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast({
            title: 'El producto favorito ya existe en el carrito 🚫.',
            variant: 'destructive'
          })
        }

        set((state) => ({ favoriteItems: [...state.favoriteItems, data] }))
        toast({ title: 'Producto favorito agregado al carrito ❣️.' })
      },
      removeItemFavorite: (id) => {
        set((state) => ({ favoriteItems: state.favoriteItems.filter((item) => item.id !== id) }))
        toast({ title: 'Producto favorito eliminado del carrito 🗑️.', variant: 'destructive' })
      },
      clearFavorite: () => set({ favoriteItems: [] })
    }),
    {
      name: 'favorite-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
