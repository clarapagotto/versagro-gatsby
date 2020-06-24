import styled from "styled-components"
import { Link } from "gatsby"

export const SolutionsHomeWrapper = styled.div`
  background-color: #eef1f3;
  width: 100vw;
  height: 1482px;
`
export const SolutionsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-top: 20px;
  width: 80%;
`

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
  color: #003d1d;
  font-family: "Fredoka One", cursive;
  font-size: 32px;
  line-height: 40px;

  &::after {
    content: "";
    display: block;
    width: 50px;
    border-bottom: 4px solid #003d1d;
  }
`
export const SolutionsCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  margin-top: 30px;
`
export const ImageCardLeft = styled.div`
  background: linear-gradient(0.32deg, #003d1d 50%, rgba(0, 61, 29, 0) 90%);
  border-radius: 0 20px 20px 0;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  height: 220px;
`
export const ImageCardRight = styled.div`
  background: linear-gradient(0.32deg, #003d1d 50%, rgba(0, 61, 29, 0) 90%);
  border-radius: 20px 0 0 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  height: 220px;
`

export const CardContent = styled.div`
  padding: 0 30px 0 30px;
`
export const CardTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 26px;
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
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  float: right;
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
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
  text-decoration: none;

  &:hover, &.active {
    text-decoration: underline;
  }
`
