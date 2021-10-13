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
    background-color:  ${props => props.theme.colors.Secundary};
    align-items: center;
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: 'grey',
    placeholder: 'Escreva uma mensagem'
})` 
    height: ${props => props.theme.sizes.ten}px;
    background-color: ${props => props.theme.colors.Primary};
    border-radius: ${props => props.theme.sizes.ten}px;
    flex: 1;
    color: ${props => props.theme.colors.Secundary};
    font-size: ${props => props.theme.sizes.one * 4}px;
    padding-left: ${props => props.theme.sizes.one * 3}px;
    padding-right: ${props => props.theme.sizes.one * 3}px;
    font-weight: 400;
`
export const TouchableSend = styled.TouchableOpacity`
    margin-left: ${props => props.theme.sizes.one}px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.Metallic_Seaweed};
    border-radius: ${props => props.theme.sizes.ten}px;
    height: ${props => props.theme.sizes.ten}px;
    width: ${props => props.theme.sizes.ten}px;
`

export const MessageFatherView = styled.View<MessageProps>`
    flex-direction: row;
    justify-content: ${props => props.fromThisUser ? 'flex-end' : 'flex-start'};
    margin: ${props => props.theme.sizes.one}px;
`
export const MessageChildView = styled.View<MessageProps>`
    background-color: ${props => props.fromThisUser ? props.theme.colors.Lavender_Web : props.theme.colors.Beau_Blue};
    min-height: ${props => props.theme.sizes.ten}px;
    justify-content: center;
    padding: ${props => props.theme.sizes.one}px;
    max-width: ${props => props.theme.sizes.ten * 9.5}px;
    padding-left: ${props => props.theme.sizes.one * 2}px;
    padding-right: ${props => props.theme.sizes.one * 2}px;
    min-width: ${props => props.theme.sizes.ten * 1.5}px;
    border-radius: ${props => props.theme.sizes.one * 3}px;
    border-bottom-right-radius: ${props => props.fromThisUser ? 0 : props.theme.sizes.one * 3}px;
    border-top-left-radius: ${props => props.fromThisUser ? props.theme.sizes.one * 3 : 0}px;
`
export const Text = styled.Text`
    font-size: ${props => props.theme.sizes.one * 4}px;
    font-weight: 600;
`