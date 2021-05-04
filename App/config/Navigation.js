import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Transfer from '../screens/Transfer'
import Dashboard from '../screens/Dashboard'
import Loading from '../screens/Loading'

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator headerMode='none' initialRouteName=''>
        <MainStack.Screen name='Loading' component={Loading} />
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='Signup' component={Signup} />
        <MainStack.Screen name='Login' component={Login} />
        <MainStack.Screen name='Transfer' component={Transfer} />
        <MainStack.Screen name='Dashboard' component={Dashboard} />
    </MainStack.Navigator>
);


export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);

 