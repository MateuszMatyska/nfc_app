import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import NfcCardReader from 'react-native-nfc-card-reader';
import {addCard} from '../../store/Slices/CardSlice';
import {CardType} from '../../types/CardType';

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

  return (
    <SafeAreaView>
      <View>
        <Text>Scan card</Text>
        <Button
          onPress={() => {
            scanCard();
          }}
          title="Scan"
        />
        {card && (
          <View>
            <Text>{`${card.cardNumber}`}</Text>
            <Button
              onPress={() => {
                saveCard();
              }}
              title="Save"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScanCardScreen;
