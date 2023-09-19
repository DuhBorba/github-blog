import React from 'react'
import { ExternalButton } from './styles'

interface ExternalLinkProps {
  href: string
  target?: string
  children: React.ReactNode
}

export const ExternalLink = ({href, target = '_self', children} : ExternalLinkProps) => {
  return (
    <ExternalButton href={href} target={target}>
      {children}
    </ExternalButton>
  )
}
