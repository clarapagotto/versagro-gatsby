import React from 'react'
import { MenuWrapper, MenuGroup, MenuItem, MenuLink } from './styled'

const Header = () => {
  return (
    <MenuWrapper>
      <MenuGroup>
        <MenuItem>
        <MenuLink to='/'>Inicio</MenuLink>
        </MenuItem>
        <MenuItem>
        <MenuLink to='/sobre'>Sobre</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/about'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/about'>Contato</MenuLink>
        </MenuItem>
      </MenuGroup>
    </MenuWrapper>
  )
}

export default Header