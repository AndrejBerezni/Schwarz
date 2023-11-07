import {
  StyledBrowseCategories,
  BrowseTitle,
  BrowseItem,
} from './BrowseCategories.styles'

export default function BrowseCategories() {
  return (
    <StyledBrowseCategories>
      <BrowseTitle>Browse Brands</BrowseTitle>
      <BrowseItem>Cartier</BrowseItem>
      <BrowseItem>Patek Philippe</BrowseItem>
      <BrowseItem>Vacheron Constantin</BrowseItem>
      <BrowseItem>Ulysse Nardin</BrowseItem>
      <BrowseItem>Rolex</BrowseItem>
    </StyledBrowseCategories>
  )
}
