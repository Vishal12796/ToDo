import React from 'react';
import { AppNavigator } from './navigator/AppNavigator';
import { MenuProvider } from 'react-native-popup-menu';
import i18n from './language/ i18n';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function App() {
  return (
    <MenuProvider>
      <AppNavigator />
    </MenuProvider>
  );
}

export default App;
