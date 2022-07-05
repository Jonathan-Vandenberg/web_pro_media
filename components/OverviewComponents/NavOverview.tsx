import {
  DollarOutlined,
  PartitionOutlined,
  ProfileOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

interface Props {
  /**Controls the navbar selection */
  onClick: (key: string) => void;
}

const App = ({ onClick }: Props) => {
  return (
    <Menu defaultSelectedKeys={["Timeline"]} mode="horizontal">
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
    </Menu>
  );
};

export default App;
