import { styled } from 'styled-components'

export const FilterTitle = styled.p`
  letter-spacing: 2px;
  font-weight: 600;
  color: ${(props) => props.theme.secondaryText};
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
  }
  margin-bottom: 5px;
`

export const StyledFilters = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  font-size: 18px;
  position: relative;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
`

interface IFilterBoxProps {
  visible: boolean
  theme: {
    borderColor: string
  }
}

export const FilterBox = styled.div<IFilterBoxProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  gap: 10px;
  position: absolute;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  top: 100%;
  background: linear-gradient(to bottom, #222222, #111111, #000000);
  z-index: 1;
  padding: 10px;
`

export const FilterInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`

export const FilterOption = styled.input`
  transform: scale(1.4);
  &:hover {
    cursor: pointer;
  }
`

export const FilterLabel = styled.label`
  font-weight: 600;
  letter-spacing: 1px;
`

export const FilterSubtitle = styled.p`
  margin: 15px 0 0;
  color: ${(props) => props.theme.secondaryText};
  transition: 0.3s;
  &:last-of-type:hover {
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
  }
`
