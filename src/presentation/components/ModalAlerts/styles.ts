import styled from "styled-components/native";
import { themes } from "~/styles/themes";


export const ContainerModal = styled.TouchableOpacity`
    height: 100%;
    background-color: 'rgba(52, 52, 52, 0.6)';
`;

export const ChildrenrModal = styled.View`
    background-color: ${({theme}) => theme.colors.white};
    width: 80%;
    border-radius: 15px;
    padding: 10px 20px;
    border-width: 2px;
    position: absolute;
    align-self: center;
`;

export const BorderSucess = {
    borderColor: themes.colors.blueDark,
}

export const BorderError = {
    borderColor: themes.colors.redDark,
}

export const BorderInformations = {
    borderColor: themes.colors.gray,
}

export const CommonTitle = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const ViewBackground = styled.View`
    justify-content: center;
`;

interface PropsTitleText {
    color: string,
}

export const TitleText = styled.Text<PropsTitleText>`
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 18px;
    color: ${(props) => props.color};
    margin-left: 10px;
`;


export const ContentText = styled.Text`
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 17px;
    color: ${({theme}) => theme.colors.gray};
    margin-top: 10px;
`;


export const ButtonModal = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.blue};
    border-radius: 10px;
    width: 70%;
    margin-top: 25px;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
`;

export const TextButton = styled.Text`
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 17px;
    color: ${({theme}) => theme.colors.white};
    /* align-self: center; */
`;