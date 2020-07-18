import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "Versagro-logo.png" }) {
          childImageSharp {
            fixed (width: 172, height: 40) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fixed={logoImage.childImageSharp.fixed} />
}

export default Logo
