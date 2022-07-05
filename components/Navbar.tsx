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
      key: "home",
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

  return (
    <Menu mode="horizontal" items={items} style={{ lineHeight: "64px" }} />
  );
};

export default Navbar;
