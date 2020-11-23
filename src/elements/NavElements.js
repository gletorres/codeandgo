import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  & img {
    height: 45px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  padding: 20px;

  @media ${props => props.theme.breakpoints.mobile} {
    font-weight: 400;
    font-size: 18px;
    padding: 10px;
  }
`
