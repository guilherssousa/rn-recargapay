import React, { useState } from 'react';

import { KeyboardAvoidingView } from 'react-native';

import api from '~/services/api';

import { Container, Header, SettingsTitle, Function, FunctionName, FunctionValue, ValueInput, ValueButton } from './styles';

export default function Settings({ navigation }) {
    const [saldo, setSaldo] = useState('');

    async function handleCurrencies() {
        api.saldo = saldo;
        navigation.navigate('Main');
    }

    return (
        <Container>
            <KeyboardAvoidingView>
                <Header>
                    <SettingsTitle>Configurações do desenvolvedor</SettingsTitle>
                </Header>
                <Function>
                    <FunctionName>Região</FunctionName>
                    <FunctionValue>{api.region}</FunctionValue>
                </Function>
                <Function>
                    <FunctionName>Moeda</FunctionName>
                    <FunctionValue>{api.currencies}</FunctionValue>
                </Function>
                <Function>
                    <FunctionName>Saldo Estático</FunctionName>
                    <FunctionValue>{api.saldo}</FunctionValue>
                </Function>
                <Function>
                    <FunctionName>Alterar Saldo Estático</FunctionName>
                    <ValueInput keyboardType={'numeric'} placeholder="Insira o valor" onChangeText={setSaldo} />
                    <ValueButton onPress={handleCurrencies}><FunctionValue>></FunctionValue></ValueButton>
                </Function>
            </KeyboardAvoidingView>
        </Container>
    );
}