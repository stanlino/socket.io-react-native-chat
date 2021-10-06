import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.Primary};
`
export const Tag = styled.Text`
    font-size: ${props => props.theme.sizes.one * 6}px;
    color: ${props => props.theme.colors.Secundary};
    font-weight: 500;
`
export const Section = styled.TouchableOpacity`
    flex-direction: row;
    padding: ${props => props.theme.sizes.one * 3}px;
    justify-content: space-between;
    align-items: center;
`
export const Output = styled.Text`
    font-size: ${props => props.theme.sizes.one * 5}px;
    color: ${props => props.theme.colors.Secundary};
`