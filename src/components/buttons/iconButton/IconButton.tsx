import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../../../consts/colors';
import {styles} from './IconButton.style';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type IconButtonProps = {
  onPress: () => void;
  title: string;
  icon: IconDefinition;
};

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  title,
  icon,
}: IconButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <LinearGradient
      colors={[colors.secondary, colors.primary, colors.third]}
      style={styles.btn}>
      <FontAwesomeIcon size={36} color={colors.white} icon={icon} />
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default IconButton;
