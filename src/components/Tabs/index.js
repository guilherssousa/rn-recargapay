import React from 'react';

import { Container, TabsContainer, TabItem, TabTitle, TabText, TabDescription } from './styles';

export default function Tabs() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <TabTitle>
                        <TabText>Dê uma recarga, receba R$10!</TabText>
                    </TabTitle>
                    <TabDescription>Ganhe por cada um que fizer a 1ª compra a vista.</TabDescription>
                </TabItem>
                <TabItem>
                    <TabTitle>
                        <TabText>Peça já seu Cartão Pré-pago!</TabText>
                    </TabTitle>
                    <TabDescription>Compre a vontade e receba 1% de volta.</TabDescription>
                </TabItem>
                <TabItem>
                    <TabTitle>
                        <TabText>Com a carteira tem desconto!</TabText>
                    </TabTitle>
                    <TabDescription>Adicione o cartão e compre pagando menos.</TabDescription>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}