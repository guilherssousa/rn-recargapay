import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Item, ItemIcon, ItemText, } from './styles';

export default function Menu() {
    return(
        <>
            <Container>
                <Item>
                    <ItemIcon>
                        <Icon name="mobile-alt" size={20} color="#495057" />
                    </ItemIcon>
                    <ItemText>Recarga de</ItemText>
                    <ItemText>Celular</ItemText>
                </Item>
                <Item>
                    <ItemIcon>
                        <Icon name="file-invoice-dollar" size={20} color="#495057" />
                    </ItemIcon>
                    <ItemText>Pagar contas</ItemText>
                    <ItemText>e boletos</ItemText>
                </Item>
                <Item>
                    <ItemIcon>
                        <Icon name="bus" size={20} color="#495057" />
                    </ItemIcon>
                    <ItemText>Cartão de</ItemText>
                    <ItemText>Transporte</ItemText>
                </Item>
            </Container>
            <Container>
                <Item>
                    <ItemIcon>
                        <Icon name="city" size={20} color="#495057" />
                    </ItemIcon>
                    <ItemText>Zona Azul SP</ItemText>
                </Item>
                <Item>
                    <ItemIcon>
                        <Icon name="gift" size={20} color="#495057" />
                    </ItemIcon>
                    <ItemText>Vale-presente</ItemText>
                </Item>
            </Container>
        </>
    );
}