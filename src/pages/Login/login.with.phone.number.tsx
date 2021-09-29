import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { Button, Container, Image, Text, TextInput, Title } from './styled'

const LoginWithPhoneNumber: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<boolean | string>(false)
  const inputRef: any = useRef(null)
  const inputIsFocused = inputRef.current?.isFocused()

  return (
    <Container>
      <Title>Vamos conferir seu número!</Title>

      {!inputIsFocused && (
        <Image source={require('../../assets/images/phone_number.png')} />
      )}

      <View>
        <TextInput
          onFocus={() => setPhoneNumber('')}
          onChangeText={text => setPhoneNumber(text)}
          ref={inputRef}
          placeholder={'Digite seu número aqui'}
        />
        <Button>
          <Text>Enviar código</Text>
        </Button>
      </View>
    </Container>
  )
}

export default LoginWithPhoneNumber
