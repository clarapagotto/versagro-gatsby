import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SolutionsHome from "../components/Solutions"
import DepoimentosHome from "../components/Depoimentos"
<<<<<<< HEAD
// import ContatoHome from "../components/Contato"
=======
import BlogHome from "../components/Blog"
>>>>>>> 34cf5922b14a3b2149f7d9224ac00b59ec0ea727

import HomeSlider from "../components/HomeSlider"
import { SliderWrapper } from "../components/HomeSlider/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SliderWrapper>
      <HomeSlider />
    </SliderWrapper>
    <SolutionsHome />
<<<<<<< HEAD
    <DepoimentosHome />
    {/* <ContatoHome /> */}
=======
    <DepoimentosHome /> 
    <BlogHome />   
>>>>>>> 34cf5922b14a3b2149f7d9224ac00b59ec0ea727
  </Layout>
)

export default IndexPage
