import React from 'react'
import { PostContentContainer } from './styled'
import { PostsProps } from '../../../Home'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Spinner } from '../../../Home/components/Spinner'

interface PostContentProps {
  postData: PostsProps
  isLoading: boolean
}

export const PostContent = ({ postData, isLoading }: PostContentProps) => {
  return (
    <PostContentContainer>
      {
        isLoading ? 
        <Spinner /> : 
        <ReactMarkdown 
          children={postData.body}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={dracula}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      }
    </PostContentContainer>
  )
}
