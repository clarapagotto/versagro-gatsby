import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CornImageWrapper = styled(Img)`
  border-radius: 0 0 20px 20px;
  height: 100%;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    border-radius: 20px;
  `}
`
