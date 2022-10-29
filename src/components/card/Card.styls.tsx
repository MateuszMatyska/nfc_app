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
  cardNumberContainer: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
  },
  cardNumber: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
  },
  infoContainer: {
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoTextExp: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
  },
  infoText: {
    textAlign: 'left',
    fontSize: 16,
    color: colors.white,
  },
});
