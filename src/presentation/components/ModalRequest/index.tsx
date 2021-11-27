import React from "react";
import { ActivityIndicator, Modal, Image, StyleSheet, Text, View } from "react-native";

//STYLES
import {
    ContainerModal,
    ChildrenrModal,
    CommonTitle,
    ViewBackground,
    BorderSucess,
    BorderError,
    BorderInformations,
    TitleText,
    ContentText,
    ButtonModal,
    TextButton,
} from "./styles";
import { themes } from "~/styles/themes";

//ASSETS
import Success from "~/assets/images/icons/success.png";
import Attention from "~/assets/images/icons/attention.png";
import Attentiondark from "~/assets/images/icons/attentiondark.png";

interface PropsModalAlerts {
    visible : boolean,
    title: string,
    sucess? : boolean,
}

export default function ModalRequest({ visible, title, sucess } : PropsModalAlerts) {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                <ViewBackground>
                    <ContainerModal>
                        {
                            !sucess &&
                            <ActivityIndicator size="large"  color={themes.colors.blueDark} />
                        }
                        <ContentText>
                            {title}
                        </ContentText>
                    </ContainerModal>
                </ViewBackground>
            </Modal>
        </View>
    )
}