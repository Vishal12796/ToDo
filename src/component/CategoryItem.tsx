import { ThemeColors } from '@root/res/color';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  onPress: () => void;
  title: string;
  isSelected: boolean;
};

export const CategoryItem = (props: Props) => {
  const { colors } = useTheme<ThemeColors>();

  return (
    <Chip
      mode={props?.isSelected ? 'outlined' : 'flat'}
      style={[
        styles.optionItem,
        {
          backgroundColor: props?.isSelected ? colors.primary : colors.white,
        },
      ]}
      selected={props?.isSelected}
      selectedColor={colors.white}
      textStyle={[
        styles.opText,
        {
          color: props?.isSelected ? colors.primaryText : colors.black,
        },
      ]}
      onPress={() => props?.onPress()}
    >
      {props?.title}
    </Chip>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    borderRadius: moderateScale(20),
    marginVertical: moderateScale(6),
    marginEnd: moderateScale(6),
  },
  selectedOption: {},
  opText: {
    fontWeight: '500',
  },
  selectedText: {},
});
