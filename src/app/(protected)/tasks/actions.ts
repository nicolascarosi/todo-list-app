'use server';

import { TASK_STATUS } from '@/config';
import { taskService } from '@/services';
import { ITaskItem } from '@/utils';

export const createTask = async (values: ITaskItem) => {
  await taskService.create({
    ...values,
    status: TASK_STATUS.NOT_STARTED,
  });
};

export const editTask = async (values: ITaskItem, id: string) => {
  await taskService.edit(
    { ...values, due_date: values.due_date.toString() },
    id
  );
};

export const deleteTask = async (id: string) => {
  await taskService.delete(id);
};
