import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getValue} from '../../store/Slices/CounterSlice';
import {increment, decrement} from '../../store/Slices/CounterSlice';

const LoginScreen: React.FC = () => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>React Native App Login</Text>
        <Text>Value {value}</Text>
        <Button
          onPress={() => {
            dispatch(increment());
          }}
          title="Add"
        />
        <Button
          onPress={() => {
            dispatch(decrement());
          }}
          title="Remove"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
