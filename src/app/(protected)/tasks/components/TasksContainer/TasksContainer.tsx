'use client';

import { TASK_CATEGORIES_OPTIONS } from '@/config';
import { ITaskItem, groupBy } from '@/utils';
import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { TasksColumn } from '../TasksColumn';
import { IFilteredItems, ITasksContainer } from './TasksContainer.interface';

const defaultValueFilteredItems = {
  NOT_STARTED: [],
  IN_PROGRESS: [],
  COMPLETED: [],
};

export const TasksContainer = ({ items = [] }: ITasksContainer) => {
  const [filteredItems, setFilteredItems] = useState<IFilteredItems>(
    defaultValueFilteredItems
  );

  useEffect(() => {
    setFilteredItems(groupBy(items, (item: ITaskItem) => item.status));
  }, []);

  const handleChangeFilter = (value: string[]) => {
    const filteredByCategory =
      value.length >= 1
        ? items.filter((item) =>
            value.some((val) => item.categories.includes(val))
          )
        : items;
    setFilteredItems(
      groupBy(filteredByCategory, (item: ITaskItem) => item.status)
    );
  };

  return (
    <>
      <div className="filters">
        <Select
          mode="tags"
          placeholder="Filter by category"
          options={TASK_CATEGORIES_OPTIONS}
          onChange={handleChangeFilter}
        />
      </div>
      <div className="tasks-container">
        <TasksColumn title="To-do" items={filteredItems.NOT_STARTED} />
        <TasksColumn title="In Progress" items={filteredItems.IN_PROGRESS} />
        <TasksColumn title="Completed" items={filteredItems.COMPLETED} />
      </div>
    </>
  );
};
