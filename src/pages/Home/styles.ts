import styled from 'styled-components'

export const ContainerPosts = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 10rem;
  padding: 0 1.5rem;
`

export const GridPosts = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  
  @media(max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`