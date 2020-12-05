import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.dark2};
  box-sizing: border-box;
border-color: ${props => props.theme.colors.light2}
  box-shadow: ${props => props.theme.shadows.shadow1};

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 0.5rem repeat(6, 1fr) 0.5rem;
    background-color: ${props => props.theme.colors.dark2};
    
  }
`
