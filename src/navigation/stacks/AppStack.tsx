import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../consts/ScreensNames';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import ScanCardScreen from '../../screens/scanCardScreen/ScanCardScreen';
import CardScreen from '../../screens/cardsScreen/CardsScreen';
import TagsScanScreen from '../../screens/tagsScanScreen/TagsScanScreen';
import TagsScreen from '../../screens/tagsScreen/TagsScreen';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
    <Stack.Screen name={ScreenNames.ScanCards} component={ScanCardScreen} />
    <Stack.Screen name={ScreenNames.Cards} component={CardScreen} />
    <Stack.Screen name={ScreenNames.ScanTags} component={TagsScanScreen} />
    <Stack.Screen name={ScreenNames.Tags} component={TagsScreen} />
  </Stack.Navigator>
);

export default AppStack;
