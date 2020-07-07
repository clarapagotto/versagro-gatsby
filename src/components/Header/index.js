import React, { useEffect, useState } from "react"
import {
  MenuWrapper,
  MenuContainer,
  MenuGroup,
  MenuItem,
  MenuLink,
  LogoLink,
} from "./styled"
import Logo from "../Logo"

function Header() {
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

  return (
    <MenuWrapper scroll={scroll}>
      <MenuContainer>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <MenuGroup>
          <MenuLink to="/" activeClassName="active">
            Início
          </MenuLink>

          <MenuLink to="/a-versagro" activeClassName="active" scroll={scroll}>
            A Versagro
          </MenuLink>

          <MenuLink to="/solucoes" activeClassName="active">
            Soluções
          </MenuLink>

          <MenuLink to="/cases" activeClassName="active">
            Cases
          </MenuLink>

          <MenuLink to="/blog" activeClassName="active">
            Blog
          </MenuLink>

          <MenuLink to="/contato" activeClassName="active">
            Contato
          </MenuLink>
        </MenuGroup>
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
