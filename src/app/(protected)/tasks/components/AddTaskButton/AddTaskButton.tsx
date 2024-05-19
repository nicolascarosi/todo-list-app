'use client';

import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { FormTaskModal } from '../FormTaskModal';

export const AddTaskButton = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const toggleTaskModal = () => setIsTaskModalOpen(!isTaskModalOpen);

  return (
    <>
      <Button
        size="large"
        icon={<PlusCircleOutlined />}
        onClick={toggleTaskModal}
      >
        Add Task
      </Button>
      <FormTaskModal
        isOpen={isTaskModalOpen}
        onCancel={toggleTaskModal}
        onOk={toggleTaskModal}
      />
    </>
  );
};
