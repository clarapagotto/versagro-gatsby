import styled from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #003d1d;
  height: 70px;
  width: 100vw;
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  width: 80%;
  margin: 2px auto;
`

export const MenuGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* background-color: blue;
  flex: 1; */
`

export const MenuItem = styled.li`
  padding: 0 2px 0 2px;
  list-style: none;

  /* background-color: pink;
  border: 1px solid #fff; */
`

export const MenuLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 2px;

  padding: 13px 30px;
  color: white;
  text-decoration: none;

  &:hover {
    border-bottom: 4px solid #b4a734;
  }

  &.active {
    font-weight: bold;
    border-bottom: 4px solid #ffff;
  }
`

export const LogoLink = styled(Link)`
  padding-top: 15px;
  width: 262px;
  height: 77px;
`