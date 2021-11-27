import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native";

//COMPONENTS
import ButtonDefault from "~/presentation/components/ButtonDefault";

//INTERFACE
import { iNavigation } from "~/data/protocols/iNavigation";

//ASSETS
import MessageImage from "~/assets/images/messageimage.png";

//STYLES
import {
    SafeArea,
} from "~/styles/commonStyles";
import {
    TitleMessage,
    SubTitleMessage,
    ImageMessage
} from "./styles";

export default function MessageCode({ navigation } : iNavigation) {
    return(
        <SafeArea
            paddingRight={30}
            paddingLeft={30}
            centerVertical
        >                
                <TitleMessage>
                    Verificação de celular
                </TitleMessage>
                <ImageMessage
                    source={MessageImage}
                />
                <SubTitleMessage>
                    Foi lhe enviado uma mensagem com um código para ativar sua conta.
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