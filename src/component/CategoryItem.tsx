import { Colors } from '@root/res/color';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  onPress: () => void;
  title: string;
  isSelected: boolean;
};

export const CategoryItem = (props: Props) => {
  return (
    <Chip
      mode={props?.isSelected ? 'outlined' : 'flat'}
      style={[styles.optionItem, !props?.isSelected && styles.selectedOption]}
      selected={props?.isSelected}
      textStyle={[styles.opText, !props?.isSelected && styles.selectedText]}
      onPress={() => props?.onPress()}
    >
      {props?.title}
    </Chip>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
    marginVertical: moderateScale(6),
    marginEnd: moderateScale(6),
  },
  selectedOption: {
    backgroundColor: Colors.primary,
  },
  opText: {
    color: Colors.black,
    fontWeight: '500',
  },
  selectedText: {
    color: Colors.white,
  },
});
