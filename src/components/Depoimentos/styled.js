import styled, { css } from "styled-components"
import { Link } from "gatsby"
import SunsetField from "../../images/sunset-field.jpg"

export const DepoimentosHomeWrapper = styled.div`
  background: #fff;
  width: 100%;
`
export const DepoimentosHomeContainer = styled.div`
  background-image: linear-gradient(to top, transparent -50%, #e8eaee 70%),
    url(${SunsetField});
  background-position: top;
  border-radius: 50px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 50px 7.5%;
  width: 75%;
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
`

export const DepoimentosHomeCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`

export const DepoimentosHomeCard = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0 20px 0;
  width: 49%;
`
export const CardAvatar = styled.div`
  align-items: center;
  border: 3px solid #003d1d;
  border-radius: 50px;
  display: flex;
  height: 60px;
  padding: 2px;
  position: relative;
  top: 30px;
  width: 60px;
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardText = styled.p`
  color: #696969;
  font-size: 16px;
  font-style: italic;
  line-height: 24px;
  margin: 0 70px;
  text-align: justify;
`
export const MarkQuote = styled.div`
  height: 50px;
  margin: 0 50px;

  ${props =>
    props.flip === "horizontal-vertical" &&
    css`
      -webkit-transform: scaleX(-1);
      transform: rotate(180deg);
    `}
`
export const CardReadMore = styled(Link)`
  color: #003d1d;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  text-decoration: underline;
`

export const CardAuthor = styled.p`
  color: #696969;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  margin: 0 70px;
  position: relative;
  top: -30px;
`
