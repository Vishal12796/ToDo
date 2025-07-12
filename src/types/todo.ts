import { CategoryType } from './categories';

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export const PriorityOrder = {
  [Priority.High]: 3,
  [Priority.Medium]: 2,
  [Priority.Low]: 1,
};

export type ToDo = {
  id: number;
  priority: Priority;
  title: string;
  description: string;
  category: CategoryType;
};
