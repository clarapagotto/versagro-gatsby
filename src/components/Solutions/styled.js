import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SolutionsHomeWrapper = styled.div`
  background-color: #fff;
  width: 100%;
`
export const SolutionsHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-top: 20px;
  width: 75%;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    width: 85%;
  `}

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 95%;
  `}
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

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-left: 5%;
  `}

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    font-size: 32px;
  `}
`

export const SolutionsCard = styled.div`
  align-items: center;
  background: #efefff;
  border-radius: 20px;
  box-shadow: 0 100px 5px -95px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const CardWrapper = styled.div`
  display: flex;

  ${props =>
    props.flip === "horizontal" &&
    css`
      flex-direction: row-reverse;
    `}

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
   flex-direction: column;
  `}
  
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 0 30px;
  `}
`

export const ImageCard = styled.div`
  background: linear-gradient(0.32deg, #003d1d 90%, rgba(0, 61, 29, 0) 90%);
  border-radius: 0 20px 20px 0;
  box-shadow: 0px 10px 4px -5px rgba(0, 0, 0, 0.2);
  margin: 25px 0;

  ${props =>
    props.flip === "horizontal" &&
    css`
      border-radius: 20px 0 0 20px;
    `}

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    width: 100%;
  `}

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background: #003d1d;
    border-radius: 0 0 20px 20px;
    margin: 0;
    height: 100px;
  `}
`

export const CardContent = styled.div`
  margin: 20px 30px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin: 20px 20px 0 20px;
  `}
`
export const CardTitle = styled.h1`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 38px;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    color: #fff;
    font-size: 24px;
    margin-bottom: 0;
    position: relative;
    top: -80px;
  `}

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    top: -100px;
  `}
`
export const CardDescription = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    position: relative;
    top: -40px;
  `}
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

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    position: relative;
    top: -40px;
  `}
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
