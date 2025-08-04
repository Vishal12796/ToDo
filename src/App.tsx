import React, { useMemo } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigator } from './navigator/AppNavigator';
import { persistor, RootState, store } from './redux/store';
import { DarkTheme, LightTheme } from './res/color';
import { ThemeMode } from './redux/slice/themeSlice';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const ThemeApp: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.themeMode);

  const themeMode = useMemo(() => {
    if (theme === 'light') {
      return LightTheme;
    } else {
      return DarkTheme;
    }
  }, [theme]);

  return (
    <MenuProvider>
      <PaperProvider theme={themeMode}>
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
