import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  tagContainer: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
  },
  infoText: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.white,
  },
});
