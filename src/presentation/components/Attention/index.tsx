import React from "react";

//STYLES
import {
    ContainerAttention,
    AttentionText,
} from "./styles";

interface Props {
    visible: boolean,
    message: string | undefined
}

export default function Attention({visible, message} : Props) {
    return (
        <ContainerAttention>
            <AttentionText visible={visible}>
                {message}
            </AttentionText>
        </ContainerAttention>
    )
}