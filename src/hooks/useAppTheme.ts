import { ThemeMode } from '@root/redux/slice/themeSlice';
import { RootState } from '@root/redux/store';
import { DarkTheme, LightTheme } from '@root/res/color';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

export const useAppTheme = () => {
  const themeMode = useSelector((state: RootState) => state.theme.themeMode);
  const systemScheme = useColorScheme(); // 'light' | 'dark'

  const isDark =
    themeMode === ThemeMode.dark ||
    (themeMode === ThemeMode.systemBased && systemScheme === ThemeMode.dark);

  const theme = isDark ? DarkTheme : LightTheme;

  const barStyle: 'light-content' | 'dark-content' = isDark
    ? 'light-content'
    : 'dark-content';

  return { theme, isDark, barStyle };
};
