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
            fluid(maxWidth: 257, maxHeight: 168) {
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
    />
  )
}

export default CornImage