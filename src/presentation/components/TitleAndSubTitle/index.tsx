import React from "react";
import { View, Image } from "react-native";

//STYLES
import {
    ContainerTitle,
    TitlePage,
    SubTitle,
    CloseContent
} from "./styles";

//ASSETS
import Close from "~/assets/images/icons/close.png";

//INTERFACES
interface PropsModalResume {
    title: string,
    subTitle?: string,
    close? : boolean
    actionClose? : () => void,
}


export default function TitleAndSubTitle({ title, subTitle, close, actionClose } : PropsModalResume) {
    return (
        <ContainerTitle>
            <View>
                <TitlePage>
                    {title}
                </TitlePage>
                {
                    subTitle &&
                    <SubTitle>
                        {subTitle}
                    </SubTitle>
                }
            </View>
            
            {
                close &&
                <CloseContent onPress={actionClose}>
                    <Image
                        source={Close}
                    />
                </CloseContent>
            }


        </ContainerTitle>
    )
}