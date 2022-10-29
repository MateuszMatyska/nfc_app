import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundColors} from '../../consts/colors';
import {styles} from './Container.style';

type ContainerProps = {
  children: JSX.Element;
};

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  const {primary, secondary, third, secondaryDark, thirdDark} =
    backgroundColors;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[secondary, primary, third, secondaryDark, thirdDark]}
        style={styles.container}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Container;
