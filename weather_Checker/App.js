/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import About from './components/About'
import Search from './components/Search'
import { TabNavigator } from 'react-navigation'


const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: '#fff'
      }
    }
  }

)

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
