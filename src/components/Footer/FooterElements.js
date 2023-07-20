import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #1c1c28;
  height: auto;
  padding-bottom: 60px;
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`


export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 10px auto -20px auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  padding: 0 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FCB362;
  }
`

export const ContactH1 = styled.h1`
  font-size: 40px;
  color: #fff;
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }  
`
export const ContactH2 = styled.h2`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
`

export const ContactP = styled.p`
  font-size: 12px;
  color: #ffffff;
`