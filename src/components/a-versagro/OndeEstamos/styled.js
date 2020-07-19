import styled from "styled-components"
import media from "styled-media-query"
import { LocationOn } from "@styled-icons/material/LocationOn"
// import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

export const CustomMapStyle = createGlobalStyle`
  .mapboxgl-ctrl-group {
    /* display: flex; */
  }
`
export const ButtonsContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 10px 40px;
`

export const OndeEstamosWrapper = styled.div`
  background-color: #EEF1F3;
  padding: 50px 0;
  width: 100%;
`

export const OndeEstamosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 75%;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
    width: 90%;
  `}
`
export const Title = styled.h1`
  color: #003d1d;
  font-family: "Fredoka One", sans-serif;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 20px;

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
export const Icon = styled(LocationOn)`
  color: #003d1d;
  height: 30px;
  width: 30px;
  
`
