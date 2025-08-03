import { Colors } from '@root/res/color';
import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

interface TextInputProp extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label: string;
  placeholderColor?: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export const InputText = ({
  value,
  onChangeText,
  placeholder,
  label,
  placeholderColor,
  style,
  secureTextEntry = false,
  keyboardType,
  ...props
}: TextInputProp) => {
  return (
    <TextInput
      value={value}
      autoCapitalize='none'
      allowFontScaling={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      label={label}
      mode={'outlined'}
      outlineColor={Colors.borderColor}
      activeOutlineColor={Colors.primary}
      outlineStyle={styles.outlineStyle}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: moderateVerticalScale(10),
    backgroundColor: Colors.white,
    fontSize: 16,
  },
  outlineStyle:{
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(2),
  }
});
