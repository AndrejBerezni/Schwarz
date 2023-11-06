import { useParams } from 'react-router'

export default function ProductList() {
  const { category } = useParams()

  return (
    <>
      <h1>Product List</h1>
      <h2>{category}</h2>
    </>
  )
}
