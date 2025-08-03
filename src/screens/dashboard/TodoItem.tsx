import { MenuList, MenuOptionType, MenuView } from '@root/component/Menu';
import { Colors } from '@root/res/color';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { Chip, Surface } from 'react-native-paper';
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
    <Surface style={styles.rootView}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>{`${t('Title')}:${
          props?.data?.title || ''
        }`}</Text>
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
      <Text style={styles.txtDescription}>{`${t('Category')}:${
        props?.data?.category || ''
      }`}</Text>
      <Text style={styles.txtDescription}>{`${t('Description')}:${
        props?.data?.description || ''
      }`}</Text>
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
    backgroundColor: Colors.white
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  txtDescription: {
    fontSize: 14,
    color: Colors.black,
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
  btnStyle:{
    height: moderateVerticalScale(30),
    justifyContent: 'center',
    minWidth: moderateScale(30)
  }
});
