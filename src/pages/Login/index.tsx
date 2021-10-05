import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackParamList } from '../../routes/auth.routes'
import { Button, Container, Image, Title, Text, LoginOptions } from './styled'
import onGoogleButtonPress from '../../utils/login.with.google'

const LoginPage: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackParamList, 'login_index'>>()

  const handleLoginWithGoogle = async () => {
    const user = await onGoogleButtonPress()
  }

  return (
    <Container>
      <Title>Entre no chat!</Title>
      <Image source={require('../../assets/images/login.png')} />
      <LoginOptions>
        <Button onPress={handleLoginWithGoogle}>
          <Text>login com o Google</Text>
        </Button>
        <Button onPress={() => navigation.navigate('login_phonenumber')}>
          <Text>Login com Nº de telefone</Text>
        </Button>
      </LoginOptions>
    </Container>
  )
}

export default LoginPage
