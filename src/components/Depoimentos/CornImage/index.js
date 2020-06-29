import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const CornImage = () => {
  const { cornImage } = useStaticQuery(
    graphql`
      query {
        cornImage: file(
          relativePath: { eq: "corn.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 765, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.CornImageWrapper
      fluid={cornImage.childImageSharp.fluid}
      style={{ width: "765x" }}
    />
  )
}

export default CornImage