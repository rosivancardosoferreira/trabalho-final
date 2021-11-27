import React from "react";

//STYLES
import {
    ButtonDefaultStyle    
} from "./styles";

import {
    TextButton
} from "~/styles/commonStyles";

interface Props {
    title: string,
    onPress?: () => void,
    top?: number,
    bottom?: number
    color?: string,
}

export default function ButtonWhite({title, onPress, top, bottom, color } : Props) {
    return (
        <ButtonDefaultStyle
        top={top}
        bottom={bottom}
        color={color}

            onPress={onPress}
        >
            <TextButton color="#000000">
                {title}
            </TextButton>
        </ButtonDefaultStyle>
    )
}