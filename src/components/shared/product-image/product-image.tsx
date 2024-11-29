import Image from 'next/image'

interface Props {
  image: Image
  name: string
  handleImageClick?: (slug: string) => void
}

const NO_OP = () => {}

const ProductImage = ({ image, name, handleImageClick = NO_OP }: Props) => {
  return (
    <div className="group overflow-hidden cursor-pointer" onClick={handleImageClick}>
      <Image
        src={image.url}
        alt={name}
        width={250}
        height={250}
        className="rounded-lg object-cover aspect-auto group-hover:scale-110 transition duration-300 ease-in-out"
      />
    </div>
  )
}

export { ProductImage }
