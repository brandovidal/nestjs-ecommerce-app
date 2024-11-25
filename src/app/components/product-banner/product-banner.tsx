import { buttonVariants } from '@/ui/button'
import Link from 'next/link'
import React from 'react'

const ProductBanner = () => {
  return (
    <>
      <section className="mt-4 text-center">
        <p>Sumergete en una experiencia unica</p>
        <h4 className="mt-2 text-8xl font-extrabold uppercase">Cafe Exquisito</h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <div className='h-[300px] md:h-[600px] bg-[url("/slider-image.jpg")] bg-center bg-cover mt-5' />
      </section>
    </>
  )
}

export { ProductBanner }
