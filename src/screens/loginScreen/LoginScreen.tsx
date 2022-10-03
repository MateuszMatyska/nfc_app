import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {ScreenNames} from '../../navigation/consts/ScreensNames';
import {navigate} from '../../navigation/services/NavigationService';

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>React Native App Login</Text>
        <View>
          <Button
            title="Home"
            onPress={() => {
              navigate(ScreenNames.Home);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
