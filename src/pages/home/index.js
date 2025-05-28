import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header/index";
import { Background } from "./styles";
export default function Home() {
    const { signOut, user } = useContext(AuthContext);

    return (
        <Background>
            <Header title="Minhas movimentações"/>
            <Text>Olá {user.name}</Text>

            <Button 
                title="Sair da conta"
                onPress={() => {
                    signOut();
                }}
            />

        
            <StatusBar style="dark" />
        </Background>
    )
}