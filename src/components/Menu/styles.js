import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Item = styled.View`
    flex: 1;
    padding: 30px 20px;
    align-items: center;
`;

export const ItemIcon = styled.View`
    padding-bottom: 3px;
`;

export const ItemText = styled.Text`
    font-size: 12px;
    text-align: center;
`;