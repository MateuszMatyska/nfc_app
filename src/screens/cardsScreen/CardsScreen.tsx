import React from 'react';
import {SafeAreaView, Text, View, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCard, removeAll, getCards} from '../../store/Slices/CardSlice';

const CardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  const renderCard = ({item}) => {
    return (
      <View>
        <Text>{item.cardNumber}</Text>
        <Text>{item.expiryDate}</Text>
        <Text>{item.cardType}</Text>
        <Button
          title="Remove Card"
          onPress={() => {
            dispatch(removeCard(item));
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Cards</Text>
      </View>
      <View>
        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.cardNumber}
        />
      </View>
      <View>
        <Button
          title="Remove All"
          onPress={() => {
            dispatch(removeAll());
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CardScreen;
