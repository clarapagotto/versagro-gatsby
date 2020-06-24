import React from "react"
import { FooterWrapper, FooterContainer, LogoContainer, InfoContainer } from "./styled"
import Logo from '../Logo'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <InfoContainer />
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
