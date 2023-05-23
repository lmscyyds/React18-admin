import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "菜单1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "菜单2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "菜单3",
    key: "/page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "菜单301",
        key: "/page3/page301",
      },
      {
        label: "菜单302",
        key: "/page3/page302",
      },
    ],
  },
  {
    label: "菜单4",
    key: "/page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "菜单401",
        key: "/page4/page401",
      },
      {
        label: "菜单402",
        key: "/page4/page402",
      },
    ],
  },
  {
    label: "菜单5",
    key: "/page5",
    icon: <FileOutlined />,
  },
];

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  let key: string = "";

  const currentPathName = location.pathname;

  items.forEach((el) => {
    //@ts-ignore
    if (el.children) {
      //@ts-ignore
      el!["children"].forEach((val) => {
        if (val.key === currentPathName) {
          key = el!.key as string;
        }
      });
    }
  });
  console.log(key);

  const [openKeys, setOpenKeys] = useState<string[]>([key]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    console.log(keys);
    setOpenKeys(keys.slice(-1));

    // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    //   setOpenKeys(keys);
    // } else {
    //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
  };

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
};

export default Comp;
