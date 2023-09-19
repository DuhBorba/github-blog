import React from 'react'
import { AvatarContainer, BoxName, InfosGithub, ProfileCard, ProfileContainer, ProfileInfo } from './styles'
import Avatar from '../../../../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { ExternalLink } from '../../../../components/ExternalLink'


export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <AvatarContainer>
          <img src={Avatar} alt="" />
        </AvatarContainer>
        
        <ProfileInfo>
          <BoxName>
            <div>
              <h2>Eduardo Luis Borba</h2>
            </div>
            <div>
              <ExternalLink href='#' target='_blank'>
                GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#3294f8",}} />
              </ExternalLink>
            </div>
          </BoxName>

          <div>
            <h3>Front-end Developer</h3>
          </div>

          <InfosGithub>
            <div>
            <FontAwesomeIcon icon={faGithub} style={{color: "#3a536b",}} />
              <p>duhborba</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} style={{color: "#3a536b",}} />
              <p>CRM Services</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} style={{color: "#3a536b",}} />
              <p>15 seguidores</p>
            </div>
          </InfosGithub>
        </ProfileInfo>

      </ProfileCard>
    </ProfileContainer>
  )
}
