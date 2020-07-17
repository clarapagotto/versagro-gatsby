import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SlideContainer = styled.div`
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
    `}

  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const SlideCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 75%;
  margin-top: 35vh;

  ${media.lessThan("large")`
    width: 85%;
    margin-top: 50vh;
  `}
`

export const SlideCaption = styled.h1`
  font-family: Raleway;
  font-size: 36px;
  line-height: 50px;
  color: #ffffff;

  ${media.lessThan("910px")`
    font-size: 30px;
    line-height: 42px;
  `}

  ${media.lessThan("470px")`
    font-size: 24px;
    line-height: 32px;
  `}

  ${media.lessThan("388px")`
    font-size: 20px;
    line-height: 32px;
  `}
`

export const SliderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`

export const Break = styled.br``

export const SliderDot = styled.div`
  background-color: #fff;
  height: 14px;
  width: 14px;
  border-radius: 50%;

  &:hover {
    background-color: #888;
  }

  ${media.lessThan("medium")`
    height: 10px;
    width: 10px;
  `}
`

export const SliderLink = styled(Link)``

export const SlideCaptionButton = styled(Link)`
  background: rgba(138, 109, 55, 0.8);
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  float: left;

  width: 250px;

  font-family: Raleway;
  font-size: 16px;
  margin-top: 20px;
  padding: 12px 10px;
  text-decoration: none;
  text-align: center;

  &:hover,
  &.active {
    background: #20804e;
    transition: 0.4s;
  }

  ${media.lessThan("medium")`
    border: 1px solid #fff;
    width: 200px;
    font-size: 14px;
    margin-top: 25px;
    padding: 10px 8px;
  `}

  ${media.lessThan("470px")`
    margin-top: 15px;
    padding: 8px 6px;
  `}
`

export const StrongText = styled.p`
  display: inline-block;
  font-weight: 700;
`
