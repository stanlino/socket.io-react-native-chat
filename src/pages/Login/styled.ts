import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

const ScreenWidth = Dimensions.get('window').width
const ten = Math.round(ScreenWidth / 10)
const one = Math.round(ScreenWidth / 100)

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.Bg};
  align-items: center;
`

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: require('../../assets/images/login.png'),
})`
  width: ${ten * 7}px;
  height: ${ten * 5}px;
`

export const TitleLogin = styled.Text`
  font-size: ${one * 7}px;
  font-weight: bold;
  margin-top: ${one * 7}px;
  margin-bottom: ${one * 7}px;
  color: ${props => props.theme.colors.Fg};
`
export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${ten * 8}px;
  height: ${ten * 1.5}px;
  background-color: ${props => props.theme.colors.Beau_Blue};
  margin-top: ${one * 2}px;
  margin-bottom: ${one * 2}px;
  border-bottom-width: 4px;
  border-right-width: 4px;
  border-color: ${props => props.theme.colors.Fg};
  border-radius: ${ten / 3}px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: ${one * 5}px;
  font-weight: bold;
`

export const LoginOptions = styled.View`
  flex: 1;
  justify-content: center;
`
