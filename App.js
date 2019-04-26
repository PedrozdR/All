import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/views/home';
import TaskListScreen from './src/views/tasklist';
import NewTaskScreen from './src/views/newTask';
import NewListScreen from './src/views/newlist';
import ConcludedScreen from './src/views/concluded';
import CreatedScreen from './src/views/created';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Task: {
    screen: TaskListScreen
  },
  NewT: {
    screen: NewTaskScreen
  },
  NewL:{
    screen: NewListScreen
  },
  Concluded:{
    screen: ConcludedScreen
  },
  Created:{
    screen: CreatedScreen
  }
},
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: '#6A5ACD'
    }
  }
)

export default createAppContainer(AppNavigator)