import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.Primary};
`

export const AddContactButton = styled.TouchableOpacity`
    height: ${props => props.theme.sizes.ten * 1.8}px;
    width: ${props => props.theme.sizes.ten * 1.8}px;
    background-color: ${props => props.theme.colors.Metallic_Seaweed};
    position: absolute;
    border-radius: ${props => props.theme.sizes.ten/1}px;
    right: ${props => props.theme.sizes.one * 4}px;
    bottom: ${props => props.theme.sizes.one * 5}px;
    justify-content: center;
    align-items: center;
`

export const ViewCloseButton = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: ${props => props.theme.sizes.one * 4}px;
`

export const Form = styled.View`
    margin-left: ${props => props.theme.sizes.one * 4}px; 
    margin-right: ${props => props.theme.sizes.one * 4}px; 
    padding: ${props => props.theme.sizes.one* 2}px; 
    border-width: 1px;
    border-color: ${props => props.theme.colors.Secundary};
    border-radius: ${props => props.theme.sizes.one* 2}px;
    margin-bottom: ${props => props.theme.sizes.one* 2}px;
`
export const Label = styled.Text`
    font-size: ${props => props.theme.sizes.one * 5}px;
    font-weight: 600;
    color: ${props => props.theme.colors.Secundary};
`
export const TextInput = styled.TextInput`
    font-size: ${props => props.theme.sizes.one * 5}px;
`

export const SaveContactAndCloseModalButton = styled.TouchableOpacity`
    height: ${props => props.theme.sizes.ten * 1.5}px;
    background-color: ${props => props.disabled? 'grey' : props.theme.colors.Secundary};
    justify-content: center;
    align-items: center;
`

export const Text = styled(Label)`
    font-size: ${props => props.theme.sizes.one * 8}px;
    color: ${props => props.theme.colors.Primary};
`

export const TouchableContact = styled.TouchableOpacity`
    height: ${props => props.theme.sizes.ten * 1.8}px;
    padding: ${props => props.theme.sizes.one* 2}px;
    justify-content: center;
    border-bottom-width: 1px;
    border-color: ${props => props.theme.colors.Beau_Blue};
`
export const NameContact = styled.Text`
    font-size: ${props => props.theme.sizes.one * 5}px;
    font-weight: 600;
    color: ${props => props.theme.colors.Secundary};
`