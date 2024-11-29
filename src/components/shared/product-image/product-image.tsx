import { useCallback } from 'react'

import ImageNext from 'next/image'
import { useRouter } from 'next/navigation'

import { Image } from '@/types/image'

interface Props {
  image: Image
  name: string
  slug?: string
}

const ProductImage = ({ image, name, slug }: Props) => {
  const router = useRouter()

  const handleGoToProduct = useCallback(
    (slug?: string) => () => {
      if (!slug) return

      router.push(`product/${slug}`)
    },
    [router]
  )

  return (
    <div className="group overflow-hidden cursor-pointer" onClick={handleGoToProduct(slug)}>
      <ImageNext
        src={image.url}
        alt={name}
        width={300}
        height={300}
        className="w-32 h-40 lg:w-48 lg:h-56 rounded-lg object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
        priority
      />
    </div>
  )
}

export { ProductImage }
