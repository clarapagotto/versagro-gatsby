import React from "react"
import * as S from "./styled"

import AgricuturalMachineImage from "./AgricuturalMachineImage"
import CoffeeImage from "./CoffeeImage"
import CornImage from "./CornImage"

const BlogHome = () => {
  return (
    <S.BlogHomeWrapper>
      <S.BlogHomeContainer>
        <S.Title>Blog</S.Title>
        <S.CardContainer>
          <S.BlogCard>
            <S.ImageCard>
              <CoffeeImage />
            </S.ImageCard>
            <S.CardContent>
              <S.CardTag>Suinocultura</S.CardTag>
              <S.CardTitle>Lorem ipsum dolor sit amet consectetur</S.CardTitle>
              <S.CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt...
              </S.CardDescription>
              <S.CardButton>Leia mais</S.CardButton>
            </S.CardContent>
          </S.BlogCard>
          <S.BlogCard>
            <S.ImageCard>
              <AgricuturalMachineImage />
            </S.ImageCard>
            <S.CardContent>
              <S.CardTag>Suinocultura</S.CardTag>
              <S.CardTitle>Lorem ipsum dolor sit amet consectetur</S.CardTitle>
              <S.CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt...
              </S.CardDescription>
              <S.CardButton to="/blog">Leia mais</S.CardButton>
            </S.CardContent>
          </S.BlogCard>
          <S.BlogCard>
            <S.ImageCard>
              <CornImage />
            </S.ImageCard>
            <S.CardContent>
              <S.CardTag>Suinocultura</S.CardTag>
              <S.CardTitle>Lorem ipsum dolor sit amet consectetur</S.CardTitle>
              <S.CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim, sem eget tincidunt faucibus, ipsum eros tincidunt...
              </S.CardDescription>
              <S.CardButton>Leia mais</S.CardButton>
            </S.CardContent>
          </S.BlogCard>
        </S.CardContainer>
        <S.SeeMoreButton>Veja mais</S.SeeMoreButton>
      </S.BlogHomeContainer>
    </S.BlogHomeWrapper>
  )
}

export default BlogHome
