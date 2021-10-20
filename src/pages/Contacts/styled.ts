import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundColor};
`

export const AddContactButton = styled.TouchableOpacity`
    height: ${({ theme }) => theme.sizes.ten * 1.8}px;
    width: ${({ theme }) => theme.sizes.ten * 1.8}px;
    background-color: ${({ theme }) => theme.secundaryColor};
    position: absolute;
    border-radius: ${({ theme }) => theme.sizes.ten/1}px;
    right: ${({ theme }) => theme.sizes.one * 4}px;
    bottom: ${({ theme }) => theme.sizes.one * 5}px;
    justify-content: center;
    align-items: center;
`

export const ViewCloseButton = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: ${({ theme }) => theme.sizes.one * 4}px;
`

export const Form = styled.View`
    margin-left: ${({ theme }) => theme.sizes.one * 4}px; 
    margin-right: ${({ theme }) => theme.sizes.one * 4}px; 
    padding: ${({ theme }) => theme.sizes.one* 2}px; 
    border-width: 1px;
    border-color: ${({ theme }) => theme.secundaryColor};
    border-radius: ${({ theme }) => theme.sizes.one* 2}px;
    margin-bottom: ${({ theme }) => theme.sizes.one* 2}px;
`
export const Label = styled.Text`
    font-size: ${({ theme }) => theme.sizes.one * 5}px;
    font-weight: 600;
    color: ${({ theme }) => theme.secundaryColor};
`
export const TextInput = styled.TextInput`
    font-size: ${({ theme }) => theme.sizes.one * 5}px;
    color: ${({ theme }) => theme.secundaryColor};
`

export const SaveContactAndCloseModalButton = styled.TouchableOpacity`
    height: ${({ theme }) => theme.sizes.ten * 1.5}px;
    background-color: ${({ theme, disabled }) => disabled? 'grey' : theme.secundaryColor};
    justify-content: center;
    align-items: center;
`

export const Text = styled(Label)`
    font-size: ${({ theme }) => theme.sizes.one * 8}px;
    color: ${({ theme }) => theme.primaryColor};
`

export const TouchableContact = styled.TouchableOpacity`
    height: ${({ theme }) => theme.sizes.ten * 1.8}px;
    padding: ${({ theme }) => theme.sizes.one* 2}px;
    justify-content: center;
`
export const NameContact = styled.Text`
    font-size: ${({ theme }) => theme.sizes.one * 5}px;
    font-weight: 600;
    color: ${({ theme }) => theme.secundaryColor};
`