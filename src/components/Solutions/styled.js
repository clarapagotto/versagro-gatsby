import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const SolutionsHomeWrapper = styled.div`
  background-color: #eef1f3;
  height: 1482px;
  width: 100%;
`
export const SolutionsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-top: 20px;
  width: 80%;
`

export const SolutionsCard = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 100px 5px -95px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 250px;
  justify-content: space-between;  
  margin-top: 30px;
`

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  color: #003d1d;
  font-family: "Fredoka One", "Roboto", sans-serif;
  font-size: 32px;
  line-height: 40px;

  &:after {
    content: "";
    border-bottom: 4px solid #003d1d;
    display: block;
    width: 50px;    
  }
`

export const ImageCard = styled.div`
  background: linear-gradient(0.32deg, #003d1d 50%, rgba(0, 61, 29, 0) 90%);
  border-radius: 0 20px 20px 0;
  box-shadow: 0px 15px 5px -10px rgba(0, 0, 0, 0.25);
  height: 220px;

  ${props =>
    props.flip === "horizontal" &&
    css`
      border-radius: 20px 0 0 20px;
    `}
`

export const CardContent = styled.div`
  margin: 0 30px 0 30px;
`
export const CardTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const CardDescription = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 23px;
  text-align: justify;
`
export const CardButton = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  background: #003d1d;
  border-radius: 10px;
  border: none;
  color: #fff;
  float: right;
  font-family: "Raleway", sans-serif;
  font-size: 16px;  
  margin-top: 20px;
  padding: 12px 20px;
  text-decoration: none;

  &:hover,
  &.active {
    background: #b4a734;
  }
`
export const SeeMoreButton = styled(Link)`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  text-decoration: none;

  &:hover,
  &.active {
    text-decoration: underline;
  }
`
