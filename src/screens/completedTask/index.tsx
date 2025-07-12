import { MenuOptionType } from '@root/component/Menu';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { styles } from './styles';
import { TodoItem } from '../dashboard/TodoItem';
import { useCompletedTask } from './useCompletedTask';
import { EmptyView } from '@root/component/EmptyView';

export const CompletedTask = () => {
  const completed = useCompletedTask();

  const todoItem = ({ item, index }: ListRenderItemInfo<ToDo>) => {
    return <TodoItem data={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={completed.completedList}
        style={styles.listCompleted}
        renderItem={todoItem}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyView />}
      />
    </View>
  );
};
