import React, { useEffect, useState } from "react"
import {
  MenuWrapper,
  MenuContainer,
  MenuGroup,
  MenuItem,
  MenuLink,
  LogoLink,
  Burger,
  BurgerLine
} from "./styled"
import Logo from "../../layout/Logo"

function Header() {
  const [scroll, setScroll] = useState(0)
  const [active, setActive] = useState(false)

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

    if (!currentState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <MenuWrapper scroll={scroll}>
      <MenuContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <MenuGroup active={active ? 'activeMenu' : null}>
          <MenuItem>
            <MenuLink to="/" activeClassName="active">
              Início
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/a-versagro" activeClassName="active" scroll={scroll}>
              A Versagro
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/solucoes" activeClassName="active">
              Soluções
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/cases" activeClassName="active">
              Cases
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog" activeClassName="active">
              Blog
            </MenuLink>     
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contato" activeClassName="active">
              Contato
            </MenuLink>
          </MenuItem>
        </MenuGroup>
        <Burger onClick={toggleClassName}>
          <BurgerLine active={active ? 'activeLine1' : null} ></BurgerLine>
          <BurgerLine active={active ? 'activeLine2' : null}></BurgerLine>
          <BurgerLine active={active ? 'activeLine3' : null}></BurgerLine>
        </Burger>
      </MenuContainer>
    </MenuWrapper>
  )
}
//testtest

export default Header

// import React, { useEffect, useState } from "react"
// import {
//   MenuWrapper,
//   MenuContainer,
//   MenuGroup,
//   MenuItem,
//   MenuLink,
//   LogoLink,
// } from "./styled"
// import Logo from "../Logo"

// function Header() {
//   const [scroll, setScroll] = useState(0)

//   useEffect(() => {
//     window.onscroll = () => {
//       handleScroll()
//     }
//   }, [])

//   const handleScroll = () => {
//     if (document.documentElement.scrollTop > 0) {
//       setScroll(document.documentElement.scrollTop)
//     } else {
//       setScroll(0)
//     }
//   }

//   return (
//     <MenuWrapper scroll={scroll}>
//       <MenuContainer>
//         <LogoLink to="/">
//           <Logo />
//         </LogoLink>
//         <MenuGroup>
//           <MenuItem>
//             <MenuLink to="/" activeClassName="active">
//               Início
//             </MenuLink>
//           </MenuItem>
//           <MenuItem>
//             <MenuLink to="/a-versagro" activeClassName="active" scroll={scroll}>
//               A Versagro
//             </MenuLink>
//           </MenuItem>
//           <MenuItem>
//             <MenuLink to="/solucoes" activeClassName="active">
//               Soluções
//             </MenuLink>
//           </MenuItem>
//           <MenuItem>
//             <MenuLink to="/cases" activeClassName="active">
//               Cases
//             </MenuLink>
//           </MenuItem>
//           <MenuItem>
//             <MenuLink to="/blog" activeClassName="active">
//               Blog
//             </MenuLink>
//           </MenuItem>
//           <MenuItem>

//             <MenuLink to="/contato" activeClassName="active">
//               Contato
//             </MenuLink>
//           </MenuItem>
//         </MenuGroup>
//       </MenuContainer>
//     </MenuWrapper>
//   )

// }
// //testtest

// export default Header
