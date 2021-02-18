import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Club from 'gnjoy/src/screens/Club.js';
import ClubInfo from 'gnjoy/src/screens/ClubInfo.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#d92027" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Club"
          component={Club}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#2d132c',
            },
            headerTintColor: '#ee4540',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ClubInfo"
          component={ClubInfo}
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: '#d92027',
            },
            headerTintColor: '#ffcd3c',
            headerTitleStyle: {
              fontWeight: 'normal',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
