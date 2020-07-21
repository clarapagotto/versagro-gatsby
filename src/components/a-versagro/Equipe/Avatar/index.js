import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid (maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fluid={avatar.childImageSharp.fluid} />
}

export default Avatar