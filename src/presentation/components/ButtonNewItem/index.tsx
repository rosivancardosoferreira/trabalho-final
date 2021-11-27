import React from "react";
import { Image } from "react-native";


//ASSETS
import More from "~/assets/images/icons/mais.png";

//STYLES
import {
    ButtonDefaultStyle, IconNew    
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

export default function ButtonNew({title, onPress, top, bottom, color } : Props) {
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
            <IconNew source={More} />
        </ButtonDefaultStyle>
    )
}