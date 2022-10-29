import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {gettags, removeAll, removeTag} from '../../store/Slices/TagSlice';
import Container from '../../components/container/Container';
import BasicButton from '../../components/buttons/basicButton/BasicButton';
import Tag from '../../components/tag/Tag';
import {faRemove} from '@fortawesome/free-solid-svg-icons';
import SmallIconButton from '../../components/buttons/smallIconButton/SmallIconButton';
import {styles} from './TagsScreen.style';

const TagsScreen: React.FC = () => {
  const tags = useSelector(gettags);
  const dispatch = useDispatch();

  const renderTags = ({item}) => {
    return (
      <View style={styles.tagContainer}>
        <View style={styles.tagContainerTagRow}>
          <Tag tag={item} />
        </View>
        <View style={styles.tagContainerBtnRow}>
          <SmallIconButton
            onPress={() => {
              dispatch(removeTag(item));
            }}
            icon={faRemove}
          />
        </View>
      </View>
    );
  };

  const removeAllTags = () => {
    dispatch(removeAll());
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tags</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.flatlistComp}
            data={tags}
            renderItem={renderTags}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View style={styles.btnContainer}>
          <BasicButton
            title="Remove All"
            onPress={() => {
              removeAllTags();
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default TagsScreen;
