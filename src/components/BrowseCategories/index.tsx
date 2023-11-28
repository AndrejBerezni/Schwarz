import { useNavigate } from 'react-router'
import {
  StyledBrowseCategories,
  BrowseTitle,
  BrowseItem,
} from './BrowseCategories.styles'

export default function BrowseCategories() {
  const navigate = useNavigate()

  const handleClick = (url: string) => {
    window.scrollTo(0, 0)
    navigate(url)
  }
  return (
    <StyledBrowseCategories>
      <BrowseTitle>Browse Brands</BrowseTitle>
      <BrowseItem onClick={() => handleClick('/all')}>All Brands</BrowseItem>
      <BrowseItem onClick={() => handleClick('/cartier')}>Cartier</BrowseItem>
      <BrowseItem onClick={() => handleClick('/patek_philippe')}>
        Patek Philippe
      </BrowseItem>
      <BrowseItem onClick={() => handleClick('/rolex')}>Rolex</BrowseItem>
      <BrowseItem onClick={() => handleClick('/ulysee_nardin')}>
        Ulysse Nardin
      </BrowseItem>
      <BrowseItem onClick={() => handleClick('/vacheron_constantine')}>
        Vacheron Constantin
      </BrowseItem>
    </StyledBrowseCategories>
  )
}
