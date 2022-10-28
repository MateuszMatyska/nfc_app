import {StyleSheet} from 'react-native';
import {colors} from '../../../consts/colors';

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  title: {
    margin: 16,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
  },
});
