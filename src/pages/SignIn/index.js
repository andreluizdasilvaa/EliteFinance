import React from "react";
import { Platform } from 'react-native'
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

export default function SignIn() {
    const navigation = useNavigation();
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
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Seu Email"
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Acessar</SubmitText>
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