 import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SolutionsHome from "../components/home/Solutions"
import DepoimentosHome from "../components/home/Depoimentos"
import BlogHome from "../components/home/Blog"
import ContatoHome from "../components/home/ContatoHome"

import HomeSlider from "../components/home/HomeSlider"
import { SliderWrapper } from "../components/home/HomeSlider/styled"

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