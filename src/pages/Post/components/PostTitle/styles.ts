import styled from "styled-components";

export const TitlePostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const TitlePostCard = styled.div`
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  h1{
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.95rem;
    margin: 1.25rem 0 0.75rem;
  }
`

export const BoxNavegation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfosPost = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`