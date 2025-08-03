import { Colors } from '@root/res/color';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import { Button } from './Button';

export enum MenuOptionType {
  MarkAsComplete = 'Mark as complete',
  Delete = 'Delete',
  HighToLow = 'High to Low',
  LowToHigh = 'Low to High',
}

export type MenuList = {
  value: MenuOptionType;
  label: string;
};

type Props = {
  onSelect: (value: MenuOptionType) => void;
  menuOptions: MenuList[];
  title: string;
  triggerStyle?: TextStyle;
  btnStyle?: ViewStyle;
};

export const MenuView = (props: Props) => {
  const handleOptionSelect = (value: MenuOptionType) => {
    props?.onSelect(value);
  };

  return (
    <View style={styles.container}>
      <Menu onSelect={handleOptionSelect}>
        <MenuTrigger>
          <Button title={props?.title} style={props?.btnStyle} />
        </MenuTrigger>

        <MenuOptions>
          {props?.menuOptions.map(option => (
            <MenuOption key={option.value} value={option.value}>
              <Text style={styles.txtMenu}>{option.label}</Text>
            </MenuOption>
          ))}
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  triggerText: {
    backgroundColor: Colors.primary,
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateVerticalScale(6),
    borderRadius: moderateScale(10),
    textAlign: 'center',
    color: Colors.white,
    fontSize: 18,
  },
  txtMenu: {
    color: Colors.black,
  },
});
