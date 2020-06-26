import React from "react"
import PropTypes from "prop-types"

import * as S from './styled'
import GlobalStyles from '../../styles/global'
import Header from '../Header'
import Footer from '../Footer'


const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
      <S.LayoutMain>{children}</S.LayoutMain>
      <Footer />
    </S.LayoutWrapper>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
