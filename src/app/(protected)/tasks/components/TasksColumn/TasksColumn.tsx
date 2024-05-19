import { Empty, Flex } from 'antd';
import { TaskCard } from '../TaskCard';
import { ITasksColumn } from './TasksColumn.interface';

export const TasksColumn = ({ title, items }: ITasksColumn) => (
  <div className="tasks-column">
    <h2 className="tasks-column__title">{title}</h2>
    <Flex gap="middle" vertical className="tasks-column__container">
      {items ? (
        items.map((item) => <TaskCard key={`task-card-${item.id}`} {...item} />)
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No tasks to show"
        />
      )}
    </Flex>
  </div>
);
