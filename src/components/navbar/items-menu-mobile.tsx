import Link from 'next/link'

import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { Menu } from 'lucide-react'

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/category/grano" className="block">
          Cafe en grano
        </Link>
        <Link href="/category/molido" className="block">
          Cafe molido
        </Link>
        <Link href="/category/capsula" className="block">
          Cafe en capsula
        </Link>
      </PopoverContent>
    </Popover>
  )
}

export { ItemsMenuMobile }
