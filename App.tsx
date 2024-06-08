import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RecordScreen from './src/screens/Record';
import ActivityScreen from './src/screens/Activity';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'Record') {
              iconName = focused
                ? 'mic-outline'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
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
