import { EmptyView } from '@root/component/EmptyView';
import Header from '@root/component/Header';
import IconBtn from '@root/component/IconBtn';
import { Screen } from '@root/component/Screen';
import { ThemeColors } from '@root/res/color';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TodoItem } from '../dashboard/TodoItem';
import { styles } from './styles';
import { useCompletedTask } from './useCompletedTask';

export const CompletedTask = () => {
  const completed = useCompletedTask();
  const { colors } = useTheme<ThemeColors>();

  const todoItem = ({ item, index }: ListRenderItemInfo<ToDo>) => {
    return <TodoItem data={item} />;
  };

  return (
    <Screen>
      <Header
        title={completed.t('Completed Task')}
        showLeftAction
        LeftActionComponent={() => {
          return (
            <IconBtn
              color={colors.iconColor}
              onPress={() => completed.handleBackPress()}
            />
          );
        }}
      />
      <FlatList
        data={completed.completedList}
        style={styles.listCompleted}
        renderItem={todoItem}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyView />}
      />
    </Screen>
  );
};
