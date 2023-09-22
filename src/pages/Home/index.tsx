import React from 'react'
import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { ContainerPosts, GridPosts } from './styles'
import { PostCard } from './components/PostCard'
import { api } from '../../lib/axios'
import { Spinner } from './components/Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME
const blog = import.meta.env.VITE_GITHUB_BLOG

export interface PostsProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export const Home = () => {

  const [ posts, setPosts ] = React.useState<PostsProps[]>([])
  const [ isLoading, setIsLoading ] = React.useState(true)

  async function getPosts(query: string = '') {
    try{
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${blog}`)
      
      setPosts(response.data.items)
    }
    finally{
        setIsLoading(false)
    }
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
        {
          isLoading ? 
          <Spinner /> : 
          <GridPosts>
            {
              posts.length <= 0 ? 
              <p>Nenhuma publicação encontrada :&#40;</p> : 
              posts.map(post => (
                <PostCard key={post.number} post={post} />
                ))
            }
          </GridPosts>
        }
      </ContainerPosts>
    </>
  )
}
