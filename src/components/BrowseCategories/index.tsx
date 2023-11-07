import {
  StyledBrowseCategories,
  BrowseTitle,
  BrowseItem,
} from './BrowseCategories.styles'

export default function BrowseCategories() {
  return (
    <StyledBrowseCategories>
      <BrowseTitle>Browse Categories</BrowseTitle>
      <BrowseItem>Men</BrowseItem>
      <BrowseItem>Women</BrowseItem>
      <BrowseItem>Kids</BrowseItem>
    </StyledBrowseCategories>
  )
}
