import React, { useContext } from "react";
import { View, Text} from 'react-native'

import {
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
} from "../SignIn/styles";

import { AuthContext } from '../../contexts/auth'

export default function SignUp() {

    const { user } = useContext(AuthContext);

    function handleSignUp() {
        console.log(user);
        alert(user.nome);
    }

    return (
        <Background>
            <Container
                behavior="padding"
                enabled
            >

                <AreaInput>
                    <Input 
                        placeholder="Nome"
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
            
        </Background>
    )
}