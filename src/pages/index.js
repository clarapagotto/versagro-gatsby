import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SolutionsHome from "../components/Solutions"

import HomeSlider from "../components/HomeSlider"
import { SliderWrapper } from "../components/HomeSlider/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderWrapper>
      <HomeSlider />
    </SliderWrapper>
    <SolutionsHome />
  </Layout>
)

export default IndexPage
