import { useNavigation } from '@react-navigation/native';
import { useStorage } from '@root/hooks/useStorage';
import { ToDo } from '@root/types/todo';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useCompletedTask = () => {
  const { getCompletedTaskList } = useStorage();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [completedList, setCompletedList] = useState<ToDo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getData = async () => {
    setCompletedList(await getCompletedTaskList());
  };

  return { completedList, t , handleBackPress};
};
