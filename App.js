/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';

// screens import
import Club from 'gnjoy/src/screens/Club.js';
import ClubInfo from 'gnjoy/src/screens/ClubInfo.js';
import Table from 'gnjoy/src/screens/Table.js';
import Reservation from 'gnjoy/src/screens/Reservation.js';
import Select from 'gnjoy/src/screens/Select.js';
import Drinks from 'gnjoy/src/screens/Drinks.js';
import Foods from 'gnjoy/src/screens/Foods.js';
import Menu from 'gnjoy/src/screens/Menu.js';
import Login from 'gnjoy/src/screens/Login.js';
import Signup from 'gnjoy/src/screens/Signup.js';

// navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//icons import
import Icon from 'react-native-vector-icons/FontAwesome';

// redux import
import {Provider} from 'react-redux';
import store from 'gnjoy/src/store.js';

const Stack = createStackNavigator();
const gnjoyTabs = createMaterialBottomTabNavigator();

class App extends Component {
  createBottomTabs = () => {
    return (
      <gnjoyTabs.Navigator
        initialRouteName="Home"
        barStyle={{
          backgroundColor: 'white',
          activeTintColor: '#d92027',
          inactiveTintColor: '#388E3C',
          padding: 0,
        }}>
        <gnjoyTabs.Screen
          name="Drinks"
          component={Drinks}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#d92027'}]} size={20} name={'beer'} />
            ),
          }}
        />
        <gnjoyTabs.Screen
          name="Foods"
          component={Foods}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#d92027'}]} size={20} name={'cutlery'} />
            ),
          }}
        />
      </gnjoyTabs.Navigator>
    );
  };
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="#d92027" barStyle="light-content" />
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                // headerShown: false,
                headerStyle: {
                  backgroundColor: '#d92027',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#ffcd3c',
                headerTitleStyle: {
                  fontWeight: 'normal',
                },
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                // headerShown: false,
                headerStyle: {
                  backgroundColor: '#d92027',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#ffcd3c',
                headerTitleStyle: {
                  fontWeight: 'normal',
                },
              }}
            />
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
            <Stack.Screen
              name="Table"
              component={Table}
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
            <Stack.Screen
              name="Select"
              component={Select}
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
            <Stack.Screen
              name="Gnjoy"
              children={this.createBottomTabs}
              options={{
                headerStyle: {
                  backgroundColor: '#d92027',
                },
                headerLeft: () => (
                  <Icon
                    style={[{color: '#ffcd3c', margin: 25}]}
                    size={20}
                    name={'navicon'}
                  />
                ),
                headerRight: () => (
                  <Icon
                    style={[{color: '#ffcd3c', margin: 25}]}
                    size={20}
                    name={'shopping-basket'}
                    // onPress={() => {
                    //   console.log('logout pressed');
                    //   fire
                    //     .auth()
                    //     .signOut()
                    //     .then(
                    //       () => this.props.navigation.navigate('Welcome'),
                    //       console.log('User signed out!'),
                    //     );
                    // }}
                  />
                ),
                headerTitleAlign: 'center',
                headerTintColor: '#ffcd3c',
                headerTitleStyle: {
                  fontWeight: 'normal',
                },
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                // headerShown: false,
                headerStyle: {
                  backgroundColor: '#d92027',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#ffcd3c',
                headerTitleStyle: {
                  fontWeight: 'normal',
                },
              }}
            />
            <Stack.Screen
              name="Reservation"
              component={Reservation}
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
      </Provider>
    );
  }
}

export default App;
