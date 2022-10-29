import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TagEvent} from 'react-native-nfc-manager';
import {useDispatch} from 'react-redux';
import {readTag} from '../../services/NfcTagsServices';
import {addTag} from '../../store/Slices/TagSlice';
import Container from '../../components/container/Container';
import BasicButton from '../../components/buttons/basicButton/BasicButton';
import Tag from '../../components/tag/Tag';
import {styles} from './TagsScanScreen.style';

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

  const clearTag = () => {
    setCurrentTag(undefined);
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={[styles.container, styles.titleContainer]}>
          <Text style={styles.title}>Scan Tag</Text>
        </View>
        <View style={[styles.container, styles.tagContainer]}>
          {currentTag && (
            <>
              <View style={styles.tagInfoContainer}>
                <Tag tag={currentTag} />
              </View>
              <View style={styles.tagBtnRow}>
                <View>
                  <BasicButton
                    onPress={() => {
                      saveTag();
                    }}
                    title="Save"
                  />
                </View>
                <View>
                  <BasicButton
                    onPress={() => {
                      clearTag();
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
              scanTag();
            }}
            title="Scan"
          />
        </View>
      </View>
    </Container>
  );
};

export default TagsScanScreen;
