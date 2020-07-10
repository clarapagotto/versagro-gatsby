import React from "react"
import GlobalStyles from "../styles/global"
import Navbar from "../components/Navbar"

import HomeSlider from "../components/HomeSlider"
import { SliderWrapper } from "../components/HomeSlider/styled"


const ContatoPage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <SliderWrapper>
        <HomeSlider />
      </SliderWrapper>
    </>
  )
}

export default ContatoPage
