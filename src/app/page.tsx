import { CarouselBanner } from '@/sections/home/carousel-banner/carousel-banner'
import { FeaturedProducts } from '@/sections/home/featured-products/featured-products'
import { DiscountBanner } from '@/sections/home/discount-banner/discount-banner'

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <FeaturedProducts />
      <DiscountBanner />
    </main>
  )
}
