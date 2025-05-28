import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Container, Title, ButtonMenu } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';

export default function Header({ title }) {
    const navigation = useNavigation();
    return (
        <Container>
            <ButtonMenu onPress={ () => navigation.openDrawer() }>
                <Entypo name="menu" size={35} color="#000" />
            </ButtonMenu>
            { title && (
                <Title>
                    {title}
                </Title>
            )}
        </Container>
    )
};