import React from 'react';
import { LogBox } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useAppTheme } from './hooks/useAppTheme';
import { AppNavigator } from './navigator/AppNavigator';
import { persistor, store } from './redux/store';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const ThemeApp: React.FC = () => {
  const appTheme = useAppTheme();

  return (
    <MenuProvider>
      <PaperProvider theme={appTheme.theme}>
        <AppNavigator />
      </PaperProvider>
    </MenuProvider>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
