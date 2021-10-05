import { Dimensions } from 'react-native'
import {DefaultTheme} from 'styled-components'
const { width } = Dimensions.get('window')

const myTheme: DefaultTheme = {
  title: 'dark',
  colors: {
    Primary: '#022B3A',
    Secundary: '#FFFFFF',
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
