import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {ScreenNames} from '../../navigation/consts/ScreensNames';
import {navigate} from '../../navigation/services/NavigationService';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>NFC App</Text>
        <View>
          <Button
            title="Cards"
            onPress={() => {
              navigate(ScreenNames.Cards);
            }}
          />
          <Button
            title="Scan Cards"
            onPress={() => {
              navigate(ScreenNames.ScanCards);
            }}
          />
        </View>
        <View>
          <Button
            title="Scan tags"
            onPress={() => {
              navigate(ScreenNames.ScanTags);
            }}
          />
          <Button
            title="Tags"
            onPress={() => {
              navigate(ScreenNames.Tags);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
