import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const AgricuturalMachineImage = () => {
  const { agricuturalMachineImage } = useStaticQuery(
    graphql`
      query {
        agricuturalMachineImage: file(
          relativePath: { eq: "agricultural-machine.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 257, maxHeight: 257) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.AgricuturalMachineImageWrapper
      fluid={agricuturalMachineImage.childImageSharp.fluid}
    />
  )
}

export default AgricuturalMachineImage
