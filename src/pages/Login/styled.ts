import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.sizes.ten}px;
  padding-bottom: ${({ theme }) => theme.sizes.ten}px;
`

export const Image = styled.Image.attrs({ resizeMode: 'contain' })`
  width: ${({ theme }) => theme.sizes.ten * 8}px;
  height: ${({ theme }) => theme.sizes.ten * 6}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.one * 7}px;
  font-weight: bold;
  color: ${({ theme }) => theme.secundaryColor};
  text-align: center;
`
export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${({ theme }) => theme.sizes.ten * 8}px;
  height: ${({ theme }) => theme.sizes.ten * 1.5}px;
  background-color: ${({ theme, disabled }) => disabled ? '#b3b3b3' : theme.colors.blue};
  margin-bottom: ${({ theme }) => theme.sizes.one * 2}px;
  border-radius: ${({ theme }) => theme.sizes.ten / 3}px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme, disabled }) => disabled ? '#b3b3b3' : theme.secundaryColor};
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.sizes.one * 5}px;
  font-weight: bold;
  text-align: center;
`

export const TextInput = styled.TextInput`
  border-width: 1px;
  width: ${({ theme }) => theme.sizes.ten * 8}px;
  margin-bottom: ${({ theme }) => theme.sizes.one}px;
  height: ${({ theme }) => theme.sizes.ten * 1.5}px;
  border-color: ${({ theme, value }) => value ? value?.replace(/\s/g, '').length === 11 ? 'green' : 'red' : theme.secundaryColor};
  border-radius: ${({ theme }) => theme.sizes.ten / 3}px;
  font-size: ${({ theme }) => theme.sizes.one * 5}px;
  padding-left: ${({ theme }) => theme.sizes.one * 2}px;
  padding-right: ${({ theme }) => theme.sizes.one * 2}px;
  text-align: center;
  color: ${({ theme }) => theme.secundaryColor};
`

export const LoginOptions = styled.View`
  justify-content: center;
`
