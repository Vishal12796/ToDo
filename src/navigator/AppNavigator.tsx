import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { AddToDo } from '@root/screens/addToDo';
import { CompletedTask } from '@root/screens/completedTask';
import { Dashboard } from '@root/screens/dashboard';
import { Login } from '@root/screens/login';
import { ToDo } from '@root/types/todo';
import { NativeStackNavigationHelpers } from 'node_modules/@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { ScreenNames } from './ScreenNames';
import { useAppNavigator } from './useAppNavigator';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
  AddTodo: {
    addData: (data: ToDo) => void;
  };
  CompletedTask: undefined;
};

export type CommonScreenPropsType = {
  navigation: NativeStackNavigationHelpers;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const appNavigator = useAppNavigator();

  if (!appNavigator.initialRouteName) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'}/>
      <Stack.Navigator initialRouteName={appNavigator.initialRouteName}>
        <Stack.Screen
          name={ScreenNames.Login}
          options={{ title: appNavigator.t('Login'), headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name={ScreenNames.Dashboard}
          options={{ title: appNavigator.t('Dashboard'), headerShown: false  }}
          component={Dashboard}
        />
        <Stack.Screen
          name={ScreenNames.AddTodo}
          options={{ title: appNavigator.t('Add To Do'), headerShown: false  }}
          component={AddToDo}
        />
        <Stack.Screen
          name={ScreenNames.CompletedTask}
          options={{ title: appNavigator.t('Completed Task'), headerShown: false  }}
          component={CompletedTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
