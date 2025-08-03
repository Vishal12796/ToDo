import { MenuOptionType } from '@root/component/Menu';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { styles } from './styles';
import { TodoItem } from '../dashboard/TodoItem';
import { useCompletedTask } from './useCompletedTask';
import { EmptyView } from '@root/component/EmptyView';
import { Screen } from '@root/component/Screen';
import Header from '@root/component/Header';
import IconBtn from '@root/component/IconBtn';

export const CompletedTask = () => {
  const completed = useCompletedTask();

  const todoItem = ({ item, index }: ListRenderItemInfo<ToDo>) => {
    return <TodoItem data={item} />;
  };

  return (
    <Screen>
      <Header
        title={completed.t('Completed Task')}
        showLeftAction
        LeftActionComponent={() => {
          return <IconBtn onPress={() => completed.handleBackPress()} />;
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
