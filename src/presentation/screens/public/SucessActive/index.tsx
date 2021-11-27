import React from "react";
import { View, Image } from "react-native";
import { Button } from "react-native";

//COMPONENTS
import ButtonDefault from "~/presentation/components/ButtonDefault";

//INTERFACE
import { iNavigation } from "~/data/protocols/iNavigation";

//ASSETS
import MessageImage from "~/assets/images/validecode.png";

//STYLES
import {
    SafeArea,
} from "~/styles/commonStyles";
import {
    TitleMessage,
    SubTitleMessage,
    ImageMessage
} from "./styles";

export default function SucessActive({ navigation } : iNavigation) {
    return(
        <SafeArea
            paddingRight={30}
            paddingLeft={30}
            centerVertical
        >                
                <TitleMessage>
                    Conta ativada com sucesso
                </TitleMessage>
                <ImageMessage
                    source={MessageImage}
                />
                <SubTitleMessage>
                    Agora você pode realizar o login no aplicativo
                </SubTitleMessage>
                <ButtonDefault
                    onPress={() => {
                        navigation.popToTop();
                        navigation.navigate("Login")
                    }}
                    title="Ir para login"
                />
        </SafeArea>
    )
}