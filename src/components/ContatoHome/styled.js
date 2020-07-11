import styled from "styled-components"
import media from "styled-media-query"
import ContatoImage from "../../images/field.png"
import { Link } from "gatsby"

export const ContatoWrapper = styled.div`
  background-image: linear-gradient(
      0.22deg,
      #003d1d 0%,
      rgba(0, 61, 29, 0) 300%
    ),
    url(${ContatoImage});
  background-position: top;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${media.lessThan("medium")`
    padding-top: 0;
  `}
`

export const ContatoContainer = styled.div`
  /* background-color: orange; */
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 75%;
  height: 90%;

  ${media.lessThan("large")`
    /* screen width is less than 1170px (large) */
    width: 85%;
  `}

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 95%;
    height: 80%;
  `}

  ${media.lessThan("1016px")`
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    
  `}

`

export const TextContainer = styled.div`
  /* background-color: yellowgreen; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 70%;
  margin-right: 6px;

  font-family: Raleway;

  ${media.lessThan("1016px")`
    width: 85%;
  `}
  ${media.lessThan("medium")`
    justify-content: space-evenly;
  `}
  
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 44px;
  color: #ffffff;

  ${media.lessThan("medium")`
    font-size: 26px;
    line-height: 31px;
  `}
`

export const Text = styled.h1`
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 0 35px;

  ${media.lessThan("1016px")`
    padding: 0px 0 10px;
    
  `}

  ${media.lessThan("medium")`
    font-size: 16px;
    line-height: 19px;
  `}
`

export const FormContainer = styled.div`
  /* background-color: tomato; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 660px;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #969696;

  ${media.lessThan("1016px")`
    width: 85%;
    
  `}
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: #fff;
  padding: 4px;
  border-radius: 18px;

  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-indent: 16px;

  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;

  &:focus {
    outline: none;
  }

  ${media.lessThan("1016px")`
    height: 30px;
  `}
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("1016px")`
    margin: 10px 0;
  `}

  ${media.lessThan("600px")`
    margin: 5px 0;
  `}
`

export const InputMessage = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding-top: 10px;
  border-radius: 18px;

  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: inherit;

  text-indent: 16px;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;

  &:focus {
    outline: none;
  }
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const SubmitButton = styled(Link)`
  display: block;
  background: rgba(138, 109, 55, 0.8);
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;

  width: 100px;

  font-family: Raleway;
  font-weight: inherit;
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;

  &:hover,
  &.active {
    background: #20804e;
  }
`
