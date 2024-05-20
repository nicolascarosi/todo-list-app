'use client';

import { useUserStore } from '@/store';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export const UserAvatar = () => {
  const { user } = useUserStore();

  return (
    <div className="user-avatar">
      <Avatar
        style={{ backgroundColor: '#87d068' }}
        size={100}
        icon={<UserOutlined />}
      />
      <p className="user-avatar__name">{user}</p>
    </div>
  );
};
