import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import NfcCardReader from 'react-native-nfc-card-reader';
import {addCard} from '../../store/Slices/CardSlice';
import {CardType} from '../../types/CardType';
import Container from '../../components/container/Container';
import BasicButton from '../../components/buttons/basicButton/BasicButton';
import Card from '../../components/card/Card';
import {styles} from './ScanCardScreen.style';

const ScanCardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [card, setCard] = useState<CardType>();

  const scanCard = () => {
    NfcCardReader.startNfc(function (cardDetails) {
      const cardData = {
        cardNumber: cardDetails.cardNumber,
        expiryDate: cardDetails.expiryDate,
        cardType: cardDetails.cardType,
        firstName: cardDetails.firstName,
        surname: cardDetails.surname,
      } as CardType;

      setCard(cardData);
    });
  };

  const saveCard = () => {
    if (card) {
      dispatch(addCard(card));
      setCard(undefined);
    }
  };

  const clearCard = () => {
    setCard(undefined);
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={[styles.container, styles.titleContainer]}>
          <Text style={styles.title}>Scan Card</Text>
        </View>
        <View style={[styles.container, styles.cardContainer]}>
          {card && (
            <>
              <View style={styles.cardInfoContainer}>
                <Card card={card} />
              </View>
              <View style={styles.cardBtnRow}>
                <View>
                  <BasicButton
                    onPress={() => {
                      saveCard();
                    }}
                    title="Save"
                  />
                </View>
                <View>
                  <BasicButton
                    onPress={() => {
                      clearCard();
                    }}
                    title="Clear"
                  />
                </View>
              </View>
            </>
          )}
        </View>
        <View style={[styles.container, styles.btnContainer]}>
          <BasicButton
            onPress={() => {
              scanCard();
            }}
            title="Scan"
          />
        </View>
      </View>
    </Container>
  );
};

export default ScanCardScreen;
