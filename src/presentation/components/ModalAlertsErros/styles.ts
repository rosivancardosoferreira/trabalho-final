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
    padding-bottom: 25px;
    border-width: 1.5px;
    position: absolute;
    align-self: center;
`;

export const BorderSucess = {
    borderColor: themes.colors.grayDark,
}

export const BorderError = {
    borderColor: themes.colors.grayDark,
}

export const BorderInformations = {
    borderColor: themes.colors.grayDark,
}

export const CommonTitle = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    background-color: ${({theme}) => theme.colors.purple};
    border-radius: 10px;
    width: 70%;
    margin-top: 25px;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 11px 0;
`;

export const TextButton = styled.Text`
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 17px;
    color: ${({theme}) => theme.colors.white};
    /* align-self: center; */
`;