import React, {useState} from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import NfcCardReader from 'react-native-nfc-card-reader';
import {getValue} from '../../store/Slices/CounterSlice';
import {increment, decrement} from '../../store/Slices/CounterSlice';
import {CardType} from '../../types/CardType';

const LoginScreen: React.FC = () => {
  const value = useSelector(getValue);
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

      console.log(JSON.stringify(cardDetails));
      setCard(cardData);
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>React Native App Login</Text>
        <Text>Value {value}</Text>
        <Button
          onPress={() => {
            dispatch(increment());
          }}
          title="Add"
        />
        <Button
          onPress={() => {
            dispatch(decrement());
          }}
          title="Remove"
        />
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

export default LoginScreen;
