import { Alert } from 'react-native';

export const generateUniqueId = () => {
  return Date.now();
};

export const showAlert = (msg: string, title?: string) => {
  Alert.alert(title || '', msg);
};
