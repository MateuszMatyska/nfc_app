import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../consts/ScreensNames';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import ScanCardScreen from '../../screens/scanCardScreen/ScanCardScreen';
import CardScreen from '../../screens/cardsScreen/CardsScreen';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
    <Stack.Screen name={ScreenNames.ScanCards} component={ScanCardScreen} />
    <Stack.Screen name={ScreenNames.Cards} component={CardScreen} />
  </Stack.Navigator>
);

export default AppStack;
