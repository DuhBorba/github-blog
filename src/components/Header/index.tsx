import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
