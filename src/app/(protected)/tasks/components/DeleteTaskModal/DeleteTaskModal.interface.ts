import { ITaskItem } from '@/utils';

interface IDeleteTaskModal {
  onOk?(): void;
  onCancel?(): void;
  isOpen: boolean;
  selectedTask?: ITaskItem;
}

export type { IDeleteTaskModal };
