import * as React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import BookTransaction from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
 Transaction:{screen: BookTransaction},
 Search:{screen: SearchScreen},
})

const AppContainer=createAppContainer(TabNavigator)
