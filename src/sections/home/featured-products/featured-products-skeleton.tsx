import { Skeleton } from '@/ui/skeleton'
import React from 'react'

interface SkeletonProps {
  grid: number
}

const FeaturedProductsSkeleton = ({ grid }: SkeletonProps) => {
  return Array.from({ length: grid }).map((_, index) => {
    return (
      <section key={index} className="flex flex-col gap-4 mx-auto mt-8 ml-8">
        <Skeleton className="h-[250px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-8 w-[250px]" />
        </div>
      </section>
    )
  })
}

export { FeaturedProductsSkeleton }
