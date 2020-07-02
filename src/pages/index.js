 import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SolutionsHome from "../components/Solutions"
import DepoimentosHome from "../components/Depoimentos"
import BlogHome from "../components/Blog"
import ContatoHome from "../components/ContatoHome"

import HomeSlider from "../components/HomeSlider"
import { SliderWrapper } from "../components/HomeSlider/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderWrapper>
      <HomeSlider />
    </SliderWrapper>
    <SolutionsHome />
    <DepoimentosHome /> 
    <BlogHome />
    <ContatoHome />
  </Layout>
)

export default IndexPage