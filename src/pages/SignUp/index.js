import React, { useContext, useState, useEffect } from "react";
import { View, Text, ActivityIndicatorBase, ActivityIndicator } from 'react-native'

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

    const { signUp, loadingAuth } = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if(!nome || !email || !password) {
            alert('Dados invalidos')
            return;
        }
        signUp(email, password, nome);
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
                        value={nome}
                        onChangeText={(e) => setNome(e)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color={"#fff"}/>
                        ) : (
                           <SubmitText>Cadastrar</SubmitText> 
                        )
                    }
                    
                </SubmitButton>

            </Container>
            
        </Background>
    )
}