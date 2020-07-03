import React from "react"
import {
  ContatoWrapper,
  ContatoContainer,
  TextContainer,
  FormContainer,
  Title,
  Text,
  Input,
  InputContainer,
  InputMessage,
  ButtonContainer,
  SubmitButton
} from "./styled"


const ContatoHome = () => {
  return (
    <ContatoWrapper>
      <ContatoContainer>
        <TextContainer>
          <Title>Vamos Conversar?</Title>
          <Text>Preencha seus dados e nós entramos em contato com você.</Text>
        </TextContainer>
        <FormContainer>
          <InputContainer>
            <Input type="text" placeholder="Nome" />
          </InputContainer>
          <InputContainer>
            <Input
              style={{ marginRight: "7px" }}
              type="email"
              placeholder="E-mail"
            />
            <Input
              style={{ marginLeft: "7px" }}
              type="tel"
              placeholder="Telefone"
            />
          </InputContainer>
          <InputContainer>
            <InputMessage placeholder="Mensagem" />
          </InputContainer>
          <ButtonContainer>
            <SubmitButton to="/">Enviar</SubmitButton>
          </ButtonContainer>
        </FormContainer>
      </ContatoContainer>
    </ContatoWrapper>
  )
}

export default ContatoHome
