import { ITaskItem } from '@/utils';

interface IFormTaskModal {
  onOk?(): void;
  onCancel?(): void;
  isOpen: boolean;
  initialValues?: ITaskItem;
}

export type { IFormTaskModal };
