export function formatPrice (price: number) {
  const priceFormatted = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  }).format(price)

  return priceFormatted
}
