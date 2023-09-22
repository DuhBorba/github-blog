import styled from 'styled-components'

export const PostContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 3.5rem;

  h2, h3 {
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  p{
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    > code {
      font-family: 'Fira Code', monospace!important;
      font-size: 0.8rem!important;
      color: ${props => props.theme['base-title']};
      background-color: ${props => props.theme['base-post']}!important;
      border-radius: 2px!important;
      padding: 0.125rem 0.25rem;
    }
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

  pre{
    > div{
      font-family: 'Fira Code', monospace!important;
      background-color: ${props => props.theme['base-post']}!important;
      border-radius: 2px!important;
      margin-bottom: 1.5rem!important;
    }
  }
  
`