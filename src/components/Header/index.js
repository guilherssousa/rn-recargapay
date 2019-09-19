import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import { Container, Top, Current, AddMoneyButton, AddMoneyText, FavoriteFunctions, FavItem, FavName, FavIcon } from './styles';

export default function Header() {
    return (
      <Container>
        <Top>
            <Current>R$250,00</Current>
            <AddMoneyButton>
                <AddMoneyText>Adicionar dinheiro</AddMoneyText>
            </AddMoneyButton>
        </Top>

        <FavoriteFunctions>
            <FavItem>
                <FavIcon>
                    <Icon name="qrcode" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Pagar com QR Code</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="paper-plane" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Envio de dinheiro</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="fax" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Máquina de Cartão</FavName>
            </FavItem>
            <FavItem>
                <FavIcon>
                    <Icon name="credit-card" size={28} color="#FFF" />
                </FavIcon>
                <FavName>Cartão Pré-pago</FavName>
            </FavItem>
        </FavoriteFunctions>
      </Container>
    );
  }