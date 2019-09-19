import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Top, Current, AddMoneyButton, AddMoneyText, FavoriteFunctions, FavItem, FavName, FavIcon } from './styles';

export default function Header() {
    return (
      <Container>
        <Top>
            <Current>R$0,00</Current>
            <AddMoneyButton>
                <AddMoneyText>Adicionar dinheiro</AddMoneyText>
            </AddMoneyButton>
        </Top>

        <FavoriteFunctions>
            <FavItem>
                <FavIcon>
                    <Icon name="qrcode" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Pagar com</FavName>
                <FavName>QR Code</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="paper-plane" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Envio de</FavName>
                <FavName>dinheiro</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="fax" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Máquina</FavName>
                <FavName>de Cartão</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="credit-card" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Cartão</FavName>
                <FavName>Pré-pago</FavName>
            </FavItem>
        </FavoriteFunctions>
      </Container>
    );
  }