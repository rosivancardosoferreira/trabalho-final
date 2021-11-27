import styled from "styled-components/native";

export const ContainerTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TitlePage = styled.Text`
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 20px;
    color: ${({theme}) => theme.colors.blueDark};
    margin-bottom: .2px;
`;

export const SubTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.interRegular};
    font-size: 16px;
    color: ${({theme}) => theme.colors.blue};
    padding-top: 5px;
`;

export const CloseContent = styled.TouchableOpacity`    
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
`;