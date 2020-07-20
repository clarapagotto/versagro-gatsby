import React from "react"
import * as S from "./styled"
import CountUp from "react-countup"

const Estatisticas = () => {
  return (
    <S.EstatisticasWrapper>
      <S.EstatisticasContainer>
        <S.Title>Estatísticas</S.Title>
        <S.CountersContainer>
          <S.CounterContainer>
            <S.Counter>
              +<CountUp start={20} end={1000} duration={2.5} />
            </S.Counter>
            <S.Text>Projetos realizados</S.Text>
          </S.CounterContainer>
          <S.CounterContainer>
            <S.Counter>
              +<CountUp start={20} end={500} duration={3} />
            </S.Counter>
            <S.Text>Fazendas Atendidas</S.Text>
          </S.CounterContainer>
          <S.CounterContainer>
            <S.Counter>
              +<CountUp start={20} end={1200} duration={3.5} />
            </S.Counter>
            <S.Text>Produtores Qualificados</S.Text>
          </S.CounterContainer>
        </S.CountersContainer>
      </S.EstatisticasContainer>
    </S.EstatisticasWrapper>
  )
}

export default Estatisticas
