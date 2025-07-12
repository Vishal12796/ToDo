export enum CategoryType {
  Work = 'Work',
  All = 'All',
  Personal = 'Personal',
  Urgent = 'Urgent',
}

export type Categories = {
  id: number;
  type: CategoryType;
  name: string;
};
