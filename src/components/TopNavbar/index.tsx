import {
  StyledTopNavbar,
  StyledNavTitle,
  StyledNavDiv,
  StyledNavSearchIcon,
  StyledNavInput,
  StyledNavButton,
} from './TopNavbar.styles'
import { MdAccountCircle } from 'react-icons/md'
import { BsCartFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TfiMenuAlt } from 'react-icons/tfi'

export default function TopNavbar() {
  return (
    <StyledTopNavbar>
      <StyledNavDiv>
        <StyledNavTitle>Schwartz</StyledNavTitle>
      </StyledNavDiv>
      <StyledNavDiv>
        <StyledNavInput
          type="text"
          placeholder="Search for products..."
        ></StyledNavInput>
        <StyledNavSearchIcon>
          <BiSearchAlt />
        </StyledNavSearchIcon>
      </StyledNavDiv>
      <StyledNavDiv>
        <StyledNavButton variant="mobile-only">
          <TfiMenuAlt />
        </StyledNavButton>
        <div>
          <StyledNavButton>
            <MdAccountCircle />
          </StyledNavButton>
          <StyledNavButton>
            <BsCartFill />
          </StyledNavButton>
        </div>
      </StyledNavDiv>
    </StyledTopNavbar>
  )
}
