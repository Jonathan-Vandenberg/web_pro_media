import React from "react";
import { Badge, Descriptions } from "antd";
import { useCustomerQuery } from "../../types";

interface Props {
  id: string;
}

const Overview = ({ id }: Props) => {
  const { data, loading, error } = useCustomerQuery({
    variables: {
      id: id,
    },
  });
  return (
    <Descriptions
      title="User Info"
      layout="vertical"
      bordered
      style={{ width: "80vw", margin: "auto" }}
    >
      <Descriptions.Item label="Product">
        {data?.customer?.project?.projectName}
      </Descriptions.Item>
      <Descriptions.Item label="">Prepaid</Descriptions.Item>
      <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
      <Descriptions.Item label="Start Date">
        {data?.customer?.project?.startDate}
      </Descriptions.Item>
      <Descriptions.Item label="End Date" span={2}>
        {data?.customer?.project?.endDate}
      </Descriptions.Item>
      <Descriptions.Item label="Status" span={3}>
        <Badge status="processing" text="Online" />
      </Descriptions.Item>
      <Descriptions.Item label="Total Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Hosting Provider: Hostinger
        <br />
        Domain Provider: NameCheap
        <br />
        Database: MySQL
        <br />
        Stack: Wordpress
        <br />
        Package: Basic
        <br />
        Storage space: 10 GB
        <br />
        Region: East China 1<br />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Overview;
