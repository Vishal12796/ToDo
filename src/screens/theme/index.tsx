import Header from '@root/component/Header';
import IconBtn from '@root/component/IconBtn';
import { Screen } from '@root/component/Screen';
import { ThemeMode } from '@root/redux/slice/themeSlice';
import { ThemeColors } from '@root/res/color';
import React from 'react';
import { Text, View } from 'react-native';
import { RadioButton, useTheme } from 'react-native-paper';
import { styles } from './styles';
import { useThemeScreen } from './useThemeScreen';

export const Theme = () => {
  const themeScreen = useThemeScreen();
  const { colors } = useTheme<ThemeColors>();

  return (
    <Screen>
      <Header
        title={themeScreen.t('Theme')}
        showLeftAction
        LeftActionComponent={() => (
          <IconBtn
            color={colors.iconColor}
            onPress={() => themeScreen.handleBackPress()}
          />
        )}
      />
      <View style={styles.container}>
        <Text style={[styles.label, { color: colors.secondaryText }]}>
          {themeScreen.t('Choose Theme:')}
        </Text>

        <RadioButton.Group
          onValueChange={themeScreen.onChangeTheme}
          value={themeScreen.selectedTheme}
        >
          <View style={styles.radioRow}>
            <RadioButton
              value={ThemeMode.light}
              color={colors.secondary}
              uncheckedColor={colors.lightGrey}
            />
            <Text style={[styles.optionText, { color: colors.secondaryText }]}>
              {themeScreen.t('Light')}
            </Text>
          </View>

          <View style={styles.radioRow}>
            <RadioButton
              value={ThemeMode.dark}
              color={colors.secondary}
              uncheckedColor={colors.lightGrey}
            />
            <Text style={[styles.optionText, { color: colors.secondaryText }]}>
              {themeScreen.t('Dark')}
            </Text>
          </View>

          <View style={styles.radioRow}>
            <RadioButton
              value={ThemeMode.systemBased}
              color={colors.secondary}
              uncheckedColor={colors.lightGrey}
            />
            <Text style={[styles.optionText, { color: colors.secondaryText }]}>
              {themeScreen.t('System based')}
            </Text>
          </View>
        </RadioButton.Group>
      </View>
    </Screen>
  );
};
