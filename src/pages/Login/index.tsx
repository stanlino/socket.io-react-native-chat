import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { RootStackParamList } from '../../routes/auth.routes'
import { Button, Container, Image, Title, Text, LoginOptions } from './styled'

type indexScreenProp = StackNavigationProp<RootStackParamList, 'login_index'>

const LoginPage: React.FC = () => {
  const navigation = useNavigation<indexScreenProp>()

  return (
    <Container>
      <Title>Entre no chat!</Title>
      <Image source={require('../../assets/images/login.png')} />
      <LoginOptions>
        <Button>
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
