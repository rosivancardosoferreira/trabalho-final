import styled from "styled-components/native";

export const ItemsBack = styled.View`
    width: 80%;
    position: absolute;
    bottom: 5%;
    align-self: center;
`;

export const TitleMessage = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 25px;
    margin-bottom: 20px;
`;

export const ImageBack = styled.ImageBackground`
    align-self: center;
    flex: 1;
    resize: cover;
    width: 100%;
    position: relative;
`;
