import React from "react"
import Layout from "../components/layout"

import Header from "../components/a-versagro/Header"
import SobreNos from "../components/a-versagro/SobreNos"
import OndeEstamos from "../components/a-versagro/OndeEstamos"


const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <SobreNos />
      <OndeEstamos />
    </Layout>
  )
}

export default AboutPage
