import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/stacks/AppStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
