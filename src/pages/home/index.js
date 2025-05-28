import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";
import { format } from 'date-fns'

import Header from "../../components/Header/index";
import BalanceItem from "../../components/BalanceItem";
import { 
    Background,
    ListBalance
} from "./styles";

export default function Home() {

    const isFocused = useIsFocused();

    const [listBalance, setListBalance] = useState([]);
    const [dateMoments, setDateMoments] = useState(new Date());


    useEffect(() => {
        // quando o componente e montado ele define essa variavel como true.
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMoments, 'dd/MM/yyyy');

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated,
                }
            })
            
            if(isActive) {
                setListBalance(balance.data);
            }


        }

        getMovements()

        // ao desmontar o componente ele define esse componente como false, para eviatar renderizações desnecessarias
        return () => isActive = false;
    }, [isFocused]);

    return (
        <Background>
            <Header title="Minhas movimentações" />

            <ListBalance 
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={ item => item.tag } 
                renderItem={({ item }) => (<BalanceItem data={item} />)}

            />
        </Background>
    )
}