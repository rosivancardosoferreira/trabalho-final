import styled from "styled-components/native";


export const ContainerAttention = styled.View`
`;

interface PropsAttention {
    visible: boolean
}

export const AttentionText = styled.Text<PropsAttention>`
    opacity: ${(props) => props.visible ? 1 : 0};
    font-family: ${({theme}) => theme.fonts.interMedium};
    margin-top: 2px;
    font-size: 13px;
    color: ${({theme}) => theme.colors.red};
`;