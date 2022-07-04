import { LineChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import AddProjectModal from "./AddProjectModal";

const Navbar: NextPage = () => {
  const router = useRouter();

  const items = [
    {
      label: "Web Pro Media",
      key: "mail",
      icon: <LineChartOutlined />,
      onClick: () => {
        router.push("/");
      },
    },
    {
      key: "addProject",
      icon: <AddProjectModal />,
      style: { marginLeft: "auto" },
    },
  ];

  const [current, setCurrent] = useState("mail");

  const onClick = (e: { key: SetStateAction<string> }) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ lineHeight: "64px" }}
    />
  );
};

export default Navbar;
