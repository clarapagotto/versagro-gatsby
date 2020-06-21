import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuWrapper = styled.div`
  background-color: #003D1D;
  height: 80px;
  width: 100vw;
`

export const MenuGroup = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const MenuItem = styled.li`
  list-style: none;
`

export const MenuLink = styled(Link)`
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`