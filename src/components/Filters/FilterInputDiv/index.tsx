import {
  StyledFilterInputDiv,
  FilterLabel,
  FilterOption,
} from '../Filters.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters } from '../../../store/filter/selectors'
import { IFilterState } from '../../../store/filter'
import { applyFilter, removeFilter } from '../../../store/filter'

interface IFilterInputDivProps {
  filter: string
}

export default function FilterInputDiv({
  filter,
}: Readonly<IFilterInputDivProps>) {
  const dispatch = useDispatch()
  const filters = useSelector(getFilters)

  const handleChange = (filter: string) => {
    if (filters[filter as keyof IFilterState] === false) {
      dispatch(applyFilter(filter))
    } else {
      dispatch(removeFilter(filter))
    }
  }
  return (
    <StyledFilterInputDiv>
      <FilterLabel htmlFor={`filter-${filter}`}>
        {filter === 'Discount' ? 'On Sale' : filter}
      </FilterLabel>
      <FilterOption
        type="checkbox"
        id={`filter-${filter}`}
        checked={filters[filter as keyof IFilterState]}
        onChange={() => handleChange(filter.toLowerCase())}
      />
    </StyledFilterInputDiv>
  )
}
