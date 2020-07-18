import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const MarkQuotes = () => {
  const { markQuotes } = useStaticQuery(
    graphql`
      query {
        markQuotes: file(
          relativePath: { eq: "mark-quotes.png" }
        ) {
          childImageSharp {
            fixed(width: 54, height: 45) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.MarkQuotesWrapper fixed={markQuotes.childImageSharp.fixed} />
}

export default MarkQuotes