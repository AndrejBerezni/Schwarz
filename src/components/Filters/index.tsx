import { useState } from 'react'
import {
  FilterBox,
  StyledFilters,
  FilterButton,
  FilterSubtitle,
} from './Filters.styles'
import FilterInputDiv from './FilterInputDiv'

export default function Filters() {
  const [showFilters, setShowFilters] = useState<boolean>(false)

  return (
    <StyledFilters>
      <FilterButton onClick={() => setShowFilters((prev) => !prev)}>
        {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
      </FilterButton>
      <FilterBox visible={showFilters}>
        <FilterInputDiv filter="Discount" />
        <FilterInputDiv filter="New" />
        <FilterSubtitle>Collection</FilterSubtitle>
        <FilterInputDiv filter="Men" />
        <FilterInputDiv filter="Women" />
        <FilterButton>Clear all</FilterButton>
      </FilterBox>
    </StyledFilters>
  )
}
