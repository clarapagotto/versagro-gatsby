import React from "react"
import * as S from "./styled"

import Avatar from './Avatar'

const Equipe = () => {
  return (
    <S.EquipeWrapper>
      <S.EquipeContainer>
        <S.Title>Equipe</S.Title>
        <S.CardsContainer>
          <S.Card>
            <S.AvatarContainer>
              <Avatar />
            </S.AvatarContainer>
            <S.PersonName>Lorem Ipsum</S.PersonName>
            <S.PersonDescription> Lorem Ipsum dolor set</S.PersonDescription>
          </S.Card>
          <S.Card>
            <S.AvatarContainer>
              <Avatar />
            </S.AvatarContainer>
            <S.PersonName>Lorem Ipsum</S.PersonName>
            <S.PersonDescription> Lorem Ipsum dolor set</S.PersonDescription>
          </S.Card>
          <S.Card>
            <S.AvatarContainer>
              <Avatar />
            </S.AvatarContainer>
            <S.PersonName>Lorem Ipsum</S.PersonName>
            <S.PersonDescription> Lorem Ipsum dolor set</S.PersonDescription>
          </S.Card>
          <S.Card>
            <S.AvatarContainer>
              <Avatar />
            </S.AvatarContainer>
            <S.PersonName>Lorem Ipsum</S.PersonName>
            <S.PersonDescription> Lorem Ipsum dolor set</S.PersonDescription>
          </S.Card>
        </S.CardsContainer>
      </S.EquipeContainer>
    </S.EquipeWrapper>
  )
}

export default Equipe
