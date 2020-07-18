import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const SunsetField = () => {
  const { sunsetField } = useStaticQuery(
    graphql`
      query {
        sunsetField: file(
          relativePath: { eq: "sunset-field.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 196) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.SunsetFieldWrapper
      fluid={sunsetField.childImageSharp.fluid}
    />
  )
}

export default SunsetField