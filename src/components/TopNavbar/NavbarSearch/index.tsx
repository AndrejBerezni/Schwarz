import { NavDiv, NavInput, NavSearchIcon } from '../TopNavbar.styles'
import { BiSearchAlt } from 'react-icons/bi'
import { searchProducts } from '../../../firebase/firebase-firestore'
import { debounce } from 'lodash'
import { useState, ChangeEvent } from 'react'
import { IProduct } from '../../../compiler/productInterface'
import {
  SearchResult,
  SearchResultsBox,
  SearchImg,
  SearchResultDiv,
  SearchResultArrow,
} from './NavbarSearch.styles'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useNavigate } from 'react-router'

export default function NavbarSearch() {
  const navigate = useNavigate()
  const [results, setResults] = useState<IProduct[]>([])
  const [input, setInput] = useState<string>('')

  const debouncedSearchProducts = debounce(async (searchInput) => {
    const searchResults = await searchProducts(searchInput)
    setResults(searchResults)
    console.log(results[0].docId)
    console.log(results)
  }, 1000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value
    setInput(searchInput)
    if (searchInput.length > 2) {
      debouncedSearchProducts(searchInput)
    }
  }

  const handleClick = (productId: string) => {
    setInput('')
    navigate(`/products/${productId}`)
  }

  return (
    <NavDiv>
      <NavInput
        type="text"
        placeholder="Search for products..."
        onChange={handleChange}
      ></NavInput>
      <NavSearchIcon>
        <BiSearchAlt />
      </NavSearchIcon>
      {input.length > 2 && (
        <SearchResultsBox>
          {results.map((item) => (
            <SearchResult
              onClick={() => handleClick(item.docId)}
              key={`${item.docId}-sr`}
            >
              <p>{item.name}</p>
              <SearchResultDiv>
                <SearchImg src={item.images[0]} />
                <SearchResultArrow>
                  <IoMdArrowRoundForward />
                </SearchResultArrow>
              </SearchResultDiv>
            </SearchResult>
          ))}
        </SearchResultsBox>
      )}
    </NavDiv>
  )
}
