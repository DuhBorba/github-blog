import styled from 'styled-components'
import bgHeader from '../../assets/bg-header.svg'

export const HeaderContainer = styled.header`
  background: url(${bgHeader}) no-repeat center bottom;
  background-size: cover;
  height: 296px;
`

export const HeaderContent = styled.div`
  text-align: center;
  padding-top: 4rem;
`