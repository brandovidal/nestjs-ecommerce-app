import { Skeleton } from '@/ui/skeleton'
import React from 'react'

interface SkeletonProps {
  grid: number
}

const ChooseCategorySkeleton = ({ grid }: SkeletonProps) => {
  return Array.from({ length: grid }).map((_, index) => {
    return (
      <section key={index} className="flex flex-col gap-2 mx-auto">
        <Skeleton className="h-[200px] w-[300px] rounded-xl" />
      </section>
    )
  })
}

export { ChooseCategorySkeleton }
