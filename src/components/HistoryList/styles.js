import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #F0F3FF;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 12px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.type === 'despesa' ? '#c62c36' : '#049301'};
    padding: 4px 8px;
    border-radius: 6px;
    margin-bottom: 4px;
    gap: 5px;
`;

export const ValorText = styled.Text`
    color: #121212;
    font-size: 22px;
`;
