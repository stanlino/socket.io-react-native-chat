import { RouteProp, useRoute } from '@react-navigation/core'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { StackParamList } from '../../routes/auth.routes'
import { Button, Container, Image, Text, TextInput, Title } from './styled'

const ConfirmCode_Page = () => {
  const route = useRoute<RouteProp<StackParamList, 'confirm_code'>>()
  const { phoneNumber } = route.params

  const updateState = useState(false)
  const [code, setCode] = useState('')
  const inputRef: any = useRef(null)
  const inputIsFocused = inputRef.current?.isFocused()

  const phoneNumberFormat = phoneNumber.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '$1 $2 $3',
  )

  const checkCode = () => {
    inputRef.current?.blur()
    updateState[1](!updateState[0])
    setTimeout(() => {}, 500)
  }

  return (
    <Container>
      <Title>Um código de verificação foi enviado para</Title>
      <Text>{phoneNumberFormat}</Text>

      {!inputIsFocused && (
        <Image source={require('../../assets/images/check_code.png')} />
      )}

      <View>
        <TextInput
          onFocus={() => updateState[1](!updateState[0])}
          onChangeText={text => setCode(text)}
          ref={inputRef}
          keyboardType={'phone-pad'}
          blurOnSubmit={false}
          placeholder={'Digite o código aqui'}
        />
        <Button disabled={!code.length} onPress={checkCode}>
          <Text>Verificar</Text>
        </Button>
      </View>
    </Container>
  )
}

export default ConfirmCode_Page
