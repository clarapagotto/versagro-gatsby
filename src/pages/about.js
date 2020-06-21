import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1> About Page </h1>
      <Link to="/" activeStyle={{color: 'red'}}>Vai para home</Link>
    </Layout>
  )
}

export default AboutPage
