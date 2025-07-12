import { Colors } from '@root/res/color';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = (props: Props) => {
  const isDisabled = props.disabled || props.loading;

  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabled, props?.style]}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={isDisabled}
    >
      {props.loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={[styles.buttonText, props?.textStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: moderateVerticalScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});
