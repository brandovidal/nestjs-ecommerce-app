import { useGetAllProductField } from '@/api/use-get-all-product-field'

import { Label } from '@/ui/label'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'

interface FilterOriginProps {
  handleOrigin: (origin: string) => void
}

const FilterOrigin = ({ handleOrigin }: FilterOriginProps) => {
  const { data, loading } = useGetAllProductField()

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && <p>Cargando origen...</p>}
      <RadioGroup onValueChange={handleOrigin} defaultValue=''>
        {!loading && (
          <p key={origin} className="flex items-center space-x-2">
            <RadioGroupItem value="" id="all" />
            <Label htmlFor="all">Todos</Label>
          </p>
        )}

        {data !== null &&
          data.map((origin) => (
            <p key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </p>
          ))}
      </RadioGroup>
    </div>
  )
}

export { FilterOrigin }
