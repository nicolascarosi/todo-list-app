'use client';

import { ModalConfirm } from '@/components';
import { message } from 'antd';
import { useState } from 'react';
import { deleteTask } from '../../actions';
import { IDeleteTaskModal } from './DeleteTaskModal.interface';

export const DeleteTaskModal = ({
  onCancel,
  onOk,
  isOpen,
  selectedTask,
}: IDeleteTaskModal) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteTask = async () => {
    try {
      setLoading(true);
      await deleteTask(selectedTask?.id || '');
      message.success('Task deleted');

      onOk && onOk();
      location.reload();
    } catch (error) {
      console.error(error);
      message.error('Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalConfirm
      isOpen={isOpen}
      loading={loading}
      title="Are you sure you want to delete this task?"
      onOk={handleDeleteTask}
      onCancel={onCancel}
    />
  );
};
