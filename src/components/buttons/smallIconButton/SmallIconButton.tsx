import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../../../consts/colors';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {styles} from './SmallIconButton.style';

type SmallIconButtonProps = {
  onPress: () => void;
  icon: IconDefinition;
};

const SmallIconButton: React.FC<SmallIconButtonProps> = ({
  onPress,
  icon,
}: SmallIconButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <LinearGradient
      colors={[colors.secondary, colors.primary, colors.third]}
      style={styles.btn}>
      <FontAwesomeIcon size={20} color={colors.white} icon={icon} />
    </LinearGradient>
  </TouchableOpacity>
);

export default SmallIconButton;
