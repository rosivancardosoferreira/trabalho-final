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
import Alerterror from "~/assets/images/icons/alerterror.png";

interface PropsModalAlerts {
    visible : boolean,
    onDismiss : () => void,
    message: Array<string>;
}

export default function ModalAlertsErros({ visible, onDismiss,  message } : PropsModalAlerts) {
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
                    <ChildrenrModal style={BorderError}>
                        <CommonTitle>
                            <Image
                                source={Alerterror}
                            />
                            <TitleText
                                color={themes.colors.red}
                            >
                                Erro
                            </TitleText>
                            
                        </CommonTitle>
                        {
                            message.length > 0 &&
                            message.map((elem, index) => (
                                <ContentText key={index}>
                                    {elem}
                                </ContentText>
                            ))
                        }
                        <ButtonModal onPress={onDismiss}>
                            <TextButton>
                                Fechar
                            </TextButton>
                        </ButtonModal>
                    </ChildrenrModal>
                </ViewBackground>
            </Modal>
        </View>
    )
}