import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const ContatoImage = () => {
  const { contatoImage } = useStaticQuery(
    graphql`
      query {
        contatoImage: file(
          relativePath: { eq: "field.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1300, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.SunsetFieldWrapper
      fluid={contatoImage.childImageSharp.fluid}
    />
  )
}

export default ContatoImage