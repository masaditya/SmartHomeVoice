import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './Record.styles';
import RecordButton from '../../components/RecordButton';
import {RecordStateFn} from '../../internals/record';

function RecordScreen(): React.JSX.Element {
  const {isRecording, textCommand, onRecordVoice} = RecordStateFn();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        {isRecording && (
          <Text style={styles.recordButtonText}>Recording...</Text>
        )}
        <RecordButton onRecordVoice={onRecordVoice} />
        {textCommand && <Text style={styles.textResult}>{textCommand}</Text>}
      </View>
    </SafeAreaView>
  );
}

export default RecordScreen;
