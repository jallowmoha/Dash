import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator headerMode= 'none' initialRouteName='Signup'>
        <MainStack.Screen name='Home' component={Home} />
        <MainStack.Screen name='Signup' component={Signup} />
        <MainStack.Screen name='Login' component={Login} />
    </MainStack.Navigator>
);


export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);

