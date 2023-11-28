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

  const handleClick = (url: string) => {
    window.scrollTo(0, 0)
    navigate(url)
    dispatch(hideSidebars())
  }

  return (
    <StyledBrowseCategoriesSide show={show}>
      <CloseBrowseSide onClick={() => dispatch(hideSidebars())}>
        X
      </CloseBrowseSide>
      <BrowseSideTitle>Browse Brands</BrowseSideTitle>
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
    </StyledBrowseCategoriesSide>
  )
}
