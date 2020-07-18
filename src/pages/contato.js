import React from "react"
import GlobalStyles from "../styles/global"
import Navbar from "../components/layout/Navbar"

import HomeSlider from "../components/home/HomeSlider"
import { SliderWrapper } from "../components/home/HomeSlider/styled"


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
