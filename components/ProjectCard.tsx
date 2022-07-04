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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        margin: "0 3rem",
      }}
    >
      {data?.getAllCards?.map((customer?) => (
        <div key={customer.projectName} style={{ padding: "2rem" }}>
          <Card
            style={{
              width: 300,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            cover={
              <Image
                alt={customer?.projectName?.toString()}
                src={
                  customer?.image
                    ? `${customer?.image}`
                    : "https://source.unsplash.com/random/1600x900?apple"
                }
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
              description={
                customer.status === "COMPLETED" ? (
                  <p style={{ color: "green" }}>
                    <strong>Complete</strong>
                  </p>
                ) : (
                  <p style={{ color: "orange" }}>In Progress</p>
                )
              }
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
