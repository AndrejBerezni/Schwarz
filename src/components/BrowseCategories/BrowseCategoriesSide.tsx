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
      <BrowseSideTitle>Browse Categories</BrowseSideTitle>
      <BrowseItem>Men</BrowseItem>
      <BrowseItem>Women</BrowseItem>
      <BrowseItem>Kids</BrowseItem>
    </StyledBrowseCategoriesSide>
  )
}
