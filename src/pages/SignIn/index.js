import React, { useState, useContext } from "react";
import { ActivityIndicator, Platform } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from "./styles";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSingIn() {
        if(!email || !password) {
            alert('Dados invalido, corrija os campos abaixo');
            return;
        }

        signIn(email, password)
    }

    return (
        <Background>
            <Container
                behavior={'padding'}
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />  

                <AreaInput>
                    <Input 
                        placeholder="Seu Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleSingIn}>
                    {loadingAuth ? (
                        <ActivityIndicator 
                            size={20}
                            color='#fff'
                        />
                    ) : (
                        <SubmitText>Acessar</SubmitText>
                    )}
                </SubmitButton>

                <Link
                    onPress={() => { navigation.navigate('SignUp') }}
                >
                    <LinkText>Crie uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}