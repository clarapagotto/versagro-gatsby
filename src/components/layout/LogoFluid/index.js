import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const LogoFluid = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "Versagro-logo.png" }) {
          childImageSharp {
            fluid (maxWidth: 172, maxHeight: 40) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} />
}

export default LogoFluid
