import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../consts/colors';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  btn: {
    width: window.width * 0.16,
    height: window.width * 0.16,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
