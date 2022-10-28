import React from 'react';
import {SafeAreaView, Text, View, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {gettags, removeAll, removeTag} from '../../store/Slices/TagSlice';

const TagsScreen: React.FC = () => {
  const tags = useSelector(gettags);
  const dispatch = useDispatch();

  const renderTags = ({item}) => {
    return (
      <View>
        <View>
          <Text>{item.id}</Text>
          <Text>{item?.techTypes}</Text>
          <Text>{item?.type}</Text>
        </View>
        <View>
          <Button
            title="Remove"
            onPress={() => {
              dispatch(removeTag(item));
            }}
          />
        </View>
      </View>
    );
  };

  const removeAllTags = () => {
    dispatch(removeAll());
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Tags</Text>
        <View>
          <FlatList
            data={tags}
            renderItem={renderTags}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View>
          <Button
            title="Remove All"
            onPress={() => {
              removeAllTags();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TagsScreen;
