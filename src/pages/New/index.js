import React, { useState } from "react";
import {
    Background, 
    Input, 
    SubmitButton, 
    SubmitText
} from './styles';

import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";

import Header from "../../components/Header";

export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');


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

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}
