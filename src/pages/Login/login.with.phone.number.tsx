import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useRef, useState } from 'react'

import { View } from 'react-native'
import { StackParamList } from '../../routes/auth.routes'
import { Button, Container, Image, Text, TextInput, Title } from './styled'

const LoginWithPhoneNumberPage: React.FC = () => {
  const updateState = useState(false) // I need to do a purposeful render when the inputRef ref changes

  const [phoneNumber, setPhoneNumber] = useState('')
  const inputRef: any = useRef(null)

  const phoneNumberFormat = phoneNumber.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '$1 $2 $3',
  )

  const { navigate } =
    useNavigation<StackNavigationProp<StackParamList, 'login_phonenumber'>>()

  const navigateToConfirmCode_Page = () => {
    if (phoneNumber.length === 11) {
      inputRef.current?.blur()
      updateState[1](!updateState[0])
      setTimeout(() => {
        navigate('confirm_code', { phoneNumber })
      }, 500)
    }
  }

  return (
    <Container>
      <Title>Vamos verificar seu número</Title>

      <Image source={require('../../assets/images/phone_number.png')} />

      <View>
        <TextInput
          onFocus={() => updateState[1](!updateState[0])}
          onChangeText={text => setPhoneNumber(text.replace(/\s/g, ''))}
          ref={inputRef}
          keyboardType={'phone-pad'}
          value={phoneNumberFormat}
          blurOnSubmit={false}
          placeholder={'Digite seu número aqui'}
        />
        <Button
          disabled={!(phoneNumber.length === 11)}
          onPress={navigateToConfirmCode_Page}>
          <Text>Enviar código</Text>
        </Button>
      </View>
    </Container>
  )
}

export default LoginWithPhoneNumberPage
