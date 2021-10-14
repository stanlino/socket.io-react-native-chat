import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.Primary};
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.sizes.ten}px;
  padding-bottom: ${props => props.theme.sizes.ten}px;
`

export const Image = styled.Image.attrs({ resizeMode: 'contain' })`
  width: ${props => props.theme.sizes.ten * 8}px;
  height: ${props => props.theme.sizes.ten * 6}px;
`

export const Title = styled.Text`
  font-size: ${props => props.theme.sizes.one * 7}px;
  font-weight: bold;
  color: ${props => props.theme.colors.Secundary};
  text-align: center;
`
export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${props => props.theme.sizes.ten * 8}px;
  height: ${props => props.theme.sizes.ten * 1.5}px;
  background-color: ${props => props.disabled ? '#b3b3b3' : props.theme.colors.Beau_Blue};
  margin-bottom: ${props => props.theme.sizes.one * 2}px;
  border-radius: ${props => props.theme.sizes.ten / 3}px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${props => props.disabled ? '#b3b3b3' :props.theme.colors.Secundary};
`

export const Text = styled.Text`
  font-size: ${props => props.theme.sizes.one * 5}px;
  font-weight: bold;
  text-align: center;
`

export const TextInput = styled.TextInput`
  border-width: 1px;
  width: ${props => props.theme.sizes.ten * 8}px;
  margin-bottom: ${props => props.theme.sizes.one}px;
  height: ${props => props.theme.sizes.ten * 1.5}px;
  border-color: ${props => props.value ? props.value?.replace(/\s/g, '').length === 11 ? 'green' : 'red' : props.theme.colors.Secundary};
  border-radius: ${props => props.theme.sizes.ten / 3}px;
  font-size: ${props => props.theme.sizes.one * 5}px;
  padding-left: ${props => props.theme.sizes.one * 2}px;
  padding-right: ${props => props.theme.sizes.one * 2}px;
  text-align: center;
  color: ${props => props.theme.colors.Secundary};
`

export const LoginOptions = styled.View`
  justify-content: center;
`
