import styled from "styled-components/native";

interface MessageProps {
    fromThisUser: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.Primary};
`

export const BottomBar = styled.View`
    height: ${props => props.theme.sizes.ten * 1.5}px;
    padding: ${props => props.theme.sizes.one * 1}px;
    flex-direction: row;
    background-color:  ${props => props.theme.colors.Primary};
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'grey',
    placeholder: 'Digite uma mensagem'
})`
    background-color: ${props => props.theme.colors.Secundary};
    border-radius: ${props => props.theme.sizes.ten}px;
    flex: 1;
    color: ${props => props.theme.colors.Primary};
    font-size: ${props => props.theme.sizes.one * 4}px;
    padding-left: ${props => props.theme.sizes.one * 3}px;
    padding-right: ${props => props.theme.sizes.one * 3}px;
    font-weight: 400;
`
export const TouchableSend = styled.TouchableOpacity`
    margin-left: ${props => props.theme.sizes.one}px;
    justify-content: center;
    align-items: center;
`

export const MessageFatherView = styled.View<MessageProps>`
    flex-direction: row;
    justify-content: ${props => props.fromThisUser ? 'flex-end' : 'flex-start'};
    margin: ${props => props.theme.sizes.one}px;
`
export const MessageChildView = styled.View<MessageProps>`
    background-color: ${props => props.fromThisUser ? props.theme.colors.Lavender_Web : props.theme.colors.Beau_Blue};
    height: ${props => props.theme.sizes.ten}px;
    justify-content: center;
    padding-left: ${props => props.theme.sizes.one * 2}px;
    padding-right: ${props => props.theme.sizes.one * 2}px;
    min-width: ${props => props.theme.sizes.ten * 1.5}px;
    border-radius: ${props => props.theme.sizes.ten}px;
    border-bottom-right-radius: ${props => props.fromThisUser ? 0 : props.theme.sizes.ten}px;
    border-top-left-radius: ${props => props.fromThisUser ? props.theme.sizes.ten : 0}px;
`
export const Text = styled.Text`
    font-size: ${props => props.theme.sizes.one * 5}px;
    font-weight: 600;
`