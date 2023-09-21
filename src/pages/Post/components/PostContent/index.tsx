import React from 'react'
import { PostContentContainer } from './styled'
import { PostsProps } from '../../../Home'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  postData: PostsProps
}

export const PostContent = ({ postData }: PostContentProps) => {
  return (
    <PostContentContainer>
      <ReactMarkdown 
        children={postData.body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      {/* Erro React Markdown */}
    </PostContentContainer>
  )
}
