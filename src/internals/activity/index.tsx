import {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/database';

export type ActivityType = {
  lampu_dapur: boolean;
  lampu_teras: boolean;
  kunci_pintu: boolean;
};

const reference = firebase
  .app()
  .database(
    'https://fabelio-efaba-default-rtdb.asia-southeast1.firebasedatabase.app/',
  )
  .ref('/activity');

export const ActivityStateFn = () => {
  const [data, setData] = useState<ActivityType>();

  useEffect(() => {
    reference.once('value').then(snapshot => {
      setData(snapshot.val());
    });
  }, []);

  useEffect(() => {
    const onChanged = reference.on('value', snapshot => {
      setData(snapshot.val());
    });
    // Stop listening for updates when no longer required
    return () => reference.off('value', onChanged);
  }, []);

  const handleSwitchChange = (key: string, value: boolean) => {
    reference.child(key).set(value);
  };
  return {data, handleSwitchChange};
};
