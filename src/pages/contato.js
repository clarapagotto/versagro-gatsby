import React from "react"
import GlobalStyles from "../styles/global"
// import Layout from '../components/layout'
import Navbar from "../components/layout/Navbar"
// import ContatoHeader from "../components/contato/Header"

import CountUp from "react-countup"

// import Maps fro../components/a-versagro/OndeEstamosaps'

const ContatoPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {/* <SliderWrapper>
        <HomeSlider />
      </SliderWrapper> */}
      <h1 style={{ fontSize: "40px" }}>
        <CountUp start={20} end={1000} duration={2.5} />
      </h1>
      {/* <Maps /> */}
    </>
  )
}

export default ContatoPage
