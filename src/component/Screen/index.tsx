import { Colors } from '@root/res/color';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenRootProps = {
  children: React.ReactNode;
};

export const Screen = ({ children }: ScreenRootProps) => {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background
  },
});
