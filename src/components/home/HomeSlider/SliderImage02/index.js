import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

// eslint-disable-next-line react/prop-types
const SliderImage02 = ({ className, children }) => {
  const { sliderImage02 } = useStaticQuery(
    graphql`
      query {
        sliderImage02: file(
          relativePath: { eq: "slider-02.png" }
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
      fluid={sliderImage02.childImageSharp.fluid} 
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
    >
      {children}
    </BackgroundImage>
  )
}

export default SliderImage02