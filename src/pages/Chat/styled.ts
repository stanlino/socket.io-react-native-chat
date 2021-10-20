import styled from "styled-components/native";

interface MessageProps {
    fromThisUser: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundColor};
`

export const BottomBar = styled.View`
    height: ${({ theme }) => theme.sizes.ten * 1.5}px;
    padding: ${({ theme }) => theme.sizes.one * 1}px;
    flex-direction: row;
    background-color:  ${({ theme }) => theme.primaryColor};
    align-items: center;
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'grey',
    placeholder: 'Escreva uma mensagem'
})` 
    height: ${({ theme }) => theme.sizes.ten}px;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: ${({ theme }) => theme.sizes.ten}px;
    flex: 1;
    color: ${({ theme }) => theme.secundaryColor};
    font-size: ${({ theme }) => theme.sizes.one * 4}px;
    padding-left: ${({ theme }) => theme.sizes.one * 3}px;
    padding-right: ${({ theme }) => theme.sizes.one * 3}px;
    font-weight: 400;
`
export const TouchableSend = styled.TouchableOpacity`
    margin-left: ${({ theme }) => theme.sizes.one}px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.secundaryColor};
    border-radius: ${({ theme }) => theme.sizes.ten}px;
    height: ${({ theme }) => theme.sizes.ten}px;
    width: ${({ theme }) => theme.sizes.ten}px;
`

export const MessageFatherView = styled.View<MessageProps>`
    flex-direction: row;
    justify-content: ${({ fromThisUser }) => fromThisUser ? 'flex-end' : 'flex-start'};
    margin: ${({ theme }) => theme.sizes.one}px;
`
export const MessageChildView = styled.View<MessageProps>`
    background-color: ${({ fromThisUser, theme }) => fromThisUser ? theme.colors.whiteblue : theme.colors.blue};
    min-height: ${({ theme }) => theme.sizes.ten}px;
    justify-content: center;
    padding: ${({ theme }) => theme.sizes.one}px;
    max-width: ${({ theme }) => theme.sizes.ten * 9.5}px;
    padding-left: ${({ theme }) => theme.sizes.one * 2}px;
    padding-right: ${({ theme }) => theme.sizes.one * 2}px;
    min-width: ${({ theme }) => theme.sizes.ten * 1.5}px;
    border-radius: ${({ theme }) => theme.sizes.one * 3}px;
    border-bottom-right-radius: ${({ theme, fromThisUser }) => fromThisUser ? 0 : theme.sizes.one * 3}px;
    border-top-left-radius: ${({ theme, fromThisUser }) => fromThisUser ? theme.sizes.one * 3 : 0}px;
`
export const Text = styled.Text`
    font-size: ${({ theme }) => theme.sizes.one * 4}px;
    font-weight: 600;
`