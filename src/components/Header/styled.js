import styled from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.div`
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
`

export const MenuItem = styled.li`
  padding: 0 2px 0 2px;
  list-style: none;
`

export const MenuLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
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
  /* background-color: pink; */
  padding-top: 15px;
  width: 262px;
  height: 77px;
`
