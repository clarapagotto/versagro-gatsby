import React from "react"
import * as S from "./styled"

const AVersagroHeader = () => {
  return (
    <S.HeaderWrapper>
      <S.PageTitle>A Versagro</S.PageTitle>
      <S.BreadCrumb>
        <S.InicioLink to="/"> Início {">"}</S.InicioLink>
        <S.CurrentLink to="/a-versagro">A Versagro</S.CurrentLink>
      </S.BreadCrumb>
    </S.HeaderWrapper>
  )
}

export default AVersagroHeader
