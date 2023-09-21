import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { ContainerPosts, GridPosts } from './styles'
import { PostCard } from './components/PostCard'
import { api } from '../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME
const blog = import.meta.env.VITE_GITHUB_BLOG

export interface PostsProps {
  title: string
  body: string
  created_at: string
  number: number
}

export const Home = () => {

  const [ posts, setPosts ] = React.useState<PostsProps[]>([])

  async function getPosts(query: string = '') {
    const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${blog}`)
    
    setPosts(response.data.items)
  }

  React.useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Header />

      <Profile />

      <ContainerPosts>
        <SearchInput quantityPost={posts.length} getPosts={getPosts} />

        <GridPosts>
          {
            posts.length <= 0 ? 
            <p>Nenhuma publicação encontrada :&#40;</p> : 
            posts.map(post => (
              <PostCard  key={post.number} post={post} />
            ))
          }
        </GridPosts>
      </ContainerPosts>
    </>
  )
}
