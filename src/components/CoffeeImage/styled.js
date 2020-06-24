import styled from "styled-components"
import Img from "gatsby-image"

export const CoffeeImageWrapper = styled(Img)`
  border-radius: 0 20px 20px 0;
  height: 220px;
  -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
`