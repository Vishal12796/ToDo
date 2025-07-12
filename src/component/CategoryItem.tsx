import React from 'react';
import { Colors } from '@root/res/color';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  onPress: () => void;
  title: string;
  isSelected: boolean;
};

export const CategoryItem = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.optionItem, props?.isSelected && styles.selectedOption]}
      onPress={() => props?.onPress()}
    >
      <Text
        style={[styles.optionText, props?.isSelected && styles.selectedText]}
      >
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(8),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  selectedOption: {
    backgroundColor: Colors.primary,
  },
  optionText: {
    color: Colors.black,
    fontWeight: '500',
  },
  selectedText: {
    color: Colors.white,
  },
});
