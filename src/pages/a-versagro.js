import React from "react"
import Layout from "../components/layout"

import Header from "../components/a-versagro/Header"
import SobreNos from "../components/a-versagro/SobreNos"
import Estatisticas from "../components/a-versagro/Estatisticas"
import OndeEstamos from "../components/a-versagro/OndeEstamos"


const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <SobreNos />
      <Estatisticas />
      <OndeEstamos />
    </Layout>
  )
}

export default AboutPage
