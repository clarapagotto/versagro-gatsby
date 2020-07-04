import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const SolutionsHomeWrapper = styled.div`
  background-color: #fff;
  height: 1000px;
  width: 100%;
`
export const SolutionsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-top: 20px;
  width: 75%;
`
export const Title = styled.h1`
  color: #003d1d;
  font-family: "Fredoka One", "Roboto", sans-serif;
  font-size: 36px;
  line-height: 40px;
  margin-top: 20px;

  &:after {
    content: "";
    border-bottom: 3px solid #003d1d;
    display: block;
    padding-top: 5px;
    width: 60px;    
  }
`

export const SolutionsCard = styled.div`
  align-items: center;
  background: #efefff;
  border-radius: 20px;
  box-shadow: 0 100px 5px -95px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 250px;
  justify-content: space-between;  
  margin-top: 30px;
`

export const ImageCard = styled.div`
  background: linear-gradient(0.32deg, #003d1d 50%, rgba(0, 61, 29, 0) 90%);
  border-radius: 0 20px 20px 0;
  box-shadow: 0px 10px 4px -5px rgba(0, 0, 0, 0.2);
  height: 220px;

  ${props =>
    props.flip === "horizontal" &&
    css`
      border-radius: 20px 0 0 20px;
    `}
`

export const CardContent = styled.div`
  margin: 0 30px;
`
export const CardTitle = styled.h1`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const CardDescription = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
`
export const CardButton = styled(Link)`
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
    background: #20804e;
    transition: 0.4s;
  }
`
export const SeeMoreButton = styled(Link)`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 30px auto 50px auto;
  text-align: center;
  text-decoration: none;

  &:hover,
  &.active {
    text-decoration: underline;
  }
`
