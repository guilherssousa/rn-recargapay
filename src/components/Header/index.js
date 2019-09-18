import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Top, Current, AddMoneyButton, AddMoneyText } from './styles';

export default function Header() {
    return (
      <Container>
          <Top>
              <Current>R$0,00</Current>
              <AddMoneyButton>
                <AddMoneyText>Adicionar dinheiro</AddMoneyText>
              </AddMoneyButton>
          </Top>
      </Container>
    );
  }