import { StyleSheet }from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 300px;
    background: #FFF;
    border: ${StyleSheet.hairlineWidth}px;
    border-radius: 4px;
    padding: 20px 25px 55px 15px;
    margin: 3px;
    border-color: #24292ec9;
    elevation: 1;
`;

export const TabTitle = styled.View`
`;

export const TabText = styled.Text``;

export const TabDescription = styled.Text`
    color: #24292ec9;
`;