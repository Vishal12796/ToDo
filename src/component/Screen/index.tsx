import { Colors, ThemeColors } from '@root/res/color';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenRootProps = {
  children: React.ReactNode;
};

export const Screen = ({ children }: ScreenRootProps) => {
  const { colors } = useTheme<ThemeColors>();

  return (
    <SafeAreaView
      style={[
        styles.root,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
