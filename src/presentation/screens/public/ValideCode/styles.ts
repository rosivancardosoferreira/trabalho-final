import styled from "styled-components/native";
import { themes } from "../../../../styles/themes";


export const LabelInputCode = styled.Text`    
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 18px;
    color: ${({theme}) => theme.colors.gray};    
    margin-bottom: 5px;
    text-align: center;
    margin-top: 40%;
`;

interface PropsAttention {
    visible: boolean
}

export const MessageCodeInvalidade = styled.Text<PropsAttention>`
    opacity: ${(props) => props.visible ? 1 : 0};
    font-family: ${({theme}) => theme.fonts.interMedium};
    margin-top: 5px;
    font-size: 13px;
    text-align: center;
    color: ${({theme}) => theme.colors.red};
`;


interface PropsCodeTextInput {
    top?: number,
    attention?: boolean
}

export const CodeTextInputAntigo = styled.TextInput.attrs({
    placeholderTextColor: themes.colors.grayLight,
    textAlignVertical: "top",
    borderBottomWidth: 1
})<PropsCodeTextInput>`
    font-family: ${({theme}) => theme.fonts.interRegular};
    color: ${({theme}) => theme.colors.grayDark};
    border-color: red;
    width: 30%;
    align-self: center;
    letter-spacing: 5px;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    position: relative;
`;


export const CodeTextInput = {
    fontFamily: themes.fonts.interRegular,
    fontSize: 16,
    color: themes.colors.grayDark,
    borderBottomWidth: 1,
    borderColor: themes.fonts.interRegular,
    paddingVertical: 10,
    paddingHorizontal: 10,
    letterSpacing: 5,
    width: "30%",
    alignSelf: "center",
    textAlign: "center",
}