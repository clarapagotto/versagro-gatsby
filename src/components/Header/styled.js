import styled, { css } from "styled-components"
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
  /* background-color: orange; */

  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 2px auto;
`

export const LogoLink = styled(Link)`
  /* background-color: yellow; */

  padding-top: 40px;
  width: 262px;
  height: 77px;
`

export const MenuGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0 2px;
`

// export const MenuItem = styled.div`
//   width: 120px;
//   text-align: center;


//   padding: 0 2px 0 2px;

//   background-color: pink;
//   border: 1px solid #fff;

// `

export const MenuLink = styled(Link)`
  display: block;
  /* background-color: pink;
  border: 1px solid #fff; */

  padding: 17px 0 10px;

  width: 120px;
  height: 28px;
  text-align: center;

  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.5px;

  
  /* padding: 18px 30px; */

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

