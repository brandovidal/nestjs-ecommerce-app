interface Props {
  taste: string
  origin: string
}

const ProductCharacteristics = ({ taste, origin }: Props) => {
  return (
    <div className="flex justify-stretch items-center gap-3">
      <p className="px-2 py-1 text-gray-600 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-full w-fit text-sm">{taste}</p>
      <p className="px-2 py-1 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-full w-fit text-sm">{origin}</p>
    </div>
  )
}

export { ProductCharacteristics }
