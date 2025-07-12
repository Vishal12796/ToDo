import { useStorage } from '@root/hooks/useStorage';
import { ToDo } from '@root/types/todo';
import { useEffect, useState } from 'react';

export const useCompletedTask = () => {
  const { getCompletedTaskList } = useStorage();

  const [completedList, setCompletedList] = useState<ToDo[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setCompletedList(await getCompletedTaskList());
  };

  return { completedList };
};
