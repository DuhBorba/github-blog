import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardBox = styled(Link)`
  border-radius: 10px;
  background: ${props => props.theme['base-post']};
  padding: 2rem;
  border: 2px solid ${props => props.theme['base-post']};
  text-decoration: none;
  cursor: pointer;

  div{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    margin-bottom: 1.25rem;

    h3{
      color: ${props => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 2rem;
      width: 80%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span{
      color: ${props => props.theme['base-span']};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.4rem;
    }
  }

  p{
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border: 2px solid ${props => props.theme['base-label']};
  }
`