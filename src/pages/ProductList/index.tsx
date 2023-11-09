import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'

const categories = ['cartier', 'patekphilippe']

export default function ProductList() {
  const { category } = useParams()

  return (
    <>
      {categories.includes(category as string) ? (
        <div>
          <h1>Product List</h1>
          <h2>{category}</h2>
        </div>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
