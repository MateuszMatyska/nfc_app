import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../consts/ScreensNames';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import HomeScreen from '../../screens/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default AppStack;
