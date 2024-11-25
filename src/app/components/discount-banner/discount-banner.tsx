import Link from 'next/link'

import { buttonVariants } from '@/ui/button'

const DiscountBanner = () => {
  return (
    <section className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-2xl text-black">Consigue hasta un 25%</h2>
      <h3 className="mt-3 font-semibold">20% al gastar 100$ o 25% al gastar 200$. Usa el código CYBERDAY.</h3>
      <article className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: 'outline' })}>
          M&aacute;s informacion
        </Link>
      </article>
    </section>
  )
}

export { DiscountBanner }
