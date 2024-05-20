export enum TASK_STATUS {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export const TASK_STATUS_OPTIONS = [
  {
    value: TASK_STATUS.NOT_STARTED,
    label: 'To-do',
  },
  {
    value: TASK_STATUS.IN_PROGRESS,
    label: 'In Progress',
  },
  {
    value: TASK_STATUS.COMPLETED,
    label: 'Completed',
  },
];

export const TASK_CATEGORIES_OPTIONS = [
  {
    value: 'Bug',
    label: 'Bug',
  },
  {
    value: 'Task',
    label: 'Task',
  },
  {
    value: 'Epic',
    label: 'Epic',
  },
];

export const TOKEN_KEY = 'accessToken';
