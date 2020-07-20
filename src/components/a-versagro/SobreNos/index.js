import React from "react"
import * as S from "./styled"

const SobreNos = () => {
  return (
    <S.SobreNosWrapper>
      <S.SobreNosContainer>
        <S.Title>Sobre Nós</S.Title>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula
          nisl, congue sed rutrum id, tincidunt sed ex. Nam aliquam justo a urna
          tempus, eget tincidunt neque volutpat. Sed sit amet posuere sapien.
          Fusce vitae turpis vel erat dapibus imperdiet. Pellentesque accumsan
          justo massa, eu vestibulum arcu fringilla ac. Mauris lectus sem,
          dignissim at convallis vel, euismod sed enim. Aenean sit amet orci
          quis purus tristique viverra at a lectus. Nulla arcu nunc, porttitor
          eu accumsan in, malesuada quis libero. Phasellus quam leo, rutrum sit
          amet tortor egestas, volutpat venenatis elit. Sed nec velit eget dolor
          volutpat laoreet a non dolor. Proin auctor viverra tristique.
        </S.Text>
        <S.CardsContainer>
          <S.Card>
            <S.TitleCardContent>
              <S.TitleCard>Missão</S.TitleCard>
            </S.TitleCardContent>
            <S.TextCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ligula nisl, congue sed rutrum id, tincidunt sed ex.
            </S.TextCard>
          </S.Card>
          <S.Card>
            <S.TitleCardContent>
              <S.TitleCard>Visão</S.TitleCard>
            </S.TitleCardContent>
            <S.TextCard>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ligula nisl, congue sed rutrum id, tincidunt sed ex.
            </S.TextCard>
          </S.Card>
          <S.Card>
            <S.TitleCardContent>
              <S.TitleCard>Valores</S.TitleCard>
            </S.TitleCardContent>
              <S.Item>Lorem ipsum;</S.Item>
              <S.Item>Lorem ipsum;</S.Item>
              <S.Item>Lorem ipsum;</S.Item>
              <S.Item>Lorem ipsum.</S.Item>
          </S.Card>
        </S.CardsContainer>
      </S.SobreNosContainer>
    </S.SobreNosWrapper>
  )
}

export default SobreNos
