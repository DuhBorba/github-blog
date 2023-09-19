import React from 'react'
import { BoxNavegation, InfosPost, TitlePostCard, TitlePostContainer } from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const PostTitle = () => {
  return (
    <TitlePostContainer>
      <TitlePostCard>
        
          <BoxNavegation>
            <div>
              <ExternalLink href='#' target='_blank'>
                <FontAwesomeIcon icon={faChevronLeft} style={{color: "#3294f8",}} />
                VOLTAR
              </ExternalLink>
            </div>
            <div>
              <ExternalLink href='#' target='_blank'>
                VER NO GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#3294f8",}} />
              </ExternalLink>
            </div>
          </BoxNavegation>

          <h1>
            JavaScript data types and data structures
          </h1>

          <InfosPost>
            <div>
            <FontAwesomeIcon icon={faGithub} style={{color: "#3a536b",}} />
              <p>duhborba</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} style={{color: "#3a536b",}} />
              <p>Há 1 dia</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} style={{color: "#3a536b",}} />
              <p>5 comentários</p>
            </div>
          </InfosPost>

      </TitlePostCard>
    </TitlePostContainer>
  )
}
