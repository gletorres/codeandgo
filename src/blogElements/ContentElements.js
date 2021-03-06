import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 4 / span 6;

  background-color: ${props => props.theme.colors.dark1};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  x-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `
      ${props.theme.spacings.xxSmall} ${props.theme.spacings.xxSmall}`};
  }
`
