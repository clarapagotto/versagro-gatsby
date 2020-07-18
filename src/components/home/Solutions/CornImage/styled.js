import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CornImageWrapper = styled(Img)`
  border-radius: 20px 0 0 20px;
  height: 196px;
  -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
  width: 300px;

  ${media.lessThan("medium")`
  border-radius: 0 0 20px 20px;
  height: 100%;
  -webkit-mask-image: linear-gradient(to top, transparent 50%, black 100%);
  width: 100%;
  `}

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    display: none;
  `}
`
