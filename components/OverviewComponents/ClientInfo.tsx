import React from "react";
import { Descriptions } from "antd";

interface ClientInfoProps {
  name: String | null | undefined;
  email: String | null | undefined;
  phone: String | null | undefined;
}

const ClientInfo = ({ name, email, phone }: ClientInfoProps) => (
  <Descriptions title="Client Details">
    <Descriptions.Item label="Name">{name}</Descriptions.Item>
    <Descriptions.Item label="Email">{email}</Descriptions.Item>
    <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
  </Descriptions>
);

export default ClientInfo;
