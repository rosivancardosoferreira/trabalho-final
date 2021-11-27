import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native";

//COMPONENTS
import ButtonDefault from "~/presentation/components/ButtonDefault";

//INTERFACE
import { iNavigation } from "~/data/protocols/iNavigation";

//ASSETS
import MessageImage from "~/assets/images/inactive.png";

//STYLES
import {
    SafeArea,
} from "~/styles/commonStyles";
import {
    TitleMessage,
    SubTitleMessage,
    ImageMessage
} from "./styles";

export default function InactiveAccount({route, navigation } : iNavigation) {
    const parameters = route.params;

    return(
        <SafeArea
            paddingRight={30}
            paddingLeft={30}
            centerVertical
        >                
                <TitleMessage>
                    Conta inativa
                </TitleMessage>
                <ImageMessage
                    source={MessageImage}
                />
                <SubTitleMessage>
                    Informe o último código recebido no número {
                    parameters.phone.replace(
                    /(\d{2})(\d{5})(\d{4})/,
                    "($1) $2-$3")
                } para ativar sua conta
                </SubTitleMessage>
                <ButtonDefault
                    onPress={() => {
                        navigation.popToTop();
                        navigation.navigate("ValideCode")
                    }}
                    title="Continuar"
                />
        </SafeArea>
    )
}