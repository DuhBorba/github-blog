import React from 'react'
import { PostContentContainer } from './styled'
import { PostsProps } from '../../../Home'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Spinner } from '../../../../components/Spinner'

interface PostContentProps {
  postData: PostsProps
  isLoading: boolean
}

export const PostContent = ({ postData, isLoading }: PostContentProps) => {
  return (
    <PostContentContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={dracula}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {postData.body}
        </ReactMarkdown>
      )}
    </PostContentContainer>
  )
}
