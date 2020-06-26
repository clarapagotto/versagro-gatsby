import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const SliderImage01 = () => {
  const { sliderImage01 } = useStaticQuery(
    graphql`
      query {
        sliderImage01: file(
          relativePath: { eq: "slider-01.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1440, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.SliderImage01Wrapper
      fluid={sliderImage01.childImageSharp.fluid}
    />
  )
}

export default SliderImage01