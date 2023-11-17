import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { applyFilter } from '../../../store/filter'
import {
  StyledFilterInputDiv,
  FilterLabel,
  FilterOption,
  FilterSubtitle,
} from '../Filters.styles'

interface IFilterRadioProps {
  filterValues: string[]
  filterName: string
}

export default function FilterRadio({
  filterValues,
  filterName,
}: Readonly<IFilterRadioProps>) {
  const dispatch = useDispatch()
  const optionRefs = filterValues.map(() => useRef<HTMLInputElement>(null)) //this is causing eslint error, but I am keeping it until I find a better solution

  const handleChange = (filterValue: string, index: number) => {
    if (optionRefs[index].current?.checked) {
      dispatch(applyFilter(filterValue))
    }
  }

  return (
    <>
      <FilterSubtitle>{filterName}</FilterSubtitle>
      {filterValues.map((item, index) => (
        <StyledFilterInputDiv key={`${item}-fo`}>
          <FilterLabel>{item}</FilterLabel>
          <FilterOption
            type="radio"
            value={item.toLowerCase()}
            id={`${item}-id`}
            name={filterName}
            ref={optionRefs[index]}
            onChange={() => handleChange(item.toLowerCase(), index)}
          />
        </StyledFilterInputDiv>
      ))}
    </>
  )
}
