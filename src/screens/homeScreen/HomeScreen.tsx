import React from 'react';
import {Text, View} from 'react-native';
import {ScreenNames} from '../../navigation/consts/ScreensNames';
import {navigate} from '../../navigation/services/NavigationService';
import Container from '../../components/container/Container';
import IconButton from '../../components/buttons/iconButton/IconButton';
import {faNfcSymbol} from '@fortawesome/free-brands-svg-icons/faNfcSymbol';
import {styles} from './HomeScreen.style';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <View style={styles.container}>
        <View style={[styles.container, styles.titleContainer]}>
          <Text style={styles.title}>Main Menu</Text>
        </View>
        <View style={[styles.container, styles.menuContainer]}>
          <View style={styles.menuRow}>
            <View>
              <IconButton
                title="Cards"
                onPress={() => {
                  navigate(ScreenNames.Cards);
                }}
                icon={faNfcSymbol}
              />
            </View>
            <View>
              <IconButton
                title="Scan Cards"
                onPress={() => {
                  navigate(ScreenNames.ScanCards);
                }}
                icon={faNfcSymbol}
              />
            </View>
          </View>
          <View style={styles.menuRow}>
            <View>
              <IconButton
                title="Scan tags"
                onPress={() => {
                  navigate(ScreenNames.ScanTags);
                }}
                icon={faNfcSymbol}
              />
            </View>
            <View>
              <IconButton
                title="Tags"
                onPress={() => {
                  navigate(ScreenNames.Tags);
                }}
                icon={faNfcSymbol}
              />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;
