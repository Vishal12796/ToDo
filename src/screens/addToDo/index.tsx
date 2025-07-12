import { Picker } from '@react-native-picker/picker';
import { Button } from '@root/component/Button';
import { CategoryItem } from '@root/component/CategoryItem';
import { InputText } from '@root/component/Input';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import { styles } from './styles';
import { AddToDoProps, useAddToDo } from './useAddToDo';

export const AddToDo = (props: AddToDoProps) => {
  const addToDo = useAddToDo(props);

  const renderPriorityItem = (level: string) => {
    return (
      <CategoryItem
        title={addToDo.t(level)}
        isSelected={addToDo.priority === level}
        onPress={() => addToDo.setPriority(level)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>{addToDo.t('Title')}</Text>
        <InputText
          value={addToDo.title}
          onChangeText={addToDo.setTitle}
          placeholder={addToDo.t('Enter title')}
        />

        <Text style={styles.label}>{addToDo.t('Description')}</Text>
        <InputText
          value={addToDo.description}
          onChangeText={addToDo.setDescription}
          placeholder={addToDo.t('Enter description')}
          multiline
          style={{ height: moderateVerticalScale(100) }}
        />

        <Text style={styles.label}>{addToDo.t('Priority')}</Text>
        <View style={styles.row}>
          {addToDo.priorities.map(renderPriorityItem)}
        </View>

        <Text style={styles.label}>{addToDo.t('Category')}</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={addToDo.selectedCategory}
            onValueChange={(itemValue, itemIndex) => {
              addToDo.setSelectedCategory(itemValue);
            }}
          >
            <Picker.Item label={addToDo.t('Select Category')} value="" />
            {addToDo.categories.map(cat => (
              <Picker.Item key={cat.id} label={cat.name} value={cat.type} />
            ))}
          </Picker>
        </View>

        <Button
          title={addToDo.t('Add To Do')}
          onPress={addToDo.handleSubmit}
          style={styles.submitButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
