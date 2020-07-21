import styled from "styled-components"
import media from "styled-media-query"

export const EquipeWrapper = styled.div`
  background-color: #fff;
  padding: 50px 0;
  width: 100%;
`
export const EquipeContainer = styled.div`
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
  margin-bottom: 20px;

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

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* background-color: red; */
`

export const Card = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 100%;
  /* background-color: orange; */
  
  padding: 5px;

  ${media.lessThan("medium")`
    margin: 0 auto 18px;
    width: 135px;
    height: 100%;
  `}
`

export const PersonName = styled.h1`
  display: block;
  margin-top: 10px;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #003d1d;

  ${media.lessThan("950px")`
    font-size: 14px;
    line-height: 16px;
  `}
`

export const PersonDescription = styled.p`
  display: block;

  color: #696969;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;

  ${media.lessThan("950px")`
    font-size: 12px;
  `}
`
export const AvatarContainer = styled.div`
  height: 100%;
  width: 100%;
`
