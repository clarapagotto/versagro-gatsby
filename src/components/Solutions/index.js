import React from "react"
import * as S from "./styled"

import AgricuturalMachineImage from "../AgricuturalMachineImage"
import CoffeeImage from "../CoffeeImage"
import CornImage from "../CornImage"

const SolutionsHome = () => {
  return (
    <S.SolutionsHomeWrapper>
      <S.SolutionsHomeContainer>
        <S.Title>Soluções</S.Title>
        <S.SolutionsCard>
          <S.ImageCardLeft>
            <CoffeeImage />
          </S.ImageCardLeft>
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
          <S.CardContent>
            <S.CardTitle>Gestão de projetos</S.CardTitle>
            <S.CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt
              metus, ut faucibus velit nunc vitae augue. Curabitur hendrerit
              purus vitae justo consectetur commodo. Donec ultrices eros ac
              ligula mattis scelerisque.
            </S.CardDescription>
            <S.CardButton to="/about">Solicite um orçamento</S.CardButton>
          </S.CardContent>
          <S.ImageCardRight>
            <CornImage />
          </S.ImageCardRight>
        </S.SolutionsCard>
        <S.SolutionsCard>
          <S.ImageCardLeft>
            <AgricuturalMachineImage />
          </S.ImageCardLeft>
          <S.CardContent>
            <S.CardTitle>Consultoria técnica</S.CardTitle>
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
        <S.SeeMoreButton to="/about">Veja Mais</S.SeeMoreButton>
      </S.SolutionsHomeContainer>
    </S.SolutionsHomeWrapper>
  )
}

export default SolutionsHome
