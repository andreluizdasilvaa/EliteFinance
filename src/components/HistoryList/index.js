import React from "react";
import { Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    Container,
    Tipo,
    IconView,
    TipoText,
    ValorText
} from './styles';
import {
    Alert,
    TouchableWithoutFeedback
} from 'react-native';

export default function HistoryList({ data, deleteItem }) {

    function handleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => {
                        deleteItem(data.id)
                    }
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView type={data.type}>
                        <AntDesign name={data.type === 'despesa' ? 'arrowdown' : 'arrowup'} size={24} color="#fff" />
                        <TipoText>{ data.type }</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )   
}
