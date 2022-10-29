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
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    margin: 16,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    color: colors.primary,
  },
  listContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  cardContainerCardRow: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainerBtnRow: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  flatlistComp: {
    width: '98%',
  },
});
