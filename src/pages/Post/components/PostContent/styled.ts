import styled from 'styled-components'

export const PostContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 3.5rem;

  h2, h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  p{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  a{
    color: ${props => props.theme.blue}
  }

  ul{
    list-style-position: inside;
    margin-bottom: 1.5rem;
    li{
      margin-bottom: 0.25rem;
    }
  }
`