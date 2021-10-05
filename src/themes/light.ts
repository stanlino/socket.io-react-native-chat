import {DefaultTheme} from 'styled-components'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const myTheme: DefaultTheme = {
  title: 'light',
  colors: {
    Primary: '#FFFFFF',
    Secundary: '#022B3A',
    Metallic_Seaweed: '#1F7A8C',
    Beau_Blue: '#BFDBF7',
    Lavender_Web: '#E1E5F2',
  },
  sizes: {
    one: (width / 100),
    ten: (width / 10)
  }
}

export {myTheme}
