import { useNavigate } from 'react-router'
import {
  StyledBrowseCategories,
  BrowseTitle,
  BrowseItem,
} from './BrowseCategories.styles'

export default function BrowseCategories() {
  const navigate = useNavigate()
  return (
    <StyledBrowseCategories>
      <BrowseTitle>Browse Brands</BrowseTitle>
      <BrowseItem onClick={() => navigate('/cartier')}>Cartier</BrowseItem>
      <BrowseItem onClick={() => navigate('/patek_philippe')}>
        Patek Philippe
      </BrowseItem>
      <BrowseItem onClick={() => navigate('/vacheron_constantine')}>
        Vacheron Constantin
      </BrowseItem>
      <BrowseItem onClick={() => navigate('/ulysee_nardin')}>
        Ulysse Nardin
      </BrowseItem>
      <BrowseItem onClick={() => navigate('/rolex')}>Rolex</BrowseItem>
    </StyledBrowseCategories>
  )
}
