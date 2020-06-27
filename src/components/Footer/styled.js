import styled from "styled-components"
import { Link } from "gatsby"

export const FooterWrapper = styled.div`
  position: relative;
  top: 1482px;
  width: 100%;
  height: 345px;
  background-color: #003d1d;
`

export const FooterContainer = styled.div`
  /* background-color: pink; */

  display: flex;
  width: 80%;
  height: 240px;
  margin: 0 auto 104px;
  border-top: 2px solid #fff;
`

export const LogoContainer = styled.div`
  /* background-color: yellowgreen; */

  width: 365px;
  height: 100%;
  padding: 19px 0;
`

export const InfoContainer = styled.div`
  /* background-color: tomato; */
  padding-top: 40px;

  display: flex;
  width: 100%;
  height: 100%;
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
`

export const LinksGroup = styled.div`
  width: 100%;
  height: 100%;
`

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
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
`

export const AddressContainer = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  color: white;
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
`

export const IconWrapper = styled.div`
  height: 15px;
  padding: 2px;
  width: 15px;
`

export const AddressText = styled.p`
  display: block;
  padding: 0 5px;
`

export const LanguageSelect = styled.select`
  width: 90%;
  height: 50%;
  background-color: #fff;
  padding: 20px;
  border-radius: 18px;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #969696;

  &:focus {
    outline: none;
  }
`

export const LanguageOption = styled.option`
  font-weight: normal;
`
