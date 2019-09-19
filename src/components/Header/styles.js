import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Top = styled.View`
    background: #316AB1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const Current = styled.Text`
    color: #FFF;
    font-size: 24px;
`;

export const AddMoneyButton = styled.TouchableOpacity`
    border-radius: 25px;
    padding: 10px;
    background: #FB8931;
    flex-direction: row;
`;

export const AddMoneyText = styled.Text`
    color: #FFF;
    font-size: 12px;
`;

export const FavoriteFunctions = styled.View`
    background: #2C5F9E;
    flex-direction: row;
    justify-content: space-between;
`;

export const FavItem = styled.View`
    align-items: center;
    justify-content: center;
    padding: 18px;
`;

export const FavIcon = styled.View`
    padding-bottom: 3px;
`;

export const FavName = styled.Text`
    color: #FFF;
    font-size: 10px;
`;