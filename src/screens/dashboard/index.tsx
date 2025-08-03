import { Button } from '@root/component/Button';
import { CategoryItem } from '@root/component/CategoryItem';
import { EmptyView } from '@root/component/EmptyView';
import Header from '@root/component/Header';
import { MenuList, MenuOptionType, MenuView } from '@root/component/Menu';
import { Screen } from '@root/component/Screen';
import { Categories } from '@root/types/categories';
import { ToDo } from '@root/types/todo';
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { styles } from './styles';
import { TodoItem } from './TodoItem';
import { useDashboard } from './useDashboard';

export const Dashboard = () => {
  const dashboard = useDashboard();

  const menuOptions: MenuList[] = [
    {
      value: MenuOptionType.HighToLow,
      label: dashboard.t('High -> Low'),
    },
    {
      value: MenuOptionType.LowToHigh,
      label: dashboard.t('Low -> High'),
    },
  ];

  const SortOptions = () => {
    return (
      <MenuView
        menuOptions={menuOptions}
        title={dashboard.t('Sort')}
        triggerStyle={styles.txtTriger}
        onSelect={(value: MenuOptionType) => dashboard?.handleSortOption(value)}
      />
    );
  };

  const categoryItem = ({ item, index }: ListRenderItemInfo<Categories>) => {
    const isSelected = dashboard.selectedCategory == item.type;
    return (
      <CategoryItem
        title={item.name}
        isSelected={isSelected}
        onPress={() => dashboard.selectCategory(item.type)}
      />
    );
  };

  const todoItem = ({ item, index }: ListRenderItemInfo<ToDo>) => {
    return (
      <TodoItem
        data={item}
        menuPress={(id: number, menuOption: MenuOptionType) =>
          dashboard.handleMenuPress(id, menuOption)
        }
        isShowOptions
      />
    );
  };

  return (
    <Screen>
      <Header title={dashboard.t('Dashboard')}/>
      <View style={styles.categoryContainer}>
        <FlatList
          data={dashboard.categories}
          contentContainerStyle={styles.listContentStyle}
          style={styles.listCategories}
          renderItem={categoryItem}
          keyExtractor={item => item.type}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={[styles.btnContainer, styles.container]}>
        <Button
          title={dashboard.t('Add To Do')}
          onPress={dashboard.navigateToAddToDo}
          style={styles.btnAddToDo}
        />
        <Button
          title={dashboard.t('Completed Task')}
          onPress={dashboard.navigateToCompletedTask}
          style={styles.btnAddToDo}
        />
        <SortOptions />
      </View>

      <FlatList
        data={dashboard.filteredList}
        style={styles.listToDo}
        renderItem={todoItem}
        extraData={dashboard.refreshList}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyView />}
      />

      <Button
        title={dashboard.t('Logout')}
        onPress={dashboard.handleLogout}
        style={styles.btnLogout}
      />
    </Screen>
  );
};
