import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const FooterWrapper = styled.div`
  position: relative;
  /* top: 1482px; */
  width: 100%;
  padding-bottom: 50px;
  background-color: #003d1d;
  display: flex;
  justify-content: center;
`

export const FooterContainer = styled.div`
  /* background-color: pink; */

  display: flex;
  width: 75%;
  height: 240px;
  /* border-top: 2px solid #fff; */

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  `}
`

export const LogoContainer = styled.div`
  /* background-color: yellowgreen; */

  width: 35%;
  height: 100%;
  padding: 20px 0;
  margin-right: 40px;

  ${media.lessThan("medium")`
    display: none;
  `}
`
export const LogoContainerResp = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: inline;
    text-align: right;
    position: relative;
    margin-right: 0;
    float: right; 
    width: 30%;
    min-width: 150px;
    padding: 19px 0;
  `}
`

export const InfoContainer = styled.div`
  padding-top: 40px;

  display: flex;
  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    padding-top: 0;
  `}
  ${media.lessThan("small")`
    flex-direction: column;
  `}
`

export const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  color: white;

  ${media.lessThan("medium")`
    justify-content: space-between;
  `}
`

export const LinksGroup = styled.div`
  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    width: auto;
    margin: 0 7%;
  `}
`

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 15px;

  ${media.lessThan("medium")`
    width: auto;
    padding-right: 10%;
  `}

  ${media.lessThan("small")`
    padding-right: 0;
  `}
`

export const LinkItem = styled.li`
  list-style: none;
  padding: 1px 0;
`

export const FooterLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`

export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  ${media.lessThan("medium")`
    height: 40px;
  `}

  ${media.lessThan("small")`
    margin-top: 20px;
  `}  

  /* ${media.lessThan("small")`
    display: none;
  `} */
`

// export const SelectContainerResp = styled.div`
//   display: none;

//   ${media.lessThan("small")`
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     margin-bottom: 10px;
//   `}
// `

export const AddressContainer = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  color: white;

  ${media.lessThan("1016px")`
    font-size: 12px;
    line-height: 21px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  `}

  ${media.lessThan("small")`
    align-items: center;
  `}
`
export const AddressList = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressItem = styled.div`
  align-items: baseline;
  justify-content: flex-end;
  height: 25px;
  padding: 1px 0;
  display: flex;

  ${media.lessThan("small")`
    justify-content: center;
    text-align: center;
  `}

  ${media.lessThan("small")`
    flex-direction: row-reverse;
  `}
`

export const IconWrapper = styled.div`
  height: 15px;
  padding: 2px;
  width: 1em;

  ${media.lessThan("600px")`
    width: 1.5em;
  `}
`

export const AddressText = styled.p`
  display: block;
  padding: 0 5px;
`

export const LanguageSelect = styled.select`
  width: 90%;
  height: 45%;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 18px;
  -webkit-appearance:none;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: #969696;

  &:focus {
    outline: none;
  }

  ${media.lessThan("medium")`
    width: 100%;
    height: 100%;
  `}
`

export const LanguageOption = styled.option`
  font-weight: normal;
`
