import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundColor};
`
export const Tag = styled.Text`
    font-size: ${({ theme }) => theme.sizes.one * 6}px;
    color: ${({ theme }) => theme.secundaryColor};
    font-weight: 500;
`
export const Section = styled.TouchableOpacity`
    flex-direction: row;
    padding: ${({ theme }) => theme.sizes.one * 3}px;
    justify-content: space-between;
    align-items: center;
`
export const Output = styled.Text`
    font-size: ${({ theme }) => theme.sizes.one * 5}px;
    color: ${({ theme }) => theme.secundaryColor};
`