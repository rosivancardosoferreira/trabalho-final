import styled from "styled-components/native";
import { themes } from "./themes";

export const ViewRelative = styled.View`
    justify-content: center;
`;

//COMPONENT FORM INPUT
interface PropsLabelInput {
    top?: number
}

export const LabelInput = styled.Text<PropsLabelInput>`
    margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 16px;
    color: ${({theme}) => theme.colors.gray};    
    margin-bottom: 5px;
`;

interface PropsTextInput {
    top?: number,
    paddingTop? : number,
    paddingRight? : number,
    paddingBottom? : number,
    paddingLeft? : number,
    attention?: boolean
}

export const DefaultTextInput = styled.TextInput.attrs({
    placeholderTextColor: themes.colors.grayLight,
    textAlignVertical: "top"
})<PropsTextInput>`
    font-family: ${({theme}) => theme.fonts.interRegular};
    color: ${({theme}) => theme.colors.grayDark};
    width: 100%;
    border: 2px solid ${(props) => (props.attention ? props.theme.colors.red : props.theme.colors.grayLight)};
    border-radius: 12px;    
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop + "px" : "10px")};
    padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom + "px" : "10px")};
    padding-right: ${(props) => (props.paddingRight ? props.paddingRight + "px" : "15px")};
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft + "px" : "15px")};
    font-size: 18px;
    position: relative;
`;

export const DefaultStyleInput = {
    fontFamily: themes.fonts.interRegular,
    fontSize: 16,
    color: themes.colors.grayDark,
    width: "100%",
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
}

export const borderDefault = {
    borderColor: themes.colors.grayLight,
}

export const borderAttention = {
    borderColor: themes.colors.red,
}

export const StyleSelect = {
    backgroundColor: themes.colors.white,
    width: "100%",
    borderWidth: 2,
    borderColor: themes.colors.grayLight,
    borderRadius: 12,
    fontSize: 38,
    color: "#010101"
}

export const StyleTextSelect = {
    fontFamily: themes.fonts.interRegular,
    fontSize: 16,
    color: themes.colors.grayDark,
}

export const StyleDropDownSelect = {
    borderWidth: 2,
    borderColor: themes.colors.grayLight,
}


export const StyleScrollView = styled.ScrollView`
    padding: 0 30px;
    flex: 1;
`;

interface PropsSafeArea {
    paddingTop?: number,
    paddingBottom?: number
    paddingLeft?: number,
    paddingRight?: number,
    centerHorizontal?: boolean,
    centerVertical?: boolean,
}

export const SafeArea = styled.SafeAreaView<PropsSafeArea>`
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft + "px" : 0)};
    padding-right: ${(props) => (props.paddingRight ? props.paddingRight + "px" : 0)};
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop + "px" : "20px")};
    padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom +"px" : 0)};
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    justify-content: ${(props) => (props.centerVertical ? "center" : "flex-start")};    
`;

interface PropsButton {
    top?: number,
    bottom?: number
    color?: string,
}

export const ButtonDefault = styled.TouchableOpacity<PropsButton>`
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
    margin-bottom: ${(props) => (props.bottom ? props.bottom +"px" : 0)};
    background-color: ${({theme}) => theme.colors.blue};
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.blue};
    border-radius: 10px;
`;

export const ButtonSecond = styled.TouchableOpacity<PropsButton>`
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
    margin-bottom: ${(props) => (props.bottom ? props.bottom +"px" : 0)};
    background-color: ${({theme}) => theme.colors.white};
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.blue};
    border-radius: 10px;
    `;

export const TextButton = styled.Text<PropsButton>`
    color: ${(props) => (props.color ? props.color : themes.colors.white)};
    font-size: 15px;
    font-family: ${({theme}) => theme.fonts.interMedium};
`;