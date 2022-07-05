import React from "react";
import { CoffeeOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useGetAllCardsQuery } from "../types";
import Image from "next/image";
const { Meta } = Card;

const ProjectCard = () => {
  const { data, loading, error } = useGetAllCardsQuery();

  /**Pulls a random image from lorumpicsum.com */
  const randomImage = () => {
    const serial = Math.floor(Math.random() * 50);
    const url = `https://picsum.photos/id/${serial}/500/300`;
    return url;
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        margin: "0 3rem",
        paddingTop: "3rem",
      }}
    >
      {data?.getAllCards?.map((project?) => (
        <div key={project.projectName} style={{ padding: "2rem" }}>
          <Card
            style={{
              width: 300,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
            cover={
              <Image
                alt={project?.projectName?.toString()}
                src={project?.image ? `${project?.image}` : randomImage()}
                width={500}
                height={300}
                style={{ objectFit: "contain" }}
              />
            }
            actions={[<CoffeeOutlined key="edit" />]}
            extra={<a href={`/${project?.customerId}`}>Overview</a>}
          >
            <Meta
              avatar={<Avatar src="https://picsum.photos/id/129/300/300" />}
              title={project.projectName}
              description={
                project.status === "COMPLETED" ? (
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
