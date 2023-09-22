import React from 'react'
import {
  AvatarContainer,
  BoxName,
  InfosGithub,
  ProfileCard,
  ProfileContainer,
  ProfileDetails,
  ProfileInfo,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { ExternalLink } from '../../../../components/ExternalLink'
import { api } from '../../../../lib/axios'
import { Spinner } from '../Spinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileDataProps {
  login: string
  bio?: string
  avatar_url: string
  html_url: string
  name?: string
  company?: string
  followers: number
}

export const Profile = () => {
  const [profileData, setProfileData] = React.useState<ProfileDataProps>(
    {} as ProfileDataProps,
  )
  const [isLoading, setIsLoading] = React.useState(true)

  async function getDataProfile() {
    try {
      setIsLoading(true)

      const response = await api.get(`/users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getDataProfile()
  }, [])

  return (
    <ProfileContainer>
      <ProfileCard>
        {isLoading ? (
          <Spinner />
        ) : (
          <ProfileDetails>
            <AvatarContainer>
              <img src={profileData.avatar_url} alt="" />
            </AvatarContainer>

            <ProfileInfo>
              <BoxName>
                <div>
                  {profileData.name ? (
                    <h2>{profileData.name}</h2>
                  ) : (
                    <h2>{profileData.login}</h2>
                  )}
                </div>
                <div>
                  <ExternalLink href={profileData.html_url} target="_blank">
                    GITHUB
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </ExternalLink>
                </div>
              </BoxName>

              <div>{profileData.bio && <h3>{profileData.bio}</h3>}</div>

              <InfosGithub>
                <div>
                  <FontAwesomeIcon icon={faGithub} />
                  <p>{profileData.login}</p>
                </div>
                {profileData.company && (
                  <div>
                    <FontAwesomeIcon icon={faBuilding} />
                    <p>{profileData.company}</p>
                  </div>
                )}
                <div>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {profileData.followers <= 1 ? (
                    <p>{profileData.followers} seguidor</p>
                  ) : (
                    <p>{profileData.followers} seguidores</p>
                  )}
                </div>
              </InfosGithub>
            </ProfileInfo>
          </ProfileDetails>
        )}
      </ProfileCard>
    </ProfileContainer>
  )
}
