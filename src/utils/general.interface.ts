import { TASK_STATUS } from '@/config';
import { Dayjs } from 'dayjs';

type ITaskStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

type ITaskItem = {
  id: string;
  title: string;
  description: string;
  due_date: string | Dayjs;
  categories: string[];
  status: TASK_STATUS;
};

export type { ITaskItem, ITaskStatus };
