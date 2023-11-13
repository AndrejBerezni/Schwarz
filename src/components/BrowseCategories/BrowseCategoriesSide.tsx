import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  StyledBrowseCategoriesSide,
  CloseBrowseSide,
  BrowseSideTitle,
  BrowseItem,
} from './BrowseCategories.styles'
import { hideSidebars } from '../../store/sidebars'
import { getShowCategories } from '../../store/sidebars/selectors'

export default function BrowseCategoriesSide() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const show = useSelector(getShowCategories)

  return (
    <StyledBrowseCategoriesSide show={show}>
      <CloseBrowseSide onClick={() => dispatch(hideSidebars())}>
        X
      </CloseBrowseSide>
      <BrowseSideTitle>Browse Brands</BrowseSideTitle>
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
    </StyledBrowseCategoriesSide>
  )
}
