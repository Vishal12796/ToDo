import { MenuList, MenuOptionType, MenuView } from '@root/component/Menu';
import { Colors, ThemeColors } from '@root/res/color';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Chip, Surface, useTheme } from 'react-native-paper';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

type TodoItemProps = {
  data: ToDo;
  menuPress?: (id: number, menuOption: MenuOptionType) => void;
  isShowOptions?: boolean;
};

export const TodoItem = (props: TodoItemProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme<ThemeColors>();

  const menuOptions: MenuList[] = [
    {
      value: MenuOptionType.MarkAsComplete,
      label: t('Mark as complete'),
    },
    {
      value: MenuOptionType.Delete,
      label: t('Delete'),
    },
  ];

  const Options = () => {
    return (
      <MenuView
        menuOptions={menuOptions}
        title={':'}
        onSelect={(menuOption: MenuOptionType) =>
          props?.menuPress && props?.menuPress(props?.data?.id, menuOption)
        }
        btnStyle={styles.btnStyle}
      />
    );
  };

  return (
    <Surface
      style={[styles.rootView, { backgroundColor: colors.secondaryContainer }]}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.txtTitle, { color: colors.secondaryText }]}>{`${t(
          'Title',
        )}:${props?.data?.title || ''}`}</Text>
        <View style={styles.optionContainer}>
          <Chip
            style={[
              styles.priorityContainer,
              !props?.isShowOptions && { marginEnd: 0 },
            ]}
            selected={false}
            textStyle={styles.txtPriority}
          >
            {props?.data?.priority}
          </Chip>
          {props?.isShowOptions && <Options />}
        </View>
      </View>
      <Text
        style={[styles.txtDescription, { color: colors.secondaryText }]}
      >{`${t('Category')}:${props?.data?.category || ''}`}</Text>
      <Text
        style={[styles.txtDescription, { color: colors.secondaryText }]}
      >{`${t('Description')}:${props?.data?.description || ''}`}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  rootView: {
    borderRadius: moderateScale(6),
    marginTop: moderateScale(2),
    marginBottom: moderateVerticalScale(12),
    padding: moderateScale(8),
    marginHorizontal: moderateScale(16),
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtDescription: {
    fontSize: 14,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
  },
  priorityContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: moderateScale(10),
    marginEnd: moderateScale(8),
  },
  txtPriority: {
    color: Colors.white,
    fontSize: 12,
  },
  btnStyle: {
    height: moderateVerticalScale(30),
    justifyContent: 'center',
    minWidth: moderateScale(30),
  },
});
