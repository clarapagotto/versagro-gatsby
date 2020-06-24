import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SolutionsHome from "../components/Solutions"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SolutionsHome />
  </Layout>
)

export default IndexPage
