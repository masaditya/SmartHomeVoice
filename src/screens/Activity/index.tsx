import React from 'react';
import {SafeAreaView, StatusBar, Switch, Text, View} from 'react-native';
import styles from './Activity.styles';
import {ActivityStateFn} from '../../internals/activity';
import {parseSnakeCase} from '../../utils';

function ActivityScreen(): React.JSX.Element {
  const {data, handleSwitchChange} = ActivityStateFn();

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <View style={styles.activityItem} key={key}>
              <Text style={styles.activityItemText}>{parseSnakeCase(key)}</Text>
              <Switch
                value={!!value}
                onValueChange={val => handleSwitchChange(key, val)}
              />
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
}

export default ActivityScreen;
