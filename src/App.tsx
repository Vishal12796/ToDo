import React from 'react';
import { AppNavigator } from './navigator/AppNavigator';
import { MenuProvider } from 'react-native-popup-menu';
import i18n from './language/ i18n';
import { LogBox } from 'react-native';
import { PaperProvider } from 'react-native-paper';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function App() {
  return (
    <PaperProvider>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </PaperProvider>
  );
}

export default App;
