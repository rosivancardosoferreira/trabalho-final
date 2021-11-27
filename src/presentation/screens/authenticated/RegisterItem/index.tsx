import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";
import Moment from "moment";

//CALL API
import api from "~/infra/services/api";
import { REGISTER_ITEM } from "~/infra/config/api";

//COMPONENTS
import ButtonWhite from "~/presentation/components/ButtonWhiteN";
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
    Eyes,
    EyesPress,
    ViewPass,
    ViewPassPress,
    TitlePage,
    SubTitle,
    CounterChars
} from "./styles";

import {
    borderAttention,
    borderDefault,
    DefaultStyleInput,
    DefaultTextInput,
    LabelInput,
    SafeArea,
    StyleScrollView,
    ViewRelative,
} from "~/styles/commonStyles";
import { themes } from "~/styles/themes";

//INTERFACE
import {iNavigation} from "~/data/protocols/iNavigation";
import { View } from "react-native";


interface FormData {
    name : string,
    description : string,
}

export default function RegisterItem({route,  navigation } : iNavigation) {
    const parameters = route.params;
    const schema = yup
      .object()
      .shape({        
        name: yup.string().required("Campo obrigatório"),
        description: yup.string().required("Campo obrigatório")
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

    const [counterChars, setCounterChars] = useState(0);
    const [sucess, setSucess] = useState(false);    

    
    function onSubmit(data : FormData){
        let payload = {
            name : data.name,
            description : data.description,
            phone : parameters.phone,
            user_id : parameters.user_id,
            name_user : parameters.name_user,
        }

        // return;

        setViewModaRequestlMsg("Realizando o registro");
        setViewModaRequestl(true);
        api
        .post(REGISTER_ITEM, payload)
            .then((res : any) => {
                setViewModaRequestlMsg("Sucesso!");
                setSucess(true);

                setTimeout(() => {
                    navigation.goBack();
                }, 1000);
                
                
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
                    sucess={sucess}
                />
        
                <StyleScrollView>
                <TitlePage>
                    Novo Registro
                </TitlePage>
                <SubTitle>
                    Informe os dados
                </SubTitle>

                    <LabelInput top={40}>Nome do item *</LabelInput>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DefaultTextInput                                
                                placeholderTextColor={themes.colors.grayLight}
                                placeholder="Digite o nome do item"
                                maxLength={50}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                attention={errors.name ? true : false}
                            />
                        )}
                        name="name"
                        defaultValue=""
                    />
                    <Attention
                        visible={errors.name ? true : false}
                        message={errors.name?.message}
                    />


                    <LabelInput top={15}>Descrição do item *</LabelInput>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <DefaultTextInput
                            multiline={true}
                            numberOfLines={2}
                            placeholder= "Descreva seu item"
                            maxLength={50}
                            onBlur={onBlur}
                            onChangeText={(e) => {onChange(e); setCounterChars(e.length)}}
                            value={value}
                        />
                        )}
                        name="description"
                        defaultValue=""
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                        <Attention
                            visible={errors.description ? true : false}
                            message={errors.description?.message}
                        />
                        <CounterChars>{counterChars}/50</CounterChars>
                    </View>

                    <ButtonDefault
                        top={25}
                        // onPress={() => navigation.navigate("FirstStep")}
                        onPress={handleSubmit(onSubmit)}
                        title="Registrar"
                    />
                    <ButtonWhite
                        top={20}
                        onPress={() => navigation.goBack()}
                        title="Cancelar"
                    />
                </StyleScrollView>
            </SafeArea>
    )
}