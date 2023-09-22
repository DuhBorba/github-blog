import React from 'react'
import { Header } from '../../components/Header'
import { PostTitle } from './components/PostTitle'
import { PostContent } from './components/PostContent'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostsProps } from '../Home'

const username = import.meta.env.VITE_GITHUB_USERNAME
const blog = import.meta.env.VITE_GITHUB_BLOG

export const Post = () => {
  const { issueNumber } = useParams()

  const [ postData, setPostData ] = React.useState<PostsProps>({} as PostsProps)
  const [ isLoading, setIsLoading ] = React.useState(true)

  async function getPostData() {
    try{
      setIsLoading(true)

      const response = await api.get(`/repos/${username}/${blog}/issues/${issueNumber}`)
      setPostData(response.data)
    }
    finally{
        setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getPostData()
  }, [])

  return (
    <>
      <Header />
      
      <PostTitle postData={postData} isLoading={isLoading} />
      <PostContent postData={postData} isLoading={isLoading} />
    </>
  )
}
