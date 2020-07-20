import React from "react"
// import GlobalStyles from "../styles/global"
import Layout from '../components/layout'
import ContatoHeader from "../components/contato/Header"
import Contato from "../components/home/ContatoHome"

// import Maps fro../components/a-versagro/OndeEstamosaps'

const ContatoPage = () => {
  return (
    <Layout>
      <ContatoHeader />
      <Contato />
    </Layout>
  )
}

export default ContatoPage
