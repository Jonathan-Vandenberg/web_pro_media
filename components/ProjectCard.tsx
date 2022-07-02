import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useGetAllCardsQuery } from "../types";
import Image from "next/image";
const { Meta } = Card;

const ProjectCard = () => {
  const { data, loading, error } = useGetAllCardsQuery();

  return (
    <>
      {data?.getAllCards?.map((customer?) => (
        <Card
          key={customer.projectName}
          style={{
            width: 300,
          }}
          cover={
            <Image
              alt={customer?.projectName?.toString()}
              src={`${customer?.image}`}
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://picsum.photos/id/129/300/300" />}
            title={customer.projectName}
            description={customer.status}
          />
        </Card>
      ))}
    </>
  );
};

export default ProjectCard;
