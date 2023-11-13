export const convertBrandString = (brand: string): string =>
  brand.includes('_') ? brand.split('_').join(' ') : brand
