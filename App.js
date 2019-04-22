import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/views/home';


const AppNavigator = createSwitchNavigator({
  Home:{
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)