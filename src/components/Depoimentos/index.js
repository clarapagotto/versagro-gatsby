import React from "react"
import * as S from "./styled"

import MarkQuote from "./MarkQuote"
import Avatar from "./Avatar"

const DepoimentosHome = () => {
  return (
    <S.DepoimentosHomeWrapper>
      <S.DepoimentosHomeContainer>
        <S.Title>Depoimentos</S.Title>
        <S.DepoimentosHomeCardContainer>
          <S.DepoimentosHomeCard>
            <S.CardAvatar><Avatar /></S.CardAvatar>
            <S.CardContent>
              <S.MarkQuote>
                <MarkQuote />
              </S.MarkQuote>
              <S.CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
                metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
                purus vitae justo... <S.CardReadMore>leia mais</S.CardReadMore>
              </S.CardText>
              <S.MarkQuote flip="horizontal-vertical">
                <MarkQuote />
              </S.MarkQuote>
              <S.CardAuthor>Lorem ipsum dolor sit</S.CardAuthor>
            </S.CardContent>
          </S.DepoimentosHomeCard>
          <S.DepoimentosHomeCard>
            <S.CardAvatar><Avatar /></S.CardAvatar>
            <S.CardContent>
              <S.MarkQuote>
                <MarkQuote />
              </S.MarkQuote>
              <S.CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
                metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
                purus vitae justo... <S.CardReadMore>leia mais</S.CardReadMore>
              </S.CardText>
              <S.MarkQuote flip="horizontal-vertical">
                <MarkQuote />
              </S.MarkQuote>
              <S.CardAuthor>Lorem ipsum dolor sit</S.CardAuthor>
            </S.CardContent>
          </S.DepoimentosHomeCard>
        </S.DepoimentosHomeCardContainer>
      </S.DepoimentosHomeContainer>
    </S.DepoimentosHomeWrapper>
  )
}

export default DepoimentosHome
