import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const SliderImage02 = () => {
  const { sliderImage02 } = useStaticQuery(
    graphql`
      query {
        sliderImage02: file(
          relativePath: { eq: "slider-02.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1366, maxHeight: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.SliderImage02Wrapper
      fluid={sliderImage02.childImageSharp.fluid}
    />
  )
}

export default SliderImage02