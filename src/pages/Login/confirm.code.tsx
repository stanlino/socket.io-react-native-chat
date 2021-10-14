import { RouteProp, useRoute } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { StackParamList } from '../../routes/auth.routes'
import { Button, Container, Image, Text, TextInput, Title } from './styled'
import auth from '@react-native-firebase/auth'

const ConfirmCode_Page = () => {
  const route = useRoute<RouteProp<StackParamList, 'confirm_code'>>()
  const { phoneNumber } = route.params

  const [confirm, setConfirm] = useState<any>()
  const [invalidCode, setInvalidCode] = useState(false)
  const updateState = useState(false)
  const [code, setCode] = useState('')
  const inputRef: any = useRef(null)

  const phoneNumberFormat = phoneNumber.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '$1 $2 $3',
  )

  const confirmCode = async () => {
    try {
      const confirmation = await confirm.confirm(code)
    } catch (error) {
      setInvalidCode(true)
    }
  }

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(confirmation)
  }

  useEffect(() => {
    signInWithPhoneNumber(`+55${phoneNumber}`)
  }, [])

  return (
    <Container>
      <View>
        <Title>{invalidCode ? 'Opa, código errado!' : 'Código enviado!'}</Title>
        <Text>{phoneNumberFormat}</Text>
      </View>
      {invalidCode ? (
        <Image source={require('../../assets/images/error_code.png')} />
      ) : (
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
        <Button disabled={!code.length} onPress={confirmCode}>
          <Text>Verificar</Text>
        </Button>
      </View>
    </Container>
  )
}

export default ConfirmCode_Page
