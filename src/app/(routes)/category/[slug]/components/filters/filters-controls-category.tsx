import { FilterOrigin } from './filter-origin'

interface FiltersControlsCategoryProps {
  handleOrigin: (origin: string) => void
}

const FiltersControlsCategory = ({ handleOrigin }: FiltersControlsCategoryProps) => {
  return (
    <div className="sm:w-[250px] sm:mt-5 py-6">
      <FilterOrigin handleOrigin={handleOrigin} />
    </div>
  )
}

export { FiltersControlsCategory }
