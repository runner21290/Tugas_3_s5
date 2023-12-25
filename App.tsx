import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/component/Home';
import Produk from './src/component/Produk';
import Akun from './src/component/Akun';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Produk') {
              iconName = focused ? 'search-outline' : 'search';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'time-sharp' : 'time-outline';
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffffff',
            heigh: 60,
          },
        }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={Produk} />
        <Tab.Screen name='Coba' component={Akun} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;