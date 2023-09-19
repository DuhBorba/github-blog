import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { ContainerPosts } from './styles'

export const Home = () => {
  return (
    <>
      <Header />

      <Profile />

      <ContainerPosts>
        <SearchInput />
      </ContainerPosts>
    </>
  )
}
