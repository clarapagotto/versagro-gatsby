import React from "react"
import * as S from "./styled"
import CornImage from "./CornImage/index"

const DepoimentosHome = () => {
  return (
    <S.DepoimentosHomeWrapper>
      <S.DepoimentosHomeContainer>
        <S.Title>Depoimentos</S.Title>
        <S.DepoimentosHomeCardContainer>
          <S.DepoimentosHomeCard>
            <S.CardAvatar />
          </S.DepoimentosHomeCard>
          <S.DepoimentosHomeCard>
            <S.CardAvatar />
          </S.DepoimentosHomeCard>
        </S.DepoimentosHomeCardContainer>
      </S.DepoimentosHomeContainer>
    </S.DepoimentosHomeWrapper>
  )
}

export default DepoimentosHome
