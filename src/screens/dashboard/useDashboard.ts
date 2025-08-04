import { useNavigation } from '@react-navigation/native';
import { MenuOptionType } from '@root/component/Menu';
import { useStorage } from '@root/hooks/useStorage';
import { NavigationProps } from '@root/navigator/AppNavigator';
import { ScreenNames } from '@root/navigator/ScreenNames';
import { Categories, CategoryType } from '@root/types/categories';
import { PriorityOrder, ToDo } from '@root/types/todo';
import { setLocalDataByKey, StorageKeys } from '@root/utils/localStorage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useDashboard = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProps>();
  const {
    getToDoList,
    getCompletedTaskList,
    storeToDoList,
    storeCompletedTaskList,
  } = useStorage();

  const categories: Categories[] = [
    {
      id: 1,
      type: CategoryType.All,
      name: t('All'),
    },
    {
      id: 2,
      type: CategoryType.Work,
      name: t('Work'),
    },
    {
      id: 3,
      type: CategoryType.Personal,
      name: t('Personal'),
    },
    {
      id: 4,
      type: CategoryType.Urgent,
      name: t('Urgent'),
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    CategoryType.All,
  );
  const [todoList, setToDoList] = useState<ToDo[]>([]);
  const [filteredList, setFilteredList] = useState<ToDo[]>([]);
  const [refreshList, setRefreshList] = useState<boolean>(false);
  const [completedList, setCompletedList] = useState<ToDo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    groupingList();
  }, [todoList, selectedCategory]);

  const getData = async () => {
    setToDoList(await getToDoList());
    setCompletedList(await getCompletedTaskList());
  };

  const groupingList = () => {
    if (selectedCategory === CategoryType.All) {
      setFilteredList(todoList);
    } else {
      const filtered = todoList.filter(
        todo => todo.category === selectedCategory,
      );
      setFilteredList(filtered);
    }
  };

  const selectCategory = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const addToDoData = (data: ToDo) => {
    todoList.push(data);
    setToDoList([...todoList]);
    storeToDoList(todoList);
    setRefreshList(!refreshList);
  };

  const navigateToAddToDo = () => {
    navigation.navigate(ScreenNames.AddTodo, {
      addData: addToDoData,
    });
  };
  const navigateToCompletedTask = () => {
    navigation.navigate(ScreenNames.CompletedTask);
  };

  const handleLogout = () => {
    setLocalDataByKey(StorageKeys.UserDetails, null);
    storeCompletedTaskList([]);
    storeToDoList([]);
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.Login }],
    });
  };

  const handleTheme = () => {
    navigation.navigate(ScreenNames.Theme);
  };

  const findTodoItemIndex = (id: number) => {
    const findIndex = todoList.findIndex(item => item.id === id);
    return findIndex;
  };

  const handleMarkComplete = (id: number) => {
    let todoItem;
    const findIndex = findTodoItemIndex(id);
    if (findIndex != -1) {
      todoItem = todoList[findIndex];
      completedList.push(todoList[findIndex]);
      setCompletedList(completedList);
      storeCompletedTaskList(completedList);

      todoList.splice(findIndex, 1);
      setToDoList([...todoList]);
      storeToDoList(todoList);
      setRefreshList(!refreshList);
    }
  };

  const handleDeleteTask = (id: number) => {
    const findIndex = findTodoItemIndex(id);
    if (findIndex != -1) {
      todoList.splice(findIndex, 1);
      setToDoList([...todoList]);
      setRefreshList(!refreshList);
    }
  };

  const handleMenuPress = (id: number, value: MenuOptionType) => {
    switch (value) {
      case MenuOptionType.MarkAsComplete:
        handleMarkComplete(id);
        return;
      case MenuOptionType.Delete:
        handleDeleteTask(id);
        return;
      default:
        return;
    }
  };

  const handleSortOption = (value: MenuOptionType) => {
    switch (value) {
      case MenuOptionType.HighToLow:
        filteredList.sort(
          (a, b) => PriorityOrder[b.priority] - PriorityOrder[a.priority],
        );
        setFilteredList([...filteredList]);
        setRefreshList(!refreshList);
        return;
      case MenuOptionType.LowToHigh:
        filteredList.sort(
          (a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority],
        );
        setFilteredList([...filteredList]);
        setRefreshList(!refreshList);
        return;
      default:
        return;
    }
  };

  return {
    t,
    categories,
    selectedCategory,
    selectCategory,
    filteredList,
    navigateToAddToDo,
    navigateToCompletedTask,
    todoList,
    refreshList,
    completedList,
    handleMenuPress,
    handleSortOption,
    handleLogout,
    handleTheme
  };
};
