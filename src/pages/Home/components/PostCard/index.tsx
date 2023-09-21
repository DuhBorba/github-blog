import React from 'react'
import { PostCardBox } from './styled'

import { PostsProps } from '../..'
import { dateFormatter } from '../../../../utils/formatter'

interface PostCardProps {
  post: PostsProps
}


export const PostCard = ({post}: PostCardProps) => {
  const formatterData = dateFormatter(post.created_at)
  
  return (
    <PostCardBox>
      <div>
        <h3>{post.title}</h3>
        <span>{formatterData}</span>
      </div>

      <p>
        {post.body}
      </p>
    </PostCardBox>
  )
}
