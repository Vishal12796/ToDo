import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  UserDetails: "userDetails",
  ToDoList: 'todoList',
  CompletedList: 'completedList',
};

export async function setLocalDataByKey(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getLocalDataByKey(key: string) {
  const data = await AsyncStorage.getItem(key);
  return data && JSON.parse(data);
}

export async function clearLocalData() {
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
}
