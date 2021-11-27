import React from "react";

//STYLES
import {
    ButtonDefaultStyle,
    TextButton  
} from "./styles";

interface Props {
    title: string,
    onPress?: () => void,
    top?: number,
    bottom?: number
    color?: string,
}

export default function ButtonYellow({title, onPress, top, bottom, color } : Props) {
    return (
        <ButtonDefaultStyle
        top={top}
        bottom={bottom}
        color={color}

            onPress={onPress}
        >
            <TextButton>
                {title}
            </TextButton>
        </ButtonDefaultStyle>
    )
}