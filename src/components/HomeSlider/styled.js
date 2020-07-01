import styled from "styled-components"
import {Link} from 'gatsby'


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