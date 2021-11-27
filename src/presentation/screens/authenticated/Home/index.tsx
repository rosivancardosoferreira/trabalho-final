import React, { useEffect, useState } from "react";
import Moment from "moment";


//CALL API
import api from "~/infra/services/api";
import { GET_ITEMS } from "~/infra/config/api";

//COMPONENTS
import ModalRequest from "~/presentation/components/ModalRequest";
import ModalAlertsErros from "~/presentation/components/ModalAlertsErros";
import ButtonNew from "~/presentation/components/ButtonNewItem";

//INTERFACE
import { iNavigation } from "~/data/protocols/iNavigation";

//ASSETS
import ItemImage from "~/assets/images/item.png";

//STYLES
import {
    SafeArea,
} from "~/styles/commonStyles";
import {
    TitleMessage,
    SubTitleMessage,
    ImageMessage,
    ContainerItem,
    ImagemItem,
    ContainerInfoItem,
    TitleItem,
    DescriptionItem,
    ListItems,
} from "./styles";

interface iItems {    
    id: number,
    name: string,
    description: string,
    user_id: number,
    created_at: string,
    updated_at: string,
}

export default function Home({route, navigation } : iNavigation) {
    const parameters = route.params;
    const [resultItems, setResultItems] = useState<iItems[]>([]);
    const [viewModaRequestl, setViewModaRequestl] = useState(false);
    const [viewModaRequestlMsg, setViewModaRequestlMsg] = useState("");
    const [requestErros, setRequestErros] = useState<Array<string>>([]);    
    const [viewModal, setViewModal] = useState(false);
    function controlModal() {
        setViewModal(!viewModal);
    };

    useEffect(() => {
        setViewModaRequestlMsg("Buscando seu dados");
        setViewModaRequestl(true);
        api
        .get(GET_ITEMS(parameters.payload.id))
            .then((res : any) => {
                setViewModaRequestl(false);
                setResultItems(res.data)
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
    }, [])

    function renderItem({ item } : {item : iItems}) {
        return(
            <ContainerItem>
                <ImagemItem
                    source={ItemImage}
                />
                <ContainerInfoItem>
                    <TitleItem>
                        {item.name}
                    </TitleItem>
                    <DescriptionItem>
                        {item.description+"\n\n"+
                        "Registrado em: "+Moment(item.created_at).format("L")}

                    </DescriptionItem>
                </ContainerInfoItem>
            </ContainerItem>
        )
    }

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '5sd8694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
    ];

    return(
        <SafeArea
            paddingRight={30}
            paddingLeft={30}
        >        

                <ModalAlertsErros
                    message={requestErros}
                    visible={viewModal}
                    onDismiss={controlModal}
                />
                <ModalRequest
                    visible={viewModaRequestl}
                    title={viewModaRequestlMsg}
                />
                <TitleMessage>
                    Olá, {parameters.payload.name}
                    
                </TitleMessage>
                <SubTitleMessage>
                    Você tem 3 item registrados
                </SubTitleMessage>                
                <ButtonNew
                    title="Adicionar novo"
                    bottom={20}
                    
                    onPress={() => {
                        navigation.navigate("RegisterItem", {
                            phone : parameters.payload.phone,
                            user_id : parameters.payload.id,
                            name_user : parameters.payload.name,
                        });
                    }}
                />
                <ListItems
                    data={resultItems}
                    keyExtractor={(item: number | any) => item.id}
                    renderItem={renderItem}
                />
        </SafeArea>
    )
}