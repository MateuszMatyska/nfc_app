import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../consts/colors';
import {styles} from './BasicButton.style';

type BasicButtonProps = {
  onPress: () => void;
  title: string;
};

const BasicButton: React.FC<BasicButtonProps> = ({
  onPress,
  title,
}: BasicButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <LinearGradient
      colors={[colors.secondary, colors.primary, colors.third]}
      style={styles.btn}>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default BasicButton;
