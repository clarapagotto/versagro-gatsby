import styled from "styled-components"
import media from "styled-media-query"
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    flex-direction: column;
  `}
`

export const BlogCard = styled.div`
  align-items: center;
  background: #efefff;
  border-radius: 20px;
  box-shadow: 0 20px 5px -15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 20px;
  width: 31.35%;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    background: #fff;
    border-radius: 0;
    border-bottom: 1px solid #003d1d;
    box-shadow: none;
    flex-direction: row;
    width: 100%;
  `}
`

export const ImageCard = styled.div`
  box-shadow: 0px 15px 5px -10px rgba(0, 0, 0, 0.25);
  display: block;
  margin: 0 30px;
  height: 168px;
  width: 257px;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    margin: 0;
    height: 100%;
    width: 70%;
  `}

  ${media.lessThan("950px")`
    width: 80%;
  `}

  ${media.lessThan("600px")`
    display: none;
  `}
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    display: block;
    margin: 0 0 0 30px;
  `}
`

export const CardTag = styled.p`
  color: #696969;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 20px;

  ${media.lessThan("950px")`
    font-size: 14px;
  `}
`

export const CardTitle = styled.h1`
  color: #003d1d;
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 20px;

  ${media.lessThan("950px")`
    margin-top: 10px;
    font-size: 24px;
  `}
`
export const CardDescription = styled.p`
  color: #696969;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  margin-top: 10px;

  ${media.lessThan("950px")`
    font-size: 14px;
  `}
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

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    float: left;        
  `}

  ${media.lessThan("950px")`
    font-size: 14px;
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
