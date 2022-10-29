import React from 'react';
import store from './src/store/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/stacks/AppStack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {navigationRef} from './src/navigation/services/NavigationService';

const App: React.FC = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
