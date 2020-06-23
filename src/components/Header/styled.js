import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuWrapper = styled.div`
  background-color: #003D1D;
  height: 120px;
  width: 100vw;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  width: 80%;
  margin: 20px auto;
`

export const MenuGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuItem = styled.li`
  list-style: none;
`

export const MenuLink = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;

  padding: 13px 30px;
  color: white;
  text-decoration: none;

  &.active {
    border-bottom: 4px solid #FFFF
  }
`

export const LogoLink = styled(Link)`
  /* background-color: pink; */
  width: 262px;
  height: 77px;
`