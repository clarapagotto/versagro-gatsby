import React from "react"
import * as S from "./styled"

import AgricuturalMachineImage from "../AgricuturalMachineImage"

const SolutionsHome = () => {
  return (
    <S.SolutionsHomeWrapper>
      <S.SolutionsHomeContainer>
        <S.Title>Soluções</S.Title>
        <S.SolutionsCard>
          <S.ImageCard>
            <AgricuturalMachineImage />
          </S.ImageCard>
          <S.CardContent>
            <S.CardTitle>Capacitação de produtores</S.CardTitle>
            <S.CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
              metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
              purus vitae justo consectetur commodo. Donec ultrices eros ac
              ligula mattis scelerisque.
            </S.CardDescription>
            <S.CardButton to="/about">Solicite um orçamento</S.CardButton>
          </S.CardContent>
        </S.SolutionsCard>
        <S.SolutionsCard>
          <S.ImageCard>
            <AgricuturalMachineImage />
          </S.ImageCard>
          <S.CardContent>
            <S.CardTitle>Capacitação de produtores</S.CardTitle>
            <S.CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
              metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
              purus vitae justo consectetur commodo. Donec ultrices eros ac
              ligula mattis scelerisque.
            </S.CardDescription>
            <S.CardButton to="/about">Solicite um orçamento</S.CardButton>
          </S.CardContent>
        </S.SolutionsCard>
        <S.SolutionsCard>
          <S.ImageCard>
            <AgricuturalMachineImage />
          </S.ImageCard>
          <S.CardContent>
            <S.CardTitle>Capacitação de produtores</S.CardTitle>
            <S.CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
              metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
              purus vitae justo consectetur commodo. Donec ultrices eros ac
              ligula mattis scelerisque.
            </S.CardDescription>
            <S.CardButton to="/about">Solicite um orçamento</S.CardButton>
          </S.CardContent>
        </S.SolutionsCard>
      </S.SolutionsHomeContainer>
    </S.SolutionsHomeWrapper>
  )
}

export default SolutionsHome
