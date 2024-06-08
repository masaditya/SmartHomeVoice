import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './RecordButton.styles';

type RecordButtonProps = {
  onRecordVoice: () => void;
};

const RecordButton = ({onRecordVoice}: RecordButtonProps) => {
  return (
    <View style={styles.recordButtonContainer}>
      <View style={styles.recordButtonContainer}>
        <View style={styles.recordButtonContainer}>
          <TouchableOpacity onPress={onRecordVoice}>
            <Image
              style={styles.recordButton}
              src="https://cdn.icon-icons.com/icons2/282/PNG/512/Studio-mic-icon_30398.png"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RecordButton;
