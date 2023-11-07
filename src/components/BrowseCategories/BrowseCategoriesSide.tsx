import {
  StyledBrowseCategoriesSide,
  CloseBrowseSide,
  BrowseSideTitle,
  BrowseItem,
} from './BrowseCategories.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getShowCategories } from '../../store/sidebars/selectors'
import { hideSidebars } from '../../store/sidebars'

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
