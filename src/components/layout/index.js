import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"
// import Header from '../Header'
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <S.LayoutWrapper>
        <GlobalStyles />
        <S.LayoutMain>{children}</S.LayoutMain>
        <Footer />
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
