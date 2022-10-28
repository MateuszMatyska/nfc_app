import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {TagEvent} from 'react-native-nfc-manager';
import {useDispatch} from 'react-redux';
import {readTag} from '../../services/NfcTagsServices';
import {addTag} from '../../store/Slices/TagSlice';

const TagsScanScreen: React.FC = () => {
  const [currentTag, setCurrentTag] = useState<TagEvent>();
  const dispatch = useDispatch();

  const scanTag = () => {
    if (currentTag) {
      setCurrentTag(undefined);
    }
    readTag().then(tag => {
      if (tag) {
        setCurrentTag(tag);
      }
    });
  };

  const saveTag = () => {
    if (currentTag) {
      dispatch(addTag(currentTag));
      setCurrentTag(undefined);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="Scan" onPress={scanTag} />
      </View>
      <View>
        {currentTag ? (
          <View>
            <Text>{currentTag.id}</Text>
            <Text>{currentTag?.techTypes}</Text>
            <Text>{currentTag?.type}</Text>
          </View>
        ) : (
          <View>
            <Text>Scan tags</Text>
          </View>
        )}
      </View>
      <View>{currentTag && <Button title="Save Tag" onPress={saveTag} />}</View>
    </SafeAreaView>
  );
};

export default TagsScanScreen;
