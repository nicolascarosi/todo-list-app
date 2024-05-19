import { taskService } from '@/services';
import { LatestTasks, WelcomeTitle } from './components';

const Home = async () => {
  const tasks = await taskService.get();

  return (
    <section className="home-page">
      <WelcomeTitle />
      <LatestTasks items={tasks} />
    </section>
  );
};

export default Home;
