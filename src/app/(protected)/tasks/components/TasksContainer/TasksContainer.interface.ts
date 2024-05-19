import { ITaskItem, ITaskStatus } from '@/utils';

type IFilteredItems = {
  [key in ITaskStatus]: ITaskItem[];
};

interface ITasksContainer {
  items: ITaskItem[];
}

export type { IFilteredItems, ITasksContainer };
