import styled from "styled-components/native";

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
    font-size: ${props => props.theme.sizes.one * 5}px;
    padding-left: ${props => props.theme.sizes.one * 3}px;
    padding-right: ${props => props.theme.sizes.one * 3}px;
    font-weight: 400;
`
export const TouchableSend = styled.TouchableOpacity`
    margin-left: ${props => props.theme.sizes.one}px;
    justify-content: center;
    align-items: center;
`