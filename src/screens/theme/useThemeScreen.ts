import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@root/navigator/AppNavigator';
import { ThemeMode, triggerThemeUpdate } from '@root/redux/slice/themeSlice';
import { RootState } from '@root/redux/store';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

export const useThemeScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.theme.themeMode,
  );

  const onChangeTheme = (value: string) => {
    if (
      value === ThemeMode.light ||
      value === ThemeMode.dark ||
      value === ThemeMode.systemBased
    ) {
      dispatch(triggerThemeUpdate(value as ThemeMode));
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return { t, handleBackPress, selectedTheme, onChangeTheme, ThemeMode };
};
