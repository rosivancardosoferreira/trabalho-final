import styled from "styled-components/native";

export const TitlePage = styled.Text`
    font-size: 25px;
    color: ${({theme}) => theme.colors.purpleDark};
    margin-bottom: .2px;
    font-family: ${({theme}) => theme.fonts.interBold};
`;

export const ViewSubTitle = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SubTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.interRegular};
    font-size: 16px;
    color: ${({theme}) => theme.colors.blue};
    padding-top: 5px;
`;

export const ButtonLink = styled.TouchableOpacity`
    margin-left: 5px;
    padding-top: 5px;
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}) => theme.colors.blueDark};
`;

export const Link = styled.Text`
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 16px;
    color: ${({theme}) => theme.colors.blueDark};
`;