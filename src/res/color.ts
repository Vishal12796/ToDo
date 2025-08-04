import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

export const Colors = {
  primary: '#4287f5',
  secondary: '#28a745',
  white: '#fff',
  black: '#000',
  lightGrey: '#888',
  borderColor: '#ddd',
  background: '#f2f2f2',
};


type CustomColors  = MD3Colors & {
  white: string;
  black: string;
  lightGrey: string;
  borderColor: string;
  primaryText: string;
  secondaryText: string;
  activeBorder: string;
  iconColor: string;
};

export interface ThemeColors extends Omit<MD3Theme, 'colors'> {
  colors: CustomColors
}

export const LightTheme: ThemeColors = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4287f5',
    secondary: '#28a745',
    white: '#fff',
    black: '#000',
    lightGrey: '#888',
    borderColor: '#ddd',
    background: '#f2f2f2',

    iconColor: '#000',
    activeBorder: '#4287f5',
    primaryText: '#fff',
    secondaryText: "#000",
    secondaryContainer:  '#fff',
  },
};

export const DarkTheme : ThemeColors = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#4287f5',
    secondary: '#28a745',
    white: '#fff',
    black: '#000',
    lightGrey: '#888',
    borderColor: '#ddd',
    background: '#171717',// Updated

    iconColor: '#fff',
    activeBorder: '#545454',
    primaryText: '#000',
    secondaryText: "#fff",
    secondaryContainer:  '#545454',
  },
};
