import styled from "styled-components"
import media from "styled-media-query"

export const EstatisticasWrapper = styled.div`
  background-color: #fff;
  padding-top: 50px;
  width: 100%;
`
export const EstatisticasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 75%;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
    width: 90%;
  `}
`

export const Title = styled.h1`
  color: #003d1d;
  font-family: "Fredoka One", sans-serif;
  font-size: 36px;
  line-height: 40px;

  &:after {
    content: "";
    border-bottom: 3px solid #003d1d;
    display: block;
    padding-top: 5px;
    width: 60px;
  }

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-left: 5%;
  `}

  ${media.lessThan("small")`
    /* screen width is less than 450px (small) */
    font-size: 32px;
  `}
`
export const CountersContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 50px 0;

  ${media.lessThan("654px")`
    align-items: center;
    flex-direction: column;
  `}
`
export const CounterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 30%;

  ${media.lessThan("654px")`
    margin: 20px 0;
    width: 100%;
  `}
`

export const Counter = styled.h1`
  color: #33b16f;
  font-family: "Fredoka One", sans-serif;
  font-size: 46px;
`
export const Text = styled.p`
  color: #696969;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 10px 0;

  ${media.lessThan("950px")`
    font-size: 14px;
  `}
`
