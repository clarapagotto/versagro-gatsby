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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;


  width: 100%;
  height: 500px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${media.lessThan("medium")`
    padding: 0;
  `}
`

export const ContatoContainer = styled.div`
  /* background-color: orange; */
  border-bottom: 1px solid #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
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
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-top: 0;
  `}
`

export const TextContainer = styled.div`
  /* background-color: yellowgreen; */

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;

  width: 240px;
  height: 70%;
  margin-right: 6px;

  font-family: Raleway;

  ${media.lessThan("large")`
    margin-right: 5%;
  `}
  ${media.lessThan("medium")`
    width: 85%;
    margin-right: 6px;
  `}
  ${media.lessThan("medium")`
    /* justify-content: space-evenly; */
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

  ${media.lessThan("medium")`
    padding: 0px 0 10px;
    
  `}

  ${media.lessThan("medium")`
    font-size: 16px;
    line-height: 19px;
  `}
`

export const FormContainer = styled.div`
  /* background-color: tomato; */

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 10px 0;

  width: 660px;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  color: #969696;

  ${media.lessThan("medium")`
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

  ${media.lessThan("medium")`
    height: 30px;
    padding: 1px 2px;
  `}
`

export const InputContainer = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;

  ${media.lessThan("medium")`
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
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

  ${media.lessThan("small")`
    padding: 5px 10px;
  `}
`
