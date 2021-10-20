import { Dimensions } from 'react-native'
import {DefaultTheme} from 'styled-components'
const { width } = Dimensions.get('window')

const myTheme: DefaultTheme = {
  title: 'dark',
  primaryColor: '#022B3A',
  secundaryColor: '#1F7A8C',
  backgroundColor: '#FFFFFF',
  colors: {
    blue: '#BFDBF7',
    whiteblue: '#E1E5F2',
  },
  sizes: {
    one: (width / 100),
    ten: (width / 10)
  }
}

export {myTheme}
