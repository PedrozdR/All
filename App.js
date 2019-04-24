import React from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import HomeScreen from './src/views/home';
import TaskListScreen from './src/views/tasklist';


const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen
  },
  Task:{
    screen: TaskListScreen
  }
})

export default createAppContainer(AppNavigator)