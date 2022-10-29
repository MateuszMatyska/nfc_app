import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TagEvent} from 'react-native-nfc-manager';
import {colors} from '../../consts/colors';
import {styles} from './Tag.style';

type TagProps = {
  tag: TagEvent;
};

export const Tag: React.FC<TagProps> = ({tag}: TagProps) => {
  const {primary, secondary} = colors;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[secondary, primary]}
        style={styles.container}
        locations={[0, 0.96]}>
        <View style={styles.tagContainer}>
          <View>
            <Text style={styles.infoText}>{tag.id}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>{tag.type}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>{tag.techTypes}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Tag;
