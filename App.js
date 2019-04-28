import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import colors from './src/utils/colors';


import HomeScreen from './src/views/home';
import TaskListScreen from './src/views/tasklist';
import NewTaskScreen from './src/views/newTask';
import NewListScreen from './src/views/newlist';
import ConcludedScreen from './src/views/concluded';
import PendingScreen from './src/views/pending';
import TaskScreen from './src/views/tasklist/task';
import EditCardScreen from './src/views/home/editcard';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  TaskList: {
    screen: TaskListScreen
  },
  NewT: {
    screen: NewTaskScreen
  },
  NewL: {
    screen: NewListScreen
  },
  Concluded: {
    screen: ConcludedScreen
  },
  Pending: {
    screen: PendingScreen
  },
  Task: {
    screen: TaskScreen
  },
  EditCard: {
    screen: EditCardScreen
  }

},
  {
    defaultNavigationOptions: {
      headerTintColor: colors.primary
    }
  }
)

export default createAppContainer(AppNavigator)