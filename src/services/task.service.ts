import { ENDPOINTS } from '@/config';
import { ITaskItem } from '@/utils';

export const taskService = {
  get: async (): Promise<ITaskItem[]> => {
    const res = await fetch(ENDPOINTS.TASK, {
      cache: 'no-store',
    });
    if (res.ok) return await res.json();
    throw new Error('Something went wrong');
  },
  delete: async (id: string): Promise<ITaskItem[]> => {
    const res = await fetch(`${ENDPOINTS.TASK}/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) return await res.json();
    throw new Error('Something went wrong');
  },
  edit: async (body: any, id: string): Promise<ITaskItem[]> => {
    const res = await fetch(`${ENDPOINTS.TASK}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) return await res.json();
    throw new Error('Something went wrong');
  },
  create: async (body: any): Promise<ITaskItem[]> => {
    const res = await fetch(`${ENDPOINTS.TASK}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) return await res.json();
    throw new Error('Something went wrong');
  },
};
