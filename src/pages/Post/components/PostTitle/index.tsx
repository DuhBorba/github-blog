import React from 'react'
import { BoxNavegation, InfosPost, TitlePostCard, TitlePostContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostsProps } from '../../../Home'
import { dateFormatter } from '../../../../utils/formatter'

interface PostTitleProps {
  postData: PostsProps
}

export const PostTitle = ({ postData }: PostTitleProps) => {

  const formatterData = dateFormatter(postData.created_at)

  return (
    <TitlePostContainer>
      <TitlePostCard>
        
          <BoxNavegation>
            <div>
              <ExternalLink href='/'>
                <FontAwesomeIcon icon={faChevronLeft} />
                VOLTAR
              </ExternalLink>
            </div>
            <div>
              <ExternalLink href={postData.html_url} target='_blank'>
                VER NO GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </ExternalLink>
            </div>
          </BoxNavegation>

          <h1>
            {postData.title}
          </h1>

          <InfosPost>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <p>{postData.user?.login}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <p>{formatterData}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              {
                postData.comments <= 1 ? 
                <p>{postData.comments} comentário</p> :
                <p>{postData.comments} comentários</p> 
              }
            </div>
          </InfosPost>

      </TitlePostCard>
    </TitlePostContainer>
  )
}
