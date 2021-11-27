import styled from "styled-components/native";

interface PropsButton {
    top?: number,
    bottom?: number
    color?: string,
    size?: "small" | "medio" | "large"
}

export const ButtonDefaultStyle = styled.TouchableOpacity<PropsButton>`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
    margin-bottom: ${(props) => (props.bottom ? props.bottom +"px" : 0)};
    background-color: #E23588;
    border-width: 2px;
    border-color: #E23588;
    border-radius: 10px;    
`;