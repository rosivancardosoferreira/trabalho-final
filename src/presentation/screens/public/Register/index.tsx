import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";
import Moment from "moment";

//CALL API
import api from "~/infra/services/api";
import { CHECK_EMAIL, REGISTER_USER } from "~/infra/config/api";

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
    Eyes,
    EyesPress,
    ViewPass,
    ViewPassPress,
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


interface FormData {
    name: string,
    phone: string,
    email: string,
    password: string,
    confirm_password: string,
}

export default function Register({route,  navigation } : iNavigation) {
    const schema = yup
      .object()
      .shape({
        name: yup.string().required("Campo obrigatório"),
        phone: yup.string().required("Campo obrigatório").min(15, "Telefone inválido"),
        email: yup.string().email("Formato de e-mail inválido").required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório").min(4, "A senha deve ter pelo menos 4 dígitos"),
        confirm_password: yup.string().required("Campo obrigatório").oneOf([yup.ref("password"), null], "As senhas não conferem"),
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
            name: "Rosivan",
            phone: data.phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", ""),
            email: data.email,
            password: data.password,
        }
        
        setViewModaRequestlMsg("Verificando e-mail");
        setViewModaRequestl(true);

        api
        .post(CHECK_EMAIL, {email : data.email})
        .then((res : any) => {
            setViewModaRequestlMsg("Gravando dados");
            api
            .post(REGISTER_USER, payload)
                .then((res : any) => {
                    setViewModaRequestl(false);
                    navigation.popToTop();
                    navigation.navigate("MessageCode");
                    
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
                        title="Registro"
                        subTitle="Insira seus dados"
                    />

                    <LabelInput top={30}>Nome *</LabelInput>                    
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <DefaultTextInput
                            placeholder="Digite seu nome"
                            maxLength={50}
                            onBlur={onBlur}
                            onChangeText={(e) => onChange(DoubleSpaceRemover(e))}
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
                    
                    <LabelInput top={15}>Telefone *</LabelInput>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask
                                type="custom"
                                style={[
                                    DefaultStyleInput,
                                    errors.phone ? borderAttention : borderDefault]}
                                keyboardType="decimal-pad"
                                options={masks.phone}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Digite seu número"
                                placeholderTextColor={themes.colors.grayLight}
                            />
                        )}
                        name="phone"
                        defaultValue=""
                    />
                    <Attention
                        visible={errors.phone ? true : false}
                        message={errors.phone?.message}
                    /> 

                    <LabelInput top={15}>E-mail *</LabelInput>
                    <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DefaultTextInput                                
                                placeholderTextColor={themes.colors.grayLight}
                                placeholder="Digite seu e-mail"
                                maxLength={50}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={(e) => {onChange(e.trim().replace(" ", ""))}}
                                keyboardType="email-address"
                                value={value}
                                attention={errors.email ? true : false}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    <Attention
                        visible={errors.email ? true : false}
                        message={errors.email?.message}
                    />


                    <LabelInput top={10}>Senha *</LabelInput>
                    <ViewRelative>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DefaultTextInput
                                    secureTextEntry={!viewPassword}
                                    placeholderTextColor={themes.colors.grayLight}
                                    maxLength={20}
                                    placeholder= "********"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    attention={errors.password ? true : false}
                                />
                            )}
                            name="password"
                            defaultValue=""
                        />
                        <EyesPress
                            onPress={() => (setViewPassword(!viewPassword))}
                        >
                            <Eyes   
                                resizeMode="contain"
                                source={!viewPassword ? NoVisibility : Visibility}
                            />
                        </EyesPress>
                    </ViewRelative>
                    <Attention
                        visible={errors.password ? true : false}
                        message={errors.password?.message}
                    />


                    <LabelInput top={15}>Confirmar senha *</LabelInput>
                    <ViewRelative>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <DefaultTextInput
                                    secureTextEntry={!viewConfirmPassword}
                                    placeholderTextColor={themes.colors.grayLight}
                                    maxLength={20}
                                    placeholder= "********"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    attention={errors.confirm_password ? true : false}
                                />
                            )}
                            name="confirm_password"
                            defaultValue=""
                        />
                        <EyesPress
                            onPress={() => (setViewConfirmPassword(!viewConfirmPassword))}
                        >
                            <Eyes   
                                resizeMode="contain"
                                source={!viewConfirmPassword ? NoVisibility : Visibility}
                            />
                        </EyesPress>
                    </ViewRelative>

                    <Attention
                        visible={errors.confirm_password ? true : false}
                        message={errors.confirm_password?.message}
                    />


                    <ButtonDefault
                        top={25}
                        // onPress={() => navigation.navigate("FirstStep")}
                        onPress={handleSubmit(onSubmit)}
                        title="Registrar"
                    />     
                </StyleScrollView>
            </SafeArea>
    )
}