import React, { useMemo } from "react";

import {
    Container,
    Label,
    Balance
} from './styles';


export default function BalanceItem({ data }) {

    // A cada vez que o 'data'( recebido por prop ) mudar, vai rodar essa função dnv.
    const labelName = useMemo(() => {
        if(data.tag === 'saldo') {
            return {
                label: 'Saldo atual',
                color: '3744C5'
            }
        } else if (data.tag === 'receita') {
            return {
                label: 'Entradas de hoje',
                color: '00b94a'
            }
        } else {
            return {
                label: 'Saidas de hoje',
                color: 'Ef463a'
            }
        }

    }, [data]);

    return (
        <Container bg={labelName.color}>
            <Label>{labelName.label}</Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}