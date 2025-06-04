import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import api from "../../services/api";
import { format } from 'date-fns'

import Header from "../../components/Header/index";
import BalanceItem from "../../components/BalanceItem";
import HistoryList from "../../components/HistoryList";
import { 
    Background,
    ListBalance,
    Area,
    Title,
    List
} from "./styles";

export default function Home() {

    const isFocused = useIsFocused();

    const [listBalance, setListBalance] = useState([]);
    const [dateMoments, setDateMoments] = useState(new Date());
    const [movements, setMovements] = useState([]);

    useEffect(() => {
        // quando o componente e montado ele define essa variavel como true.
        let isActive = true;

        async function getMovements() {
            let dateFormated = format(dateMoments, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated,
                }
            })
            
            if(isActive) { 
                setListBalance(balance.data);
                setMovements(receives.data);
            }

        }

        getMovements()

        // ao desmontar o componente ele define esse componente como false, para eviatar renderizações desnecessarias
        return () => isActive = false;
    }, [isFocused, dateMoments]);

    async function handleDelete(id) {
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMoments(new Date())
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Background>
            <Header title="Minhas movimentações" />

            <ListBalance 
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={ item => item.tag } 
                renderItem={({ item }) => (<BalanceItem data={item} />)}
                showsVerticalScrollIndicator={false}
            />

            <Area>
                <TouchableOpacity>
                    <MaterialIcons name="event" size={30} color="black" />
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>

            <List 
                data={movements}
                keyExtractor={ item => item.id}
                renderItem={ ({ item }) => <HistoryList data={item} deleteItem={handleDelete} /> }
                showsVerticalScrollIndicator={false}
            />
        </Background>
    )
}