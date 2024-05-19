'use client';

import { TASK_STATUS } from '@/config';
import { ITaskItem } from '@/utils';
import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  PartitionOutlined,
} from '@ant-design/icons';
import { Button, Card, Dropdown, Flex, MenuProps, Tag } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DeleteTaskModal } from '../DeleteTaskModal';
import { FormTaskModal } from '../FormTaskModal';

const tagColors: { [key: string]: string } = {
  Bug: 'red',
  Task: 'green',
  Epic: 'purple',
};

const getCardStatus = (
  dueDate: string | Dayjs,
  status: TASK_STATUS
): string => {
  const expired = dayjs().isAfter(dayjs(dueDate), 'minute');
  if (expired && status !== TASK_STATUS.COMPLETED) return '--expired';
  return '';
};

export const TaskCard = ({
  id,
  title,
  description,
  due_date,
  categories,
  status,
}: ITaskItem) => {
  const [selectedTask, setSelectedTask] = useState<ITaskItem>();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

  const toggleTaskModal = () => setIsTaskModalOpen(!isTaskModalOpen);
  const toggleDeleteTaskModal = () =>
    setIsDeleteTaskModalOpen(!isDeleteTaskModalOpen);

  const handleClickEdit = () => {
    setSelectedTask({
      id,
      title,
      description,
      categories,
      due_date: dayjs(due_date),
      status,
    });
    toggleTaskModal();
  };

  const handleClickDelete = () => {
    setSelectedTask({
      id,
      title,
      description,
      categories,
      due_date: dayjs(due_date),
      status,
    });
    toggleDeleteTaskModal();
  };

  const dropdownItems: MenuProps['items'] = [
    {
      label: 'Edit',
      key: '0',
      icon: <EditOutlined />,
      onClick: handleClickEdit,
    },
    {
      label: 'Delete',
      key: '1',
      icon: <DeleteOutlined />,
      onClick: handleClickDelete,
    },
  ];

  return (
    <>
      <Card
        size="small"
        className={`task-card ${getCardStatus(due_date, status)}`}
        title={
          <>
            <h3 className="task-card__title">{title}</h3>
            <p className="task-card__description">{description}</p>
          </>
        }
        extra={
          <Dropdown menu={{ items: dropdownItems }} trigger={['click']}>
            <Button shape="circle" type="text" size="small">
              <MoreOutlined />
            </Button>
          </Dropdown>
        }
      >
        <Flex justify="space-between" align="center">
          <Flex gap="small">
            <small>
              <PartitionOutlined /> {id}{' '}
            </small>
            <div className="task-card__tags">
              {categories.map((category, i) => (
                <Tag
                  key={`card-${id}-category-${i}`}
                  color={tagColors[category] || 'magenta'}
                >
                  {category}
                </Tag>
              ))}
            </div>
          </Flex>

          <small>
            <ClockCircleOutlined /> {dayjs(due_date).format('YYYY-MM-DD')}
          </small>
        </Flex>
      </Card>
      <FormTaskModal
        isOpen={isTaskModalOpen}
        onCancel={toggleTaskModal}
        onOk={toggleTaskModal}
        initialValues={selectedTask}
      />
      <DeleteTaskModal
        isOpen={isDeleteTaskModalOpen}
        onCancel={toggleDeleteTaskModal}
        onOk={toggleDeleteTaskModal}
        selectedTask={selectedTask}
      />
    </>
  );
};
