import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed (width: 262, height: 77) {
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
