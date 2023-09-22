import styled from 'styled-components'

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 4.5rem 0 0.75rem;

  p {
    &:first-child {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }
    &:last-child {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const SearchInputStyled = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  margin-bottom: 3rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
