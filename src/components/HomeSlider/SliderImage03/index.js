import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const SliderImage03 = () => {
  const { sliderImage03 } = useStaticQuery(
    graphql`
      query {
        sliderImage03: file(
          relativePath: { eq: "slider-03.png" }
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
    <S.SliderImage03Wrapper
      fluid={sliderImage03.childImageSharp.fluid}
    />
  )
}

export default SliderImage03