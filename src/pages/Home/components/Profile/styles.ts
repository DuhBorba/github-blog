import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const ProfileCard = styled.div`
  display: flex;
  margin-top: -5.5rem;
  padding: 2rem 2.5rem;
  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  min-height: 13.25rem;
`

export const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 14.25rem 1fr;
  align-items: center;
  width: 100%;
`

export const AvatarContainer = styled.div`
  img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h3{
    color: ${props => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.95rem;
  }

  h3{
    margin: 0.5rem 0 1.5rem;
  }

  h3, p{
    color: ${props => props.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
  }
`

export const BoxName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg{
      width: 0.75rem;
      height: 0.75rem;
  }
`

export const InfosGithub = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
      width: 1.125rem;
      height: 1.125rem;
      color: #3a536b;
    }
  }
`