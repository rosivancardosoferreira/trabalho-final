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

export default function ButtonDefault({title, onPress, top, bottom, color } : Props) {
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