import { Skeleton } from '@/ui/skeleton'

const ProductSkeleton = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-8 mx-auto md:py-16 md:px-40">
      <Skeleton className="h-[200px] w-[300px] rounded-xl" />
      <div className="space-y-2 items-start">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </section>
  )
}

export { ProductSkeleton }
