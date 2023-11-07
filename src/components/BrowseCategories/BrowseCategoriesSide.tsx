import { useDispatch, useSelector } from 'react-redux'
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
  const show = useSelector(getShowCategories)

  return (
    <StyledBrowseCategoriesSide show={show}>
      <CloseBrowseSide onClick={() => dispatch(hideSidebars())}>
        X
      </CloseBrowseSide>
      <BrowseSideTitle>Browse Brands</BrowseSideTitle>
      <BrowseItem>Cartier</BrowseItem>
      <BrowseItem>Patek Philippe</BrowseItem>
      <BrowseItem>Vacheron Constantin</BrowseItem>
      <BrowseItem>Ulysse Nardin</BrowseItem>
      <BrowseItem>Rolex</BrowseItem>
    </StyledBrowseCategoriesSide>
  )
}
