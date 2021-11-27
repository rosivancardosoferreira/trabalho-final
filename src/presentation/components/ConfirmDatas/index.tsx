import React from "react";
import { View, Modal, Image } from "react-native";

//STYLES

import {
    ConfirmInformations,
    ConfirmInformationsTitle,
    ConfirmInformationsContent,
} from "./styles";

interface PropsConfirDatas {
    title: string,
    text: string,
    top?: number;
    bottom?: number;
}
export default function ConfirmDatas({title, text, top, bottom} : PropsConfirDatas) {
    return(
        <ConfirmInformations top={top} bottom={bottom}>
            <ConfirmInformationsTitle>{title}:</ConfirmInformationsTitle>
            <ConfirmInformationsContent>{text}</ConfirmInformationsContent>
        </ConfirmInformations>
    )
}