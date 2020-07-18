import React from "react"
import * as S from "./styled"
// import Logo from "../Logo"
import LogoFluid from "../LogoFluid"

import { Phone } from "@styled-icons/boxicons-solid/Phone"
import { Email } from "@styled-icons/entypo/Email"
import { LocationOn } from "@styled-icons/material/LocationOn"

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.LogoContainer>
          <LogoFluid />
        </S.LogoContainer>
        {/* <S.SelectContainerResp>
          <S.LanguageSelect>
            <S.LanguageOption>Selecione o idioma</S.LanguageOption>
            <S.LanguageOption>Português</S.LanguageOption>
            <S.LanguageOption>English</S.LanguageOption>
            <S.LanguageOption>Español</S.LanguageOption>
          </S.LanguageSelect>
        </S.SelectContainerResp> */}
        <S.InfoContainer>
          <S.LinksContainer>
            <S.LinksGroup>
              <S.LinksList>
                <S.LinkItem>
                  <S.FooterLink to="/a-versagro" style={{ fontWeight: "bold" }}>
                    A Versagro
                  </S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Quem somos</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Equipe</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Onde estamos</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem style={{ fontWeight: "bold", marginTop: "15px" }}>
                  <S.FooterLink to="/">Soluções</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Servicos</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Solicite um orçamento</S.FooterLink>
                </S.LinkItem>
              </S.LinksList>
            </S.LinksGroup>
            <S.LinksGroup>
              <S.LinksList>
                <S.LinkItem>
                  <S.FooterLink to="/"style={{ fontWeight: "bold" }}>
                    Cases
                  </S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Nossos Cases</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem>
                  <S.FooterLink to="/">Depoimentos</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem style={{ fontWeight: "bold", marginTop: "20px" }}>
                  <S.FooterLink to="/">Blog</S.FooterLink>
                </S.LinkItem>
                <S.LinkItem style={{ fontWeight: "bold", marginTop: "10px" }}>
                  <S.FooterLink to="/">Contato</S.FooterLink>
                </S.LinkItem>
              </S.LinksList>
            </S.LinksGroup>
          </S.LinksContainer>
          <S.ContactContainer>
            <S.SelectContainer>
              <S.LanguageSelect>
                <S.LanguageOption>Selecione o idioma</S.LanguageOption>
                <S.LanguageOption>Português</S.LanguageOption>
                <S.LanguageOption>English</S.LanguageOption>
                <S.LanguageOption>Español</S.LanguageOption>
              </S.LanguageSelect>
            </S.SelectContainer>
            <S.AddressContainer>
              <S.LogoContainerResp>
                <LogoFluid />
              </S.LogoContainerResp>
              <S.AddressList>
                <S.AddressItem>
                  <S.AddressText>+55 12 93456 7890</S.AddressText>
                  <S.IconWrapper>
                    <Phone />
                  </S.IconWrapper>
                </S.AddressItem>
                <S.AddressItem>
                  <S.AddressText>contato@versagro.com</S.AddressText>
                  <S.IconWrapper>
                    <Email />
                  </S.IconWrapper>
                </S.AddressItem>
                <S.AddressItem>
                  <S.AddressText>
                    Av. Duque de Caxias, 1008, Centro, Viçosa-MG
                  </S.AddressText>
                  <S.IconWrapper>
                    <LocationOn />
                  </S.IconWrapper>
                </S.AddressItem>
              </S.AddressList>
            </S.AddressContainer>
          </S.ContactContainer>
        </S.InfoContainer>

      </S.FooterContainer>
    </S.FooterWrapper>
  )
}

export default Footer
