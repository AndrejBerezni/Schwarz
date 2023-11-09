export const formatPrice = (price: number): string => {
  const formattedPrice = price.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formattedPrice
}
