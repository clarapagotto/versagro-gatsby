import React, { useState, useEffect } from "react"

import {
  Nav,
  NavContainer,
  LogoContainer,
  NavList,
  ListItem,
  NavLink,
  Burger,
  BurgerLine,
} from "./styled"
import Logo from "../Logo"

function Navbar() {

  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(0)


  useEffect(() => {
    window.onscroll = () => {
      handleScroll()
    }
  }, [])

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 0) {
      setScroll(document.documentElement.scrollTop)
    } else {
      setScroll(0)
    }
  }


  const toggleClassName = () => {
    const currentState = active
    setActive(!currentState)
  }


  return (
    <Nav scroll={scroll}>
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavList active={active ? 'activeMenu' : null} scroll={scroll}>
          <ListItem>
            <NavLink to="/">Início</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/a-versagro" activeClassName="active">A Versagro</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/solucoes" activeClassName="active">Soluções</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/cases" activeClassName="active">Cases</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contato" activeClassName="active">Contato</NavLink>
          </ListItem>
        </NavList>
        <Burger onClick={toggleClassName}>
          <BurgerLine active={active ? 'activeLine1' : null} ></BurgerLine>
          <BurgerLine active={active ? 'activeLine2' : null}></BurgerLine>
          <BurgerLine active={active ? 'activeLine3' : null}></BurgerLine>
        </Burger>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
