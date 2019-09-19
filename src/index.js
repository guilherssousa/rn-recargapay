import React from 'react';

import { StatusBar, YellowBox, SafeAreaView } from 'react-native';

YellowBox.ignoreWarnings([
    'componentWillMount'
]);

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
        <SafeAreaView>
            <Routes />
        </SafeAreaView>
    </>
);

export default App;
