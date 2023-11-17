import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterInputDiv from './FilterInputDiv'
import FilterRadio from './FilterRadio'
import { FilterBox, StyledFilters, FilterButton } from './Filters.styles'
import { clearFilters } from '../../store/filter'

export default function Filters() {
  const dispatch = useDispatch()
  const [showFilters, setShowFilters] = useState<boolean>(false)

  // With just dispatching clearFilters, state was changed, but checkboxes remained checked
  // I needed to find a way to force re-render them, so I achieve that by changing their keys when clearing filters
  const [filterKey, setFilterKey] = useState(0)

  const clearAllFilters = () => {
    dispatch(clearFilters())
    setFilterKey((prevKey) => prevKey + 1)
  }

  return (
    <StyledFilters>
      <FilterButton onClick={() => setShowFilters((prev) => !prev)}>
        {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
      </FilterButton>
      <FilterBox visible={showFilters}>
        <FilterInputDiv filter="Discount" key={`Discount-${filterKey}`} />
        <FilterInputDiv filter="New" key={`New-${filterKey}`} />
        <FilterRadio
          filterValues={['Men', 'Women']}
          filterName="Collection"
          key={`Collection-${filterKey}`}
        />
        <FilterButton onClick={clearAllFilters}>Clear All</FilterButton>
      </FilterBox>
    </StyledFilters>
  )
}
