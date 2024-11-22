import { Skeleton } from '@/ui/skeleton'
import React from 'react'

interface SkeletonProps {
  grid: number
}

const FeaturedProductsSkeleton = ({ grid }: SkeletonProps) => {
  return Array.from({ length: grid }).map((_, index) => {
    return (
      <section key={index} className="flex flex-col gap-8 mx-auto space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </section>
    )
  })
}

export { FeaturedProductsSkeleton }
