import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
// import {useDispatch} from 'react-redux';
import NfcCardReader from 'react-native-nfc-card-reader';
import {CardType} from '../../types/CardType';

const ScanCardScreen: React.FC = () => {
  // const dispatch = useDispatch();
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

      console.log(JSON.stringify(cardDetails));
      setCard(cardData);
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>React Native App Home</Text>
        <Button
          onPress={() => {
            scanCard();
          }}
          title="Scan"
        />
        <View>
          {card ? <Text>{`${card.cardNumber}`}</Text> : <Text>Scan Card</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanCardScreen;
