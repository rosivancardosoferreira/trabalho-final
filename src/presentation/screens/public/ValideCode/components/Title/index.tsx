import React from "react";
import { View, ToastAndroid } from "react-native";

//STYLES
import {
    TitlePage,
    SubTitle,
    ViewSubTitle,
    ButtonLink,
    Link
} from "./styles";

interface PropsTitle {
    title: string,
    subTitle: string,
    backLogin?: ()  => void,
}

export default function Title({ title, subTitle, backLogin } : PropsTitle) {
    function Alert() {
        ToastAndroid.showWithGravityAndOffset(
            "EM DESENVOLVIMENTO!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }
    return(
        <View>
            <TitlePage>
                {title}
            </TitlePage>
            <ViewSubTitle>
                <SubTitle>
                    {subTitle}
                </SubTitle>
                <ButtonLink
                    onPress={backLogin}
                >
                </ButtonLink>
            </ViewSubTitle>
        </View>
    )
}