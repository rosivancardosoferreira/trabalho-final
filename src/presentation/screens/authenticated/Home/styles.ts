import styled from "styled-components/native";
export const TitleMessage = styled.Text`
    margin-top: 10px;
    color: ${({theme}) => theme.colors.blueDark};
    font-family: ${({theme}) => theme.fonts.interBold};
    font-size: 25px;
`;

export const ImageMessage = styled.Image`
    align-self: center;
    margin-bottom: 15px;
`;

export const SubTitleMessage = styled.Text`
    color: ${({theme}) => theme.colors.blueDark};
    font-family: ${({theme}) => theme.fonts.interMedium};
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ContainerItem = styled.TouchableOpacity`
    background-color: #F5F5F5;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 15px;
    flex-direction: row;
    box-sizing: border-box;
`;

export const ImagemItem = styled.Image`
    width: 47px;
    height: 47px;
`;


export const ContainerInfoItem = styled.TouchableOpacity`
    background-color: #F5F5F5;
    padding-left: 16px;
    padding-right: 16px;
`;

export const TitleItem = styled.Text`
    color: ${({theme}) => theme.colors.grayDark};
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.interBold};
`;

export const DescriptionItem = styled.Text`
    color: ${({theme}) => theme.colors.gray};
    font-size: 15px;
    font-family: ${({theme}) => theme.fonts.interMedium};
`;

export const ListItems = styled.FlatList`
    /* border: 2px solid red; */
`;