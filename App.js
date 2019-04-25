import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/views/home';
import TaskListScreen from './src/views/tasklist';
import NewTaskScreen from './src/views/newTask';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Task: {
    screen: TaskListScreen
  },
  NewT: {
    screen: NewTaskScreen
  }
},
  {
    defaultNavigationOptions: {
      headerTransparent: true
    }
  }
)

export default createAppContainer(AppNavigator)