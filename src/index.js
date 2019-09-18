import React from 'react';

import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
        <Routes />
    </>
);

export default App;
