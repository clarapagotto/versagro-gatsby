import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: transparent;
  height: 100px;
  width: 100%;

  ${props =>
    props.scroll > 0 &&
    css`
      /* background-color: rgba(74, 138, 104, ${props.scroll * (1 / 400)}); */
      background-color: rgba(0, 61, 29, ${props.scroll * (1 / 400)});
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
    `}

  ${props =>
    props.scroll < 200 &&
    css`
      height: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      background-color: rgba(0, 61, 29, 1);
      height: 60px;
    `}
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 2px auto;

`

export const LogoLink = styled(Link)`
  margin-right: 20px;
  padding-top: 40px;
  width: 262px;
  height: 77px;
`

export const MenuGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;

  ${media.lessThan("large")`

    position: absolute;
    right: 0px;
    height: 92vh;
    top: 100%;
    background-color: #effeff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;

    &::after{
      content: " ";
      height: 40vh;
    }

    ${props =>
      props.active === "activeMenu" &&
      css`
        transform: translateX(0%);
      `}
    
  `}
`

export const MenuItem = styled.div`
  margin: 0 10px;

  ${media.lessThan("large")`
    width: 100%
  `}
`

export const MenuLink = styled(Link)`
  display: block;
  padding: 15px 22px;
  white-space: nowrap;

  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.5px;
  color: white;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    border-bottom: 4px solid #8a6d37;
  }

  &.active {
    font-weight: bold;
    border-bottom: 4px solid #ffff;
  }

  ${media.lessThan("large")`
    color: rgba(0, 61, 29, 1);
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    &:hover, &.active {
      font-weight: bold;
      border-bottom: 1px solid #ddd;
  }
  `}
`

export const Burger = styled.div`
  display: none;
  margin-bottom: 2px;
  cursor: pointer;

  ${media.lessThan("large")`
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
      transform: rotate(45deg) translate(-5px,-6px);
    `}
`

// import styled, { css } from "styled-components"
// import { Link } from "gatsby"

// export const MenuWrapper = styled.div`
//   position: fixed;
//   display: flex;
//   align-items: center;
//   z-index: 1;
//   background-color: transparent;
//   height: 100px;
//   width: 100%;

//   ${props =>
//     props.scroll > 0 &&
//     css`
//       /* background-color: rgba(74, 138, 104, ${props.scroll * (1 / 400)}); */
//       background-color: rgba(0, 61, 29, ${props.scroll * (1 / 400)});
//       box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
//     `}

//   ${props =>
//     props.scroll < 200 &&
//     css`
//       height: calc(100px - ${props.scroll * (40 / 200)}px);
//     `}

//   ${props =>
//     props.scroll >= 200 &&
//     css`
//       background-color: rgba(0, 61, 29, 1);
//       height: 60px;
//     `}
// `

// export const MenuContainer = styled.div`
//   /* background-color: orange; */

//   display: flex;
//   justify-content: space-around;
//   width: 75%;
//   margin: 2px auto;
// `

// export const LogoLink = styled(Link)`
//   /* background-color: yellow; */

//   padding-top: 40px;
//   width: 262px;
//   height: 77px;
// `

// export const MenuGroup = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// export const MenuItem = styled.li`
//   padding: 0 2px 0 2px;
//   list-style: none;

//   /* background-color: pink;
//   border: 1px solid #fff; */
// `

// export const MenuLink = styled(Link)`
//   font-family: "Raleway", sans-serif;
//   font-weight: 300;
//   font-size: 14px;
//   line-height: 20px;
//   text-align: center;
//   letter-spacing: 1.5px;

//   padding: 18px 30px;
//   color: white;
//   text-decoration: none;

//   &:hover {
//     font-weight: bold;
//     border-bottom: 4px solid #8a6d37;
//   }

//   &.active {
//     font-weight: bold;
//     border-bottom: 4px solid #ffff;
//   }
// `
