import React, { useState } from "react";
import {
    Background, 
    Input, 
    SubmitButton, 
    SubmitText
} from './styles';

import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import api from '../../services/api'
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";

export default function New() {
    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }


    async function handleAdd() {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return (
        // Quando clicar fora do teclado do celular, ele o fecha
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
            <Background>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input
                        placeholder="Descrição desse registro"
                        value={labelInput}
                        onChangeText={ (e) => setLabelInput(e) }
                    />

                    <Input
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(e) => setValueInput(e) }
                    />

                    <RegisterTypes type={type} changeTypeChanged={ (e) => setType(e) } />

                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}
