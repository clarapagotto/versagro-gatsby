import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1;

  ${props => (
    (props.scroll > 0 && props.scroll < 200) &&
    css`
      /* background-color: rgba(74, 138, 104, ${props.scroll * (1 / 400)}); */
      background-color: rgba(0, 61, 29, ${props.scroll * (1 / 400)});
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
    `)}

  ${props =>
    props.scroll < 200 &&
    css`
      height: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      background-color: rgba(0, 61, 29, 1);
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      height: 60px;
    `}

`

export const NavContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("large")`
    width: 85%;
  `}
`

export const LogoContainer = styled.div`
  width: 200px;
  height: 50px;
`

export const NavList = styled.ul`
  ${media.lessThan("802px")`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    width: 75%;
    height: 100vh;
    background-color: #effeff;
    top: 80px;
    margin: 0 25%;
    left: 100%;
    transition: ease-out left .3s;
    z-index: 99;

    ${props =>
      props.active === "activeMenu" &&
      css`
        left: 0;
      `}

  ${props =>
    props.scroll < 200 &&
    css`
      top: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      top: 60px;
    `}
  `}
`

export const ListItem = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
  ${media.lessThan("medium")`
    display: block;
    width: 100%;
  `}
`

export const NavLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.5px;
  color: white;
  text-decoration: none;
  white-space: nowrap;

  padding: 7px 13px 25px;

  &:hover {
    font-weight: bold;
    border-bottom: 4px solid #8a6d37;
  }

  &.active {
    font-weight: bold;
    border-bottom: 4px solid #ffff;
  }

  ${media.lessThan("910px")`
    font-size: 12px;
    padding: 7px 10px 25px;
  `}

  ${media.lessThan("802px")`
    display: block;
    width: 100%;
    color: rgba(0, 61, 29, 1);
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    padding: 15px 22px 25px;

    &:hover, &.active {
      font-weight: bold;
      border-bottom: 1px solid #ddd;
  `}
`
export const Burger = styled.div`
  display: none;
  margin: 26px;
  cursor: pointer;

  ${media.lessThan("802px")`
    display: block;
  `}
`

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: all .3s ease;

  ${props =>
    props.active === "activeLine1" &&
    css`
      transform: rotate(-45deg) translate(-5px, 6px);
    `}

  ${props =>
    props.active === "activeLine2" &&
    css`
      opacity: 0;
    `}

  ${props =>
    props.active === "activeLine3" &&
    css`
      transform: rotate(45deg) translate(-5px, -6px);
    `}
`
