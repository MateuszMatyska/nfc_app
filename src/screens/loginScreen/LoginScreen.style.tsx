import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  btnContainer: {
    width: '80%',
  },
  title: {
    margin: 16,
    padding: 10,
    textAlign: 'center',
    fontSize: 36,
    color: colors.primary,
  },
});
