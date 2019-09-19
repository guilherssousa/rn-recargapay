import React from 'react';

import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'componentWillMount'
]);

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
        <Routes />
    </>
);

export default App;
