import React from 'react'
import { Header } from '../../components/Header'
import { PostTitle } from './components/PostTitle'
import { PostContent } from './components/PostContent'

export const Post = () => {
  return (
    <>
      <Header />
      
      <PostTitle />
      <PostContent />
    </>
  )
}
