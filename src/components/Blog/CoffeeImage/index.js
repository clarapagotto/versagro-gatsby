import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const CoffeeImage = () => {
  const { coffeeImage } = useStaticQuery(
    graphql`
      query {
        coffeeImage: file(
          relativePath: { eq: "coffee.jpg" }
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
    <S.CoffeeImageWrapper
      fluid={coffeeImage.childImageSharp.fluid}
    />
  )
}

export default CoffeeImage