import React from "react";
import { View, Modal, Image } from "react-native";

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
    onDismiss : () => void,
    type: "success" | "error" | "information",
    message: string
}

export default function ModalAlerts({ visible, onDismiss, type, message } : PropsModalAlerts) {
    function titleError() {
        return(
            <CommonTitle>
                <Image
                    source={Success}
                />
                <TitleText
                    color={themes.colors.blue}
                >
                    Success
                </TitleText>
            </CommonTitle>
        )
    }

    function titleSucess() {
        return(
            <CommonTitle>
                <Image
                    source={Success}
                />
                <TitleText
                    color={themes.colors.blue}
                >
                    Success
                </TitleText>
            </CommonTitle>
        )
    }

    function titleInformation() {
        return(
            <CommonTitle>
                <Image
                    source={Attention}
                />
                <TitleText
                    color={themes.colors.yellow}
                >
                    Attention
                </TitleText>
            </CommonTitle>
        )
    }

    function checkBorder() {
        switch(type){
            case "success":
                return BorderSucess
            case "error":
                return BorderError
            case "information":
                return BorderInformations
            default:
                return BorderInformations
        }
    }
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onDismiss}
            >
                <ViewBackground>
                    <ContainerModal
                        onPress={onDismiss}
                        activeOpacity={1}
                    >
                    </ContainerModal>
                    <ChildrenrModal
                        style={checkBorder()}
                    >
                        {
                            type === "success" &&
                            titleSucess()
                        }
                        {
                            type === "information" &&
                            titleInformation()
                        }

                        <ContentText>
                            {message}
                        </ContentText>
                        <ButtonModal onPress={onDismiss}>
                            <TextButton>
                                CLOSE
                            </TextButton>
                        </ButtonModal>
                    </ChildrenrModal>
                </ViewBackground>
            </Modal>
        </View>
    )
}