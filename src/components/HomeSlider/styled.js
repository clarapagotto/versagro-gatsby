import styled from "styled-components"
import { Link } from "gatsby"

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
`

export const SliderLink = styled(Link)``

export const SlideCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* background-color: orange; */

  height: 250px;
  top: 270px;
  margin-left: 175px;

  position: absolute;
  z-index: 2;
`

export const SlideCaption = styled.div`
  font-family: Raleway;
  font-size: 36px;
  line-height: 50px;
  color: #ffffff;
`

export const SlideCaptionButton = styled(Link)`
  background: rgba(138, 109, 55, 0.8);
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  float: left;

  width: 200px;


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
`

export const StrongText = styled.h1`
  display: inline-block;
  font-weight: 700;
`
