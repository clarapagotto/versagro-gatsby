import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: transparent;
  height: 100px;
  width: 100vw;

  ${props =>
    props.scroll > 0 &&
    css`
      background-color: rgba(102, 139, 119, ${props.scroll * (1 / 400)});
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    `}

  ${props =>
    props.scroll < 200 &&
    css`
      height: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      height: 60px;
    `}
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

  padding: 18px 30px;
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
  padding-top: 40px;
  width: 262px;
  height: 77px;
`
