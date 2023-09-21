import styled from 'styled-components'

export const ExternalButton = styled.a`  
  color: ${props => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2rem;
  text-decoration: none;

  svg{
    margin: 0 0.5rem;
    color: #3294f8;
  }

  &:hover{
    text-decoration: underline;
  }
`