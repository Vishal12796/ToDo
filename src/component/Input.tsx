import { Colors } from '@root/res/color';
import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

interface TextInputProp extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderColor?: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export const InputText = ({
  value,
  onChangeText,
  placeholder,
  placeholderColor,
  style,
  secureTextEntry = false,
  keyboardType,
  ...props
}: TextInputProp) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: moderateScale(2),
    borderColor: Colors.borderColor,
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
    marginBottom: moderateVerticalScale(10),
    backgroundColor: Colors.white,
    fontSize: 16,
  },
});
