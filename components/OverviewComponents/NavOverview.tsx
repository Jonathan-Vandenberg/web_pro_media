import {
  DollarOutlined,
  LeftOutlined,
  PartitionOutlined,
  PieChartOutlined,
  ProfileOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NextRouter, useRouter } from "next/router";

interface Props {
  /**Controls the navbar selection */
  onClick: (key: string) => void;
}

const App = ({ onClick }: Props) => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["Timeline"]}
      style={{ width: "20rem" }}
    >
      <Menu.SubMenu key="Overview" title="Overview" icon={<PieChartOutlined />}>
        <Menu.Item
          key="Timeline"
          icon={<PartitionOutlined />}
          onClick={() => {
            onClick("Timeline");
          }}
        >
          Timeline
        </Menu.Item>
        <Menu.Item
          key="Requirements"
          icon={<ProfileOutlined />}
          onClick={() => {
            onClick("Requirements");
          }}
        >
          Requirements
        </Menu.Item>
        <Menu.Item
          key="Payments"
          icon={<DollarOutlined />}
          onClick={() => {
            onClick("Payments");
          }}
        >
          Payments
        </Menu.Item>
        <Menu.Item
          key="Performance"
          icon={<ThunderboltOutlined />}
          onClick={() => {
            onClick("Performance");
          }}
        >
          Performance
        </Menu.Item>
        <Menu.Item
          key="Client"
          icon={<UserOutlined />}
          onClick={() => {
            onClick("Client");
          }}
        >
          Client info
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default App;
