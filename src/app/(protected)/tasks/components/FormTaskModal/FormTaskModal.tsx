'use client';

import {
  TASK_CATEGORIES_OPTIONS,
  TASK_STATUS,
  TASK_STATUS_OPTIONS,
} from '@/config';
import { ITaskItem } from '@/utils';
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  message,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { useState } from 'react';
import { createTask, editTask } from '../../actions';
import { IFormTaskModal } from './FormTaskModal.interface';

const dateFormat = 'YYYY-MM-DD';
const currentDate = dayjs();

export const FormTaskModal = ({
  onCancel,
  onOk,
  isOpen,
  initialValues,
}: IFormTaskModal) => {
  const isEditModal = !!initialValues?.id;
  const modalTitle = isEditModal
    ? `Edit task ${initialValues.id}`
    : 'Create new task';

  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (values: ITaskItem) => {
    try {
      setLoading(true);
      if (isEditModal)
        await editTask(
          { ...values, due_date: values.due_date.toString() },
          initialValues.id
        );
      else
        await createTask({
          ...values,
          due_date: values.due_date.toString(),
          status: TASK_STATUS.NOT_STARTED,
        });

      message.success(isEditModal ? 'Task edited' : 'Task created');

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
    <Modal
      title={modalTitle}
      open={isOpen}
      onCancel={onCancel}
      destroyOnClose
      footer={(_, { CancelBtn }) => (
        <>
          <CancelBtn />
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            form="taskForm"
          >
            Submit
          </Button>
        </>
      )}
    >
      <Form
        layout="vertical"
        id="taskForm"
        onFinish={handleOnSubmit}
        autoComplete="off"
        initialValues={initialValues}
      >
        <Form.Item
          label="Summary"
          name="title"
          rules={[
            {
              required: true,
              message: 'Summary required',
            },
          ]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Description required',
            },
          ]}
        >
          <TextArea placeholder="Enter description..." />
        </Form.Item>
        <Form.Item
          label="Categories"
          name="categories"
          rules={[
            {
              required: true,
              message: 'Categories required',
            },
          ]}
        >
          <Select
            mode="tags"
            placeholder="Select an option"
            options={TASK_CATEGORIES_OPTIONS}
          />
        </Form.Item>
        <Flex justify="space-between" gap="large">
          <Form.Item
            label="Due date"
            name="due_date"
            rules={[
              {
                required: true,
                message: 'Due date required',
              },
            ]}
          >
            <DatePicker
              format={dateFormat}
              minDate={dayjs(currentDate, dateFormat)}
              placeholder="Select date"
            />
          </Form.Item>
          {isEditModal && (
            <Form.Item label="Status" name="status">
              <Select
                placeholder="Select an option"
                options={TASK_STATUS_OPTIONS}
              />
            </Form.Item>
          )}
        </Flex>
      </Form>
    </Modal>
  );
};
