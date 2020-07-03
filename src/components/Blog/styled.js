import styled from "styled-components"
import { Link } from "gatsby"

export const BlogHomeWrapper = styled.div`
  background-color: #fff;
  padding-top: 50px;
  width: 100%;
`
export const BlogHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BlogCard = styled.div`
  align-items: center;
  background: #eef1f3;
  border-radius: 20px;
  box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 20px;
  width: 31.35%;
`

export const ImageCard = styled.div`
  box-shadow: 0px 15px 5px -10px rgba(0, 0, 0, 0.25);
  display: block;
  margin: 0 30px;
  width: 257px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`

export const CardTag = styled.p`
  color: #696969;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 20px;
`

export const CardTitle = styled.h1`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 20px;
`
export const CardDescription = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  margin-top: 10px;
`
export const CardButton = styled(Link)`
  align-self: center;
  background: #003d1d;
  border-radius: 10px;
  border: none;
  color: #fff;
  display: block;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  margin-top: 20px;
  padding: 12px 20px;
  text-align: center;
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
  margin: 30px auto 50px auto;
  text-align: center;
  text-decoration: none;

  &:hover,
  &.active {
    text-decoration: underline;
  }
`
