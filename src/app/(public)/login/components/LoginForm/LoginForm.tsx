'use client';

import { ROUTES, TOKEN_KEY } from '@/config';
import { loginService } from '@/services';
import { useUserStore } from '@/store';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ILoginValues } from './LoginForm.interface';

export const LoginForm = () => {
  const router = useRouter();
  const { updateUser } = useUserStore();

  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (values: ILoginValues) => {
    try {
      setLoading(true);
      const response = await loginService.login(values);
      localStorage.setItem(TOKEN_KEY, JSON.stringify(response[0].accessToken));
      updateUser(response[0].user);
      router.push(ROUTES.HOME);
    } catch (error) {
      console.error(error);
      message.error('Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-form__title">Welcome!</h1>
      <Form onFinish={handleOnSubmit} autoComplete="off">
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email' },
            { type: 'email', message: 'Please input a valid email' },
          ]}
        >
          <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
