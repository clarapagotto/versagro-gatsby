import React from "react"
import * as S from "./styled"

const ContatoHeader = () => {
  return (
    <S.HeaderWrapper>
      <S.PageTitle>Contato</S.PageTitle>
      <S.BreadCrumb>
        <S.InicioLink to="/"> Início {">"}</S.InicioLink>
        <S.CurrentLink to="/contato">Contato</S.CurrentLink>
      </S.BreadCrumb>
    </S.HeaderWrapper>
  )
}

export default ContatoHeader
