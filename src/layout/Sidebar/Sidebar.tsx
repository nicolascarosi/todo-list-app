'use client';

import { usePathname, useRouter } from 'next/navigation';

import { logout } from '@/app/(public)/login/actions';
import { ROUTES } from '@/config';
import { useUserStore } from '@/store';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';
import { UserAvatar } from '../UserAvatar';
import { ISidebarItemsComponent, ISidebarMenuItems } from './Sidebar.interface';

const menuItems: ISidebarMenuItems[] = [
  {
    title: 'Dashboard',
    items: [
      {
        title: 'Home',
        href: ROUTES.HOME,
        icon: <HomeOutlined />,
      },
    ],
  },
  {
    title: 'Manage',
    items: [
      {
        title: 'Tasks',
        href: ROUTES.TASKS,
        icon: <AppstoreOutlined />,
      },
    ],
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { removeUser } = useUserStore();

  const handleLogout = () => {
    logout();
    removeUser();
    router.push(ROUTES.LOGIN);
  };

  return (
    <div className="sidebar">
      <UserAvatar />
      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar__header">
            <h2 className="sidebar__header__title">{item.title}</h2>
            {item.items ? (
              <SidebarItems items={item.items} pathname={pathname} />
            ) : null}
          </div>
        ))}
        <Button type="link" onClick={handleLogout}>
          Log out
        </Button>
      </nav>
    </div>
  );
};

export const SidebarItems = ({ items, pathname }: ISidebarItemsComponent) => {
  return items?.length ? (
    <div className="sidebar-items">
      {items.map((item, index: number) => (
        <Link href={item.href} key={`${item.title}-${index}`}>
          <Button
            type={pathname === item.href ? 'primary' : 'text'}
            icon={item.icon}
            size="large"
            block
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  ) : null;
};
