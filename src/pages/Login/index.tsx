import React from 'react'
import {
  Button,
  Container,
  Image,
  TitleLogin,
  Text,
  LoginOptions,
} from './styled'

const LoginPage: React.FC = () => {
  return (
    <>
      <Container>
        <TitleLogin>Entre no chat!</TitleLogin>
        <Image />
        <LoginOptions>
          <Button>
            <Text>login com o Google</Text>
          </Button>
          <Button>
            <Text>Login com Nº de telefone</Text>
          </Button>
        </LoginOptions>
      </Container>
    </>
  )
}

export default LoginPage
