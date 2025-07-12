import { ToDo } from '@root/types/todo';
import {
  getLocalDataByKey,
  setLocalDataByKey,
  StorageKeys,
} from '@root/utils/localStorage';

export const useStorage = () => {
  const getToDoList = async () => {
    const list = await getLocalDataByKey(StorageKeys.ToDoList);
    return list || [];
  };

  const getCompletedTaskList = async () => {
    const list = await getLocalDataByKey(StorageKeys.CompletedList);
    return list || [];
  };

  const storeToDoList = (todoList: ToDo[]) => {
    setLocalDataByKey(StorageKeys.ToDoList, todoList);
  };
  const storeCompletedTaskList = (completedTaskList: ToDo[]) => {
    setLocalDataByKey(StorageKeys.CompletedList, completedTaskList);
  };

  return {
    getToDoList,
    getCompletedTaskList,
    storeToDoList,
    storeCompletedTaskList,
  };
};
