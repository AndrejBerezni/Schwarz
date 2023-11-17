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
  return (
    <>
      <FilterSubtitle>{filterName}</FilterSubtitle>
      <StyledFilterInputDiv>
        {filterValues.map((item) => (
          <FilterLabel key={`${item}-fo`}>
            {item}
            <FilterOption
              type="radio"
              value={item}
              id={`${item}-id`}
              name={filterName}
            />
          </FilterLabel>
        ))}
      </StyledFilterInputDiv>
    </>
  )
}
