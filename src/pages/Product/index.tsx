import { useParams } from 'react-router'

export default function Product() {
  const { product } = useParams()
  return <h1>{product}</h1>
}
