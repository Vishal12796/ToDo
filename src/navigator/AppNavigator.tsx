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
import { Theme } from '@root/screens/theme';

export type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
  AddTodo: {
    addData: (data: ToDo) => void;
  };
  CompletedTask: undefined;
  Theme: undefined
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

  const options = { headerShown: false };

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator initialRouteName={appNavigator.initialRouteName}>
        <Stack.Screen
          name={ScreenNames.Login}
          options={options}
          component={Login}
        />
        <Stack.Screen
          name={ScreenNames.Dashboard}
          options={options}
          component={Dashboard}
        />
        <Stack.Screen
          name={ScreenNames.AddTodo}
          options={options}
          component={AddToDo}
        />
        <Stack.Screen
          name={ScreenNames.CompletedTask}
          options={options}
          component={CompletedTask}
        />
        <Stack.Screen
          name={ScreenNames.Theme}
          options={options}
          component={Theme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
