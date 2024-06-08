import {useEffect, useState} from 'react';
import {PermissionsAndroid, ToastAndroid} from 'react-native';
import Voice from '@react-native-voice/voice';
import {firebase} from '@react-native-firebase/database';
import {
  bukaPattern,
  dapurPattern,
  kunciPattern,
  matiPattern,
  nyalaPattern,
  terasPattern,
} from '../../utils';

const reference = firebase
  .app()
  .database(
    'https://fabelio-efaba-default-rtdb.asia-southeast1.firebasedatabase.app/',
  )
  .ref('/activity');

export const RecordStateFn = () => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [textCommand, setTextCommand] = useState('');

  const requestRecordAudioPermission = async () => {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    setHasPermissions(permission === 'granted');
  };

  const processCommand = async (results: string[]) => {
    for (let i = 0; i < results.length; i++) {
      const text = results[i];
      if (dapurPattern.test(text)) {
        if (nyalaPattern.test(text)) {
          reference.child('lampu_dapur').set(true);
          setTextCommand(text);
          break;
          // Add your code for handling "lampu", "dapur" and "nyala"
        }
        if (matiPattern.test(text)) {
          reference.child('lampu_dapur').set(false);
          setTextCommand(text);
          break;
          // Add your code for handling "lampu", "dapur" and "mati"
        }
      } else if (terasPattern.test(text)) {
        if (nyalaPattern.test(text)) {
          reference.child('lampu_teras').set(true);
          setTextCommand(text);
          break;
          // Add your code for handling "lampu", "teras" and "nyala"
        }
        if (matiPattern.test(text)) {
          reference.child('lampu_teras').set(false);
          setTextCommand(text);
          break;
          // Add your code for handling "lampu", "teras" and "mati"
        }
      } else if (kunciPattern.test(text)) {
        if (bukaPattern.test(text)) {
          reference.child('kunci_pintu').set(false);
          setTextCommand(text);
          break;
          // Add your code for handling "kunci", "pintu" and "nyala"
        } else {
          reference.child('kunci_pintu').set(true);
          setTextCommand(text);
          break;
          // Add your code for handling "kunci", "pintu" and "mati"
        }
      } else {
        setTextCommand(text);
        ToastAndroid.show(
          'Perintah tidak ditemukan, coba lagi!',
          ToastAndroid.SHORT,
        );
      }
    }
  };

  const onRecordVoice = async () => {
    if (!hasPermissions) {
      requestRecordAudioPermission();
      return;
    }
    if (isRecording) {
      await Voice.stop();
      setIsRecording(false);
      return;
    }
    setIsRecording(true);
    await Voice.start('id-ID');
  };

  useEffect(() => {
    requestRecordAudioPermission();
    Voice.onSpeechStart = () => {
      setTextCommand('');
      console.log('onSpeechStart');
    };
    Voice.onSpeechEnd = isFinal => {
      console.log('onSpeechEnd', isFinal);
      setIsRecording(false);
    };
    Voice.onSpeechResults = results => {
      console.log('onSpeechResults', results);
      processCommand(results.value || []);
      setIsRecording(false);
    };
    Voice.onSpeechRecognized = results => {
      console.log('onSpeechRecognized', results);
      setIsRecording(false);
    };
    Voice.onSpeechError = error => {
      console.log('onSpeechError', error);
      setIsRecording(false);
      ToastAndroid.show(error.error?.message || 'Error', ToastAndroid.SHORT);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    hasPermissions,
    isRecording,
    textCommand,
    onRecordVoice,
  };
};
