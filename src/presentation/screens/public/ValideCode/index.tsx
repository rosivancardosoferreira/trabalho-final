import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";
import Moment from "moment";

//CALL API
import api from "~/infra/services/api";
import { VALIDATE_CODE } from "~/infra/config/api";

//COMPONENTS
import Title from "~/presentation/screens/public/Register/components/Title";
import Attention from "~/presentation/components/Attention";
import ModalRequest from "~/presentation/components/ModalRequest";
import ButtonDefault from "~/presentation/components/ButtonDefault";
import ModalAlertsErros from "~/presentation/components/ModalAlertsErros";

//UTILS
import { DoubleSpaceRemover } from "~/utils/functions";


//MASKS
import masks from "~/utils/masks";

//ASSETS
import NoVisibility from "~/assets/images/icons/novisibility.png";
import Visibility from "~/assets/images/icons/visibility.png";

//STYLES 
import {
    LabelInputCode,
    CodeTextInput,
    MessageCodeInvalidade
} from "./styles";

import {
    SafeArea,
    StyleScrollView,
    borderDefault,
    borderAttention
} from "~/styles/commonStyles";
import { themes } from "~/styles/themes";

//INTERFACE
import {iNavigation} from "~/data/protocols/iNavigation";


interface FormData {
    code: string,
}

export default function ValideCode({route,  navigation } : iNavigation) {
    const schema = yup
      .object()
      .shape({
        code: yup.string().required("Campo obrigatório").min(4, "O código possue 4 dígitos"),
    });

    const {
        control,
        getValues,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        mode: "all",
        defaultValues: {},
        resolver: yupResolver(schema),
    });

    const [viewModal, setViewModal] = useState(false);
    function controlModal() {
        setViewModal(!viewModal);
    };
    const [viewModaRequestl, setViewModaRequestl] = useState(false);
    const [viewModaRequestlMsg, setViewModaRequestlMsg] = useState("");
    const [requestErros, setRequestErros] = useState<Array<string>>([]);

    const [viewPassword, setViewPassword] = useState(false);
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

    
    function onSubmit(data : FormData){
        let payload = {
            code: data.code
        }        
        setViewModaRequestlMsg("Verificando código");
        setViewModaRequestl(true);
        api
        .post(VALIDATE_CODE, payload)
            .then((res : any) => {
                setViewModaRequestl(false);
                navigation.popToTop();
                navigation.navigate("SucessActive");
            })
            .catch((err : any) => {
                if(err.response){
                    setRequestErros(Object.values(err.response.data))
                }else{
                    setRequestErros(["A conexão com o servidor falhou!"]);
                }
                setViewModal(true);
                setViewModaRequestl(false);
            });
    }

    return(
            <SafeArea paddingBottom={0}>
                <ModalAlertsErros
                    message={requestErros}
                    visible={viewModal}
                    onDismiss={controlModal}
                />
                <ModalRequest
                    visible={viewModaRequestl}
                    title={viewModaRequestlMsg}
                />
        
                <StyleScrollView>
                    <Title
                        title="Insira o código"
                        subTitle="Quase lá, informe o código recebido"
                    />

                    

                    <LabelInputCode>Insira o código aqui</LabelInputCode>                        

                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        


                        <TextInputMask
                                type="custom"
                                style={[
                                    CodeTextInput,
                                    errors.code ? borderAttention : borderDefault]}
                                keyboardType="decimal-pad"
                                options={masks.code}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                maxLength={4}
                                placeholderTextColor={themes.colors.grayLight}
                            />

                        )}
                        name="code"
                        defaultValue=""
                    />
                        <MessageCodeInvalidade
                            visible={errors.code ? true : false}
                        >{errors.code?.message}</MessageCodeInvalidade>

                    <ButtonDefault
                        top={25}
                        onPress={handleSubmit(onSubmit)}
                        title="Validar"
                    />     
                </StyleScrollView>
            </SafeArea>
    )
}