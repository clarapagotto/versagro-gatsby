import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import HeaderImage from "../../images/field.png"

export const HeaderWrapper = styled.div`
  background-image: linear-gradient(
      180.58deg,
      #003d1d 16.51%,
      rgba(109, 187, 146, 0) 328.99%,
      #fcfdfd 329.02%,
      #0e5530 329.05%
    ),
    url(${HeaderImage});
  background-position: top;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  width: 100%;
  height: 60vh;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const PageTitle = styled.h1`
  color: #fff;
  font-family: Raleway;
  font-size: 46px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15vh;
  

  ${media.lessThan("910px")`
    font-size: 40px;
  `}

  ${media.lessThan("470px")`
    font-size: 34px;
  `}

  ${media.lessThan("388px")`
    font-size: 30px;
  `}
`

export const BreadCrumb = styled.div`
  display: flex;
  font-family: Raleway;
  font-size: 16px;
  text-align: center;
`
export const InicioLink = styled(Link)`
  color: #fff;
  padding-right: 4px;

  &:hover, &.active {
    color: #ccc;
  }
`

export const CurrentLink = styled(Link)`
  color: #fff;
  font-weight: bold;

  &:hover, &.active {
    color: #ccc;
  }
`
