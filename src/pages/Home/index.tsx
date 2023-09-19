import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { ContainerPosts, GridPosts } from './styles'
import { PostCard } from './components/PostCard'

export const Home = () => {
  return (
    <>
      <Header />

      <Profile />

      <ContainerPosts>
        <SearchInput />

        <GridPosts>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </GridPosts>
      </ContainerPosts>
    </>
  )
}
