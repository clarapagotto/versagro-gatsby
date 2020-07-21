import React from "react"
import Layout from "../components/layout"

import Header from "../components/a-versagro/Header"
import SobreNos from "../components/a-versagro/SobreNos"
import Estatisticas from "../components/a-versagro/Estatisticas"
import OndeEstamos from "../components/a-versagro/OndeEstamos"
import Equipe from "../components/a-versagro/Equipe"


const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <SobreNos />
      <Estatisticas />
      <OndeEstamos />
      <Equipe />
    </Layout>
  )
}

export default AboutPage
