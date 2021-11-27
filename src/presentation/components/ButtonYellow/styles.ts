import styled from "styled-components/native";

interface PropsButton {
    top?: number,
    bottom?: number
    color?: string,
    size?: "small" | "medio" | "large"
}

export const ButtonDefaultStyle = styled.TouchableOpacity<PropsButton>`
    padding: 12px 0;
    background-color: ${({theme}) => theme.colors.yellow};
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.yellow};
    border-radius: 10px; 
    justify-content: center;
    align-items: center;
    width: 70%;
`;

export const TextButton = styled.Text<PropsButton>`
    color: #000000;
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.interBold};
`;