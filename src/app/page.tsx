import { CarouselBanner } from './components/carousel-banner/carousel-banner'
import { ProductsFeatured } from './components/products-featured/products-featured'
import { DiscountBanner } from './components/discount-banner/discount-banner'
import { ChooseCategory } from './components/choose-category/choose-category'
import { ProductBanner } from './components/product-banner/product-banner'

export default function Home() {
  return (
    <main>
      <CarouselBanner />
      <ProductsFeatured />
      <DiscountBanner />
      <ChooseCategory />
      <ProductBanner />
    </main>
  )
}
