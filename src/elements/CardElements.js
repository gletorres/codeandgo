import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.light1};
  box-sizing: border-box;

  box-shadow: ${props => props.theme.shadows.shadow1};
`
