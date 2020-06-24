import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SolutionsHome from "../components/Solutions"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SolutionsHome />
    <p>Welcome to your new Gatsby site.</p>
    <ul>
      <li>
       <Link to="/about" activeStyle={{color: 'red'}}>Vai para about</Link>
      </li>
      <li>
        <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
