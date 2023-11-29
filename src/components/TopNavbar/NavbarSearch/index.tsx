import { useState, ChangeEvent } from 'react'
import { debounce } from 'lodash'
import { BiSearchAlt } from 'react-icons/bi'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import {
  SearchResult,
  SearchResultsBox,
  SearchImg,
  SearchResultDiv,
  SearchResultArrow,
  SearchResultName,
} from './NavbarSearch.styles'
import { IProduct } from '../../../compiler/productInterface'
import { searchProducts } from '../../../firebase/firebase-firestore'
import {
  StyledNavbarSearch,
  NavInput,
  NavSearchIcon,
} from '../TopNavbar.styles'

interface INavbarSearchProps {
  smallScreen: boolean
}

export default function NavbarSearch({
  smallScreen,
}: Readonly<INavbarSearchProps>) {
  const navigate = useNavigate()
  const [results, setResults] = useState<IProduct[]>([])
  const [input, setInput] = useState<string>('')

  const debouncedSearchProducts = debounce(async (searchInput) => {
    const searchResults = await searchProducts(searchInput)
    setResults(searchResults)
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

  const handleDeleteInput = () => {
    if (input !== '') {
      setInput('')
    }
  }

  return (
    <StyledNavbarSearch smallScreen={smallScreen}>
      <NavInput
        type="text"
        placeholder="Search for products..."
        onChange={handleChange}
        value={input}
        data-testid="nav-search-input"
      ></NavInput>
      <NavSearchIcon onClick={handleDeleteInput}>
        {input === '' ? <BiSearchAlt /> : <RiCloseCircleLine />}
      </NavSearchIcon>
      {input.length > 2 && (
        <SearchResultsBox>
          {results.map((item) => (
            <SearchResult
              onClick={() => handleClick(item.docId)}
              key={`${item.docId}-sr`}
            >
              <SearchResultName>
                {item.name.length > 25
                  ? `${item.name.slice(0, 25)}...`
                  : item.name}
              </SearchResultName>
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
    </StyledNavbarSearch>
  )
}
