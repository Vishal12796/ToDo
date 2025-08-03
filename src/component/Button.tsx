import { Colors } from '@root/res/color';
import React from 'react';
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = (props: Props) => {
  const isDisabled = props.disabled || props.loading;

  return (
    <PaperButton
      style={[styles.button, isDisabled && styles.disabled, props?.style]}
      contentStyle={{
        height: moderateVerticalScale(42),
      }}
      onPress={props.onPress}
      disabled={isDisabled}
      mode="contained"
      loading={props.loading}
      textColor={Colors.white}
      labelStyle={styles.buttonText}
    >
      {props.title}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    borderRadius: moderateScale(10),
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: moderateScale(4)
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});
