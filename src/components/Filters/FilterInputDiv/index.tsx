import { useDispatch, useSelector } from 'react-redux'
import { IFilterState, applyFilter, removeFilter } from '../../../store/filter'
import { getFilters } from '../../../store/filter/selectors'
import {
  StyledFilterInputDiv,
  FilterLabel,
  FilterOption,
} from '../Filters.styles'

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
