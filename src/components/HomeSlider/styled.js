import styled from "styled-components"
import {Link} from 'gatsby'
import SliderImage01 from '../../images/slider-01.png'

export const SliderWrapper = styled.div`
  height: 650px;
  width: 100%;
  margin: 0 auto 0;
`

export const SliderDot = styled.div`
  background-color: #fff;
  height: 14px;
  width: 14px;
  border-radius: 50%;

  &:hover {
    background-color: #B4A734;
  } 
`

export const SliderLink = styled(Link)`
`

export const SlideCaption = styled.div`
  font-family: Raleway;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
`
export const SlideCaptionContainer = styled.div`
  background-color: orange;
  width: 586px;
  height: 250px;
  top: 190px;
  /* left: 18px; */
  margin-left: 183px;

  position: absolute;
  z-index: 2;
`