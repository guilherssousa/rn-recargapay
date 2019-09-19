import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Header = styled.View`
    padding: 10px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0,0,0,0.4);
`;

export const SettingsTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Function = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
`;

export const FunctionName = styled.Text`
    font-weight: bold;
`;

export const FunctionValue = styled.Text`
`;

export const ValueInput = styled.TextInput``;

export const ValueButton = styled.TouchableOpacity``;
