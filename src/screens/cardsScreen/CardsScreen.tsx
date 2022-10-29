import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeCard, removeAll, getCards} from '../../store/Slices/CardSlice';
import Container from '../../components/container/Container';
import BasicButton from '../../components/buttons/basicButton/BasicButton';
import Card from '../../components/card/Card';
import {faRemove} from '@fortawesome/free-solid-svg-icons';
import SmallIconButton from '../../components/buttons/smallIconButton/SmallIconButton';
import {styles} from './CardsScreen.style';

const CardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  const renderCard = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardContainerCardRow}>
          <Card card={item} fullData />
        </View>
        <View style={styles.cardContainerBtnRow}>
          <SmallIconButton
            onPress={() => {
              dispatch(removeCard(item));
            }}
            icon={faRemove}
          />
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cards</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.flatlistComp}
            data={cards}
            renderItem={renderCard}
            keyExtractor={item => item.cardNumber}
          />
        </View>
        <View style={styles.btnContainer}>
          <BasicButton
            title="Remove All"
            onPress={() => {
              dispatch(removeAll());
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default CardScreen;
