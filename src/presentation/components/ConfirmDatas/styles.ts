import styled from "styled-components/native";

interface PropsConfirm {
    top?: number;
    bottom?: number;
}

export const ConfirmInformations = styled.View<PropsConfirm>`
    margin-top: ${(props) => (props.top ? props.top + "px" : 0)};
    margin-bottom: ${(props) => (props.bottom ? props.bottom + "px" : "10px")};
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ConfirmInformationsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 15px;
    color: ${({theme}) => theme.colors.gray};
    `;

export const ConfirmInformationsContent = styled.Text`
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 15px;
    color: ${({theme}) => theme.colors.blueDark};
    margin-left: 3px;
`;