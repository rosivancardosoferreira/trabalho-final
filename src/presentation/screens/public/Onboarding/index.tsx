import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { Button } from "react-native";

//COMPONENTS
import ButtonYellow from "~/presentation/components/ButtonYellow";

//INTERFACE
import { iNavigation } from "~/data/protocols/iNavigation";

//ASSETS
import AppImage from "~/assets/images/board.png";

//STYLES
import {
    SafeArea,
} from "~/styles/commonStyles";
import {
    TitleMessage,
    ImageBack,
    ItemsBack
} from "./styles";

export default function Onboarding({ navigation } : iNavigation) {    
    return(
        <SafeArea
            paddingTop={-1}
            paddingRight={0}
            paddingLeft={0}
        >                
            <ImageBack source={AppImage}>
                <ItemsBack>
                    <TitleMessage>
                        Gerencia seus items guardados
                        e tenha o controle na palma da sua mão.
                    </TitleMessage>
                    <ButtonYellow
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                        title="Ir para login"
                    />
                </ItemsBack>
            </ImageBack>
        </SafeArea>
    )
}