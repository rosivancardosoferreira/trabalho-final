import styled from "styled-components/native";


export const TitlePage = styled.Text`
    font-size: 25px;
    color: ${({theme}) => theme.colors.purpleDark};
    margin-bottom: .2px;
    margin-top: 2%;
    font-family: ${({theme}) => theme.fonts.interBold};
`;
export const SubTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.interRegular};
    font-size: 16px;
    color: ${({theme}) => theme.colors.blue};
    padding-top: 5px;
`;

export const CounterChars = styled.Text`
    margin-top: 2px;
    align-self: flex-end;
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 15px;
    color: ${({theme}) => theme.colors.gray};
`;

export const EyesPress = styled.TouchableOpacity`
    position: absolute;
    right: 0px;
    height: 50px;
    width: 50px;
    padding: 0;
    align-items: center;
    justify-content: center;
`;

export const Eyes = styled.Image`
    width: 25px;
    height: 25px;
    padding: 0;
`;


export const ViewPass = styled.View`
    justify-content: center;
`;

export const ViewPassPress = styled.TouchableOpacity`
    position: absolute;
    right: 0px;
    height: 43px;
    width: 50px;
    padding: 0;
    align-items: center;
    justify-content: center;
`;