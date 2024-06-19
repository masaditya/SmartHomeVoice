import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecordScreen from './src/screens/Record';
import ActivityScreen from './src/screens/Activity';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            let iconName = '';

            if (route.name === 'Record') {
              iconName = 'mic';
            } else if (route.name === 'Activity') {
              iconName = 'grid';
            }

            // You can return any component that you like here!
            return <FeatherIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1abc9c',
          tabBarInactiveTintColor: '#34495e',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
