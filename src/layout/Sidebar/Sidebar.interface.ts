type ISubmenuItem = {
  title: string;
  href: string;
  icon: React.ReactElement;
};

interface ISidebarMenuItems {
  title: string;
  items: ISubmenuItem[];
}

interface ISidebarItemsComponent {
  items: ISubmenuItem[];
  pathname: string;
}

export type { ISidebarItemsComponent, ISidebarMenuItems, ISubmenuItem };
