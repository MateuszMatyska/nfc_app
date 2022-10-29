import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../consts/colors';
import {CardType} from '../../types/CardType';
import {styles} from './Card.styls';

type CardProps = {
  card: CardType;
  fullData?: boolean;
};

export const Card: React.FC<CardProps> = ({card, fullData}: CardProps) => {
  const {primary, secondary} = colors;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[secondary, primary]}
        style={styles.container}
        locations={[0, 0.96]}>
        <View style={styles.cardNumberContainer}>
          <View>
            <Text style={styles.cardNumber}>{card.cardNumber}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.infoTextExp}>{card.expiryDate}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>{fullData && card.cardType}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>
              {`${card.firstName !== undefined ? card.firstName : ''} ${
                card.surname !== undefined ? card.surname : ''
              }`}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;
