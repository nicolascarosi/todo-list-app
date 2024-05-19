import { SectionTitle } from '@/components';
import { taskService } from '@/services';
import { AddTaskButton } from './components';
import { TasksContainer } from './components/TasksContainer/TasksContainer';

export default async function TasksPage() {
  const tasks = await taskService.get();

  return (
    <section className="tasks-page">
      <SectionTitle title="Tasks" rightElement={<AddTaskButton />} />
      <TasksContainer items={tasks} />
    </section>
  );
}
