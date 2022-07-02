import { CoffeeOutlined, LineChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NextPage } from "next";
import { SetStateAction, useState } from "react";

const items = [
  {
    label: "Web Pro Media",
    key: "mail",
    icon: <LineChartOutlined />,
  },

  {
    label: "Overview",
    key: "SubMenu",
    icon: <CoffeeOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Clients",
            key: "setting:1",
          },
          {
            label: "Projects",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

const Navbar: NextPage = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e: { key: SetStateAction<string> }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
