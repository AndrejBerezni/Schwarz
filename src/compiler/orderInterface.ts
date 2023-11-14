interface Address {
  line1: string
  line2: string | null
  postal_code: string
  state: string | null
  country: string
  city: string
}

interface BillingDetails {
  address: Address
  phone: string | null
  email: string
  name: string
}

interface Checks {
  address_line1_check: string
  cvc_check: string
  address_postal_code_check: string
}

interface NetworkToken {
  used: boolean
}

interface Card {
  installments: null
  multicapture: {
    status: string
  }
  brand: string
  overcapture: {
    status: string
    maximum_amount_capturable: number
  }
  network: string
  funding: string
  country: string
  incremental_authorization: {
    status: string
  }
  exp_year: number
  three_d_secure: null
  extended_authorization: {
    status: string
  }
  last4: string
  wallet: null
  amount_authorized: number
  mandate: null
  checks: Checks
  exp_month: number
  network_token: NetworkToken
  fingerprint: string
}

interface PaymentMethodDetails {
  card: Card
  type: string
}

interface Outcome {
  reason: null
  risk_score: number
  network_status: string
  risk_level: string
  type: string
  seller_message: string
}

interface Refunds {
  data: any[]
  has_more: boolean
  object: string
  url: string
  total_count: number
}

interface Charge {
  amount_captured: number
  amount_refunded: number
  shipping: null
  transfer_group: null
  amount: number
  statement_descriptor_suffix: null
  payment_intent: string
  transfer_data: null
  failure_balance_transaction: null
  source_transfer: null
  outcome: Outcome
  id: string
  failure_message: null
  payment_method_details: PaymentMethodDetails
  payment_method: string
  captured: boolean
  disputed: boolean
  livemode: boolean
  receipt_email: null
  metadata: any
  balance_transaction: string
  receipt_number: null
  dispute: null
  invoice: null
  application_fee_amount: null
  source: null
  application_fee: null
  status: string
  fraud_details: any
  on_behalf_of: null
  application: null
  paid: boolean
  calculated_statement_descriptor: string
  object: string
  failure_code: null
  destination: null
  customer: string
  statement_descriptor: null
  review: null
  description: null
  billing_details: BillingDetails
  currency: string
  refunded: boolean
  refunds: Refunds
  receipt_url: string
  order: null
  created: number
}

interface Charges {
  has_more: boolean
  data: Charge[]
  object: string
  url: string
  total_count: number
}

interface Price {
  nickname: string
  product: string
  active: boolean
  lookup_key: null
  recurring: null
  unit_amount: number
  unit_amount_decimal: string
  tax_behavior: string
  livemode: boolean
  billing_scheme: string
  custom_unit_amount: null
  metadata: any
  currency: string
  type: string
  object: string
  tiers_mode: null
  transform_quantity: null
  created: number
  id: string
}

interface Item {
  price: Price
  amount_total: number
  currency: string
  object: string
  description: string
  amount_tax: number
  amount_discount: number
  quantity: number
  id: string
  amount_subtotal: number
}

interface PaymentMethodOptions {
  card: {
    network: null
    request_three_d_secure: string
    installments: null
    mandate_options: null
  }
}

export interface IOrder {
  amount_details: {
    tip: {}
  }
  application: null
  description: null
  shipping: null
  capture_method: string
  metadata: any
  processing: null
  invoice: null
  canceled_at: null
  on_behalf_of: null
  source: null
  receipt_email: null
  setup_future_usage: null
  charges: Charges
  id: string
  livemode: boolean
  amount_capturable: number
  currency: string
  last_payment_error: null
  cancellation_reason: null
  automatic_payment_methods: null
  customer: string
  payment_method_options: PaymentMethodOptions
  items: Item[]
  object: string
  created: number
  client_secret: string
  amount: number
  application_fee_amount: null
  transfer_data: null
  payment_method_types: string[]
  statement_descriptor_suffix: null
  transfer_group: null
  confirmation_method: string
  review: null
  latest_charge: string
  payment_method_configuration_details: null
  statement_descriptor: null
  next_action: null
  status: string
  prices: Price[]
  payment_method: string
  amount_received: number
}
