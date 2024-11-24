import { CarouselBanner } from '@/sections/home/carousel-banner/carousel-banner'
import { FeaturedProducts } from '@/sections/home/featured-products/featured-products'
import { DiscountBanner } from '@/sections/home/discount-banner/discount-banner'
import { ChooseCategory } from '@/sections/home/choose-category/choose-category'
import { ProductBanner } from '@/sections/home/product-banner/product-banner'

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <FeaturedProducts />
      <DiscountBanner />
      <ChooseCategory />
      <ProductBanner />
    </main>
  )
}
