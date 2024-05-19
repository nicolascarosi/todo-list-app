import { LoginForm } from './components';

const Login = async () => {
  return (
    <section className="login-page">
      <div className="login-page__left-side">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
