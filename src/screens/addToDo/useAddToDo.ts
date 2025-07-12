import { useNavigation } from '@react-navigation/native';
import {
  CommonScreenPropsType,
  RootStackParamList,
} from '@root/navigator/AppNavigator';
import { Categories, CategoryType } from '@root/types/categories';
import { Priority, ToDo } from '@root/types/todo';
import { generateUniqueId, showAlert } from '@root/utils/utils';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';

export interface AddToDoProps extends CommonScreenPropsType {
  route?: {
    params: RootStackParamList['AddTodo'];
  };
}

export const useAddToDo = (props: AddToDoProps) => {
  const { t } = useTranslation();
  const { addData } = props?.route?.params!;
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<Priority>();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>();

  const categories: Categories[] = [
    {
      id: 1,
      type: CategoryType.Work,
      name: t('Work'),
    },
    {
      id: 2,
      type: CategoryType.Personal,
      name: t('Personal'),
    },
    {
      id: 3,
      type: CategoryType.Urgent,
      name: t('Urgent'),
    },
  ];

  const priorities: string[] = [Priority.High, Priority.Medium, Priority.Low];

  const handleSubmit = () => {
    if (!title.trim()) {
      showAlert(t('Please enter a title.'));
      return;
    }

    if (!description.trim()) {
      showAlert(t('Please enter a description.'));
      return;
    }

    if (!priority) {
      showAlert(t('Please select a priority level.'));
      return;
    }

    if (!selectedCategory) {
      showAlert(t('Please select a category.'));
      return;
    }

    const newTodo: ToDo = {
      id: generateUniqueId(),
      title,
      description,
      priority,
      category: selectedCategory,
    };

    Alert.alert(t('Success'), t('To-Do added successfully!'), [
      {
        text: t('OK'),
        onPress: () => {
          if (addData) {
            addData(newTodo);
            navigation.goBack();
          }
        },
      },
    ]);

    // Clear form
    setTitle('');
    setDescription('');
    setPriority(undefined);
    setSelectedCategory(undefined);
  };

  return {
    t,
    title,
    setTitle,
    description,
    setDescription,
    priorities,
    priority,
    setPriority,
    categories,
    selectedCategory,
    setSelectedCategory,
    handleSubmit,
  };
};
