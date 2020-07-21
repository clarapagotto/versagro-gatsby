import React from "react"
import * as S from "./styled"
import CountUp from "react-countup"

import VisibilitySensor from "react-visibility-sensor"

const Estatisticas = () => {
  return (
    <S.EstatisticasWrapper>
      <S.EstatisticasContainer>
        <S.Title>Estatísticas</S.Title>
        <S.CountersContainer>
          <S.CounterContainer>
            <S.Counter>
              <CountUp end={1000} prefix="+" duration={2.0}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.Counter>
            <S.Text>Projetos realizados</S.Text>
          </S.CounterContainer>
          <S.CounterContainer>
            <S.Counter>
              <CountUp start={20} end={500} prefix="+" duration={2.5}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.Counter>
            <S.Text>Fazendas Atendidas</S.Text>
          </S.CounterContainer>
          <S.CounterContainer>
            <S.Counter>
              <CountUp start={20} end={1200} prefix="+" duration={3.0}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </S.Counter>
            <S.Text>Produtores Qualificados</S.Text>
          </S.CounterContainer>
        </S.CountersContainer>
      </S.EstatisticasContainer>
    </S.EstatisticasWrapper>
  )
}

export default Estatisticas
