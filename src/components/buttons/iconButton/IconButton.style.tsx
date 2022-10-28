import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../consts/colors';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  btn: {
    width: window.width * 0.45,
    height: window.width * 0.45,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 16,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
  },
});
