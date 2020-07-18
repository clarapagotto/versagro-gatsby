import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


// eslint-disable-next-line react/prop-types
const SliderImage01 = ({ className, children }) => {
  const { sliderImage01 } = useStaticQuery(
    graphql`
      query {
        sliderImage01: file(
          relativePath: { eq: "slider-01.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1366) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={sliderImage01.childImageSharp.fluid} 
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
    >
      {children}
    </BackgroundImage>
  )
}

export default SliderImage01