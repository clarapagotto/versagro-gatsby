import styled from 'styled-components'
import ContatoImage from "../../images/field.png"
import { Link } from 'gatsby'

export const ContatoWrapper = styled.div`
  background-image: linear-gradient(0.22deg, #003D1D 0%, rgba(0, 61, 29, 0) 300%), url(${ContatoImage});
  background-position: top;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding-top: 30px;
  padding-bottom: 30px;
  
`

export const ContatoContainer = styled.div`
  /* background-color: orange; */
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 30px;
  width: 75%;
  height: 330px;
`

export const TextContainer = styled.div`
  /* background-color: yellowgreen; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 80%;

  font-family: Raleway;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 44px;
  color: #ffffff;
`

export const Text = styled.h1`
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 0 35px;
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
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 5px;
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
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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