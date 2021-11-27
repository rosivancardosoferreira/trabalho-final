import styled from "styled-components/native";


export const TitleMessage = styled.Text`
    margin-bottom: 40px;
    color: ${({theme}) => theme.colors.blueDark};
    font-family: ${({theme}) => theme.fonts.interBold};
    text-align: center;
    font-size: 30px;
`;

export const ImageMessage = styled.Image`
    align-self: center;
    margin-bottom: 20px;
`;

export const SubTitleMessage = styled.Text`
    color: ${({theme}) => theme.colors.blueDark};
    font-family: ${({theme}) => theme.fonts.interMedium};
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    text-align: center;
`;