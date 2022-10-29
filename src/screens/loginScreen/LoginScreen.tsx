import React from 'react';
import {View, Text} from 'react-native';
import {ScreenNames} from '../../navigation/consts/ScreensNames';
import {navigate} from '../../navigation/services/NavigationService';
import BasicButton from '../../components/buttons/basicButton/BasicButton';
import Container from '../../components/container/Container';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faNfcSymbol} from '@fortawesome/free-brands-svg-icons/faNfcSymbol';
import {colors} from '../../consts/colors';
import {styles} from './LoginScreen.style';

const LoginScreen: React.FC = () => {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>NFC Scanner</Text>
          <FontAwesomeIcon
            color={colors.primary}
            size={48}
            icon={faNfcSymbol}
          />
        </View>
        <View style={[styles.container, styles.btnContainer]}>
          <BasicButton
            title="Start"
            onPress={() => {
              navigate(ScreenNames.Home);
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
