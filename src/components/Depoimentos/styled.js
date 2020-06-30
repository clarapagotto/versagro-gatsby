import styled from "styled-components"
//import CornImage from "./CornImage"
import cornImg from "../../images/corn.jpg"

export const DepoimentosHomeWrapper = styled.div`
  background: linear-gradient(#eef1f3 50%, #fff 50%);
  width: 100%;
  background-color: pink;
`
export const DepoimentosHomeContainer = styled.div`
  background-color: #e8eaee;
  background-image: url(${cornImg});
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 20px 5%;
  width: 80%;   
  
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
  display: flex;
  background-color: #fff;
  border-radius: 50px;
  height: 100px;
  justify-content: center;
  width: 49%;
`
export const CardAvatar = styled.div`
  background-color: pink;
  border: 3px solid #003d1d;
  border-radius: 50px;
  height: 50px;
  padding: 10px;
  width: 50px;
`
