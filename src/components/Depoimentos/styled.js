<<<<<<< HEAD
import styled, { css } from "styled-components"
import CornImage from "../../images/sunset-field.jpg"
=======
import styled from "styled-components"
//import CornImage from "./CornImage"
import cornImg from "../../images/corn.jpg"
>>>>>>> da5ccb201b9c534e252a819570ad1a8f408c0ee8

export const DepoimentosHomeWrapper = styled.div`
  background: linear-gradient(#eef1f3 50%, #fff 50%);
  width: 100%;
  background-color: pink;
`
export const DepoimentosHomeContainer = styled.div`
<<<<<<< HEAD
  background-image: linear-gradient(to top, transparent 0%, #e8eaee 100%),
    url(${CornImage});
  background-position: center;
=======
  background-color: #e8eaee;
  background-image: url(${cornImg});
>>>>>>> da5ccb201b9c534e252a819570ad1a8f408c0ee8
  border-radius: 50px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
<<<<<<< HEAD
  padding: 50px 5%;
  width: 80%;
=======
  padding: 20px 5%;
  width: 80%;   
  
>>>>>>> da5ccb201b9c534e252a819570ad1a8f408c0ee8
`

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  color: #003d1d;
  font-family: "Fredoka One", sans-serif;
  font-size: 32px;
  line-height: 40px;

  &:after {
    content: "";
    border-bottom: 4px solid #003d1d;
    display: block;
    padding-top: 5px;
    width: 50px;
  }
`

export const DepoimentosHomeCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
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
export const CardReadMore = styled.a`
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
