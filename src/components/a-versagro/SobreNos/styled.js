import styled from "styled-components"
import media from "styled-media-query"

export const SobreNosWrapper = styled.div`
  background-color: #fff;
  padding-top: 50px;
  width: 100%;
`
export const SobreNosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 75%;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
    width: 90%;
  `}
`

export const Title = styled.h1`
  color: #003d1d;
  font-family: "Fredoka One", sans-serif;
  font-size: 36px;
  line-height: 40px;

  &:after {
    content: "";
    border-bottom: 3px solid #003d1d;
    display: block;
    padding-top: 5px;
    width: 60px;
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-left: 5%;
  `}

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    font-size: 32px;
  `}
`
export const Text = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  margin: 20px 0;

  ${media.lessThan("950px")`
    font-size: 14px;
  `}
`
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
export const Card = styled.div`
  align-items: center;
  background: #efefff;
  border-radius: 20px;
  box-shadow: 0 90px 5px -85px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 30%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`
export const TitleCardContent = styled.div`
  background: #003d1d;
  border-radius: 0 0 20px 20px;

  height: 50px;
  width: 90%;
`
export const TitleCard = styled.h1`
  align-self: center;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-size: 28px;
  padding: 10px;
  text-align: center;

  ${media.lessThan("medium")`
    font-size: 24px;
  `}
`
export const TextCard = styled.p`
  color: #696969;
  font-size: 16px;
  font-style: italic;
  line-height: 24px;
  margin: 10px 0;
  text-align: justify;

  width: 80%;

  ${media.lessThan("950px")`
    font-size: 14px;
  `}
`
export const Item = styled.ul`
  color: #696969;
  font-size: 16px;
  line-height: 10px;
  list-style: square inside;
  margin: 10px 0;
  text-align: center;

  width: 80%;
`
