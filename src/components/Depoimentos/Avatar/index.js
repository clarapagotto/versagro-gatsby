import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(
          relativePath: { eq: "avatar.png" }
        ) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatar.childImageSharp.fixed} />
}

export default Avatar