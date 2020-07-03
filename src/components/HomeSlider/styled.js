import styled from "styled-components"
import { Link } from "gatsby"

export const SliderWrapper = styled.div`
  height: 650px;
  width: 100%;
  margin: 0 auto;
`

export const Break = styled.br`
`

export const SliderDot = styled.div`
  background-color: #fff;
  height: 14px;
  width: 14px;
  border-radius: 50%;

  &:hover {
    background-color: #b4a734;
  }
`

export const SliderLink = styled(Link)``

export const SlideCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* background-color: orange; */

  width: 586px;
  height: 250px;
  top: 220px;
  margin-left: 183px;

  position: absolute;
  z-index: 2;
`

export const SlideCaption = styled.div`
  font-family: Raleway;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
`

export const SlideCaptionButton = styled(Link)`
  background: rgba(107, 99, 42, 0.8);
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  
  width: 150px;

  font-size: 16px;  
  margin-top: 20px;
  padding: 12px 20px;
  text-decoration: none;
  text-align: center;

  &:hover,
  &.active {
    background: #b4a734;
  }
`

export const StrongText = styled.h1`
  display: inline-block;
  font-weight: 700;
`