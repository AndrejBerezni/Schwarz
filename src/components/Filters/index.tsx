import {
  FilterBox,
  StyledFilters,
  FilterTitle,
  FilterOption,
  FilterLabel,
  FilterInputDiv,
  FilterSubtitle,
} from './Filters.styles'
import { useState } from 'react'

export default function Filters() {
  const [showFilters, setShowFilters] = useState<boolean>(false)

  return (
    <StyledFilters>
      <FilterTitle onClick={() => setShowFilters((prev) => !prev)}>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </FilterTitle>
      <FilterBox visible={showFilters}>
        <FilterInputDiv>
          <FilterLabel htmlFor="filter-sale">On sale</FilterLabel>
          <FilterOption type="checkbox" id="filter-sale" />
        </FilterInputDiv>
        <FilterInputDiv>
          <FilterLabel htmlFor="filter-new">New</FilterLabel>
          <FilterOption type="checkbox" id="filter-new" />
        </FilterInputDiv>
        <FilterSubtitle>Collection</FilterSubtitle>
        <FilterInputDiv>
          <FilterLabel htmlFor="filter-men">Men</FilterLabel>
          <FilterOption type="checkbox" id="filter-men" />
        </FilterInputDiv>
        <FilterInputDiv>
          <FilterLabel htmlFor="filter-women">Women</FilterLabel>
          <FilterOption type="checkbox" id="filter-women" />
        </FilterInputDiv>
        <FilterSubtitle>Clear all</FilterSubtitle>
      </FilterBox>
    </StyledFilters>
  )
}
