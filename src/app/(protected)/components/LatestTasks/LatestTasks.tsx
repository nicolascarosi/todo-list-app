'use client';

import { TASK_STATUS } from '@/config';
import { ITaskItem } from '@/utils';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { TasksColumn } from '../../tasks/components';
import { ILatestTasks } from './LatestTasks.interface';

const TASKS_TO_SHOW = 5;

export const LatestTasks = ({ items }: ILatestTasks) => {
  const [filteredItems, setFilteredItems] = useState<ITaskItem[]>([]);

  useEffect(() => {
    const newItems = items
      .filter((item: ITaskItem) => item.status !== TASK_STATUS.COMPLETED)
      .sort((a, b) => (dayjs(a.due_date).isAfter(dayjs(b.due_date)) ? 1 : -1));
    setFilteredItems(newItems.slice(0, TASKS_TO_SHOW));
  }, []);

  return <TasksColumn title="Tasks next to due" items={filteredItems} />;
};
