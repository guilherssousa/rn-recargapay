import React from 'react';

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from '~/pages/Main';

//Não pus icones nas rotas, pois eu só queria fazer uma view (Main) e não havia
//como customizar todas diferentemente dessa forma, sabendo que todas estão
//disparando para a rota 'Main'.

const Routes = createAppContainer(createBottomTabNavigator({ 
    Serviços: Main,
    Histórico: Main,
    Prime: Main,
    Empréstimo: Main,
    Perfil: Main,
}));

export default Routes;
