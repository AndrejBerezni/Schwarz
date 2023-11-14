export interface IPrice {
  priceId: string
  active: true
  billing_scheme: string
  currency: string
  description: null
  interval: null
  interval_count: null
  metadata: {
    type: 'map'
  }
  product: string
  recurring: null
  tax_behavior: string
  tiers: null
  tiers_mode: null
  transform_quantity: null
  trial_period_days: null
  type: string
  unit_amount: number
}

export interface IProduct {
  active: boolean
  description: string
  docId: string
  images: string[]
  metadata: {
    brand: string
    collection: string
    material: string
    new: string
    discount: string
  }
  name: string
  prices: IPrice[]
  role: null
  stripe_metadata_brand: string
  stripe_metadata_collection: string
  stripe_metadata_material: string
  stripe_metadata_new: string
  stripe_metadata_discount?: string
  tax_code: null
}
