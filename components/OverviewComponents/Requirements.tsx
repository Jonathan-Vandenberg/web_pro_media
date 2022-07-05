import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Popover, Table } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useCustomerQuery } from "../../types";

const progressSteps = [
  "Clarify Project Requirements",
  "Design Rough Functionality",
  "Design Rough Layout",
  "Decide on Framework and Tools",
  "Implement Functionality",
  "Implement Design",
  "Client Review",
  "Alterations if Needed",
  "Testing",
  "Deployment",
];

interface Props {
  id: string;
}

const Requirements = ({ id }: Props) => {
  const [success, setSuccess] = React.useState(true);

  const {
    data: get,
    loading,
    error,
  } = useCustomerQuery({
    variables: {
      id,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const columns = [];

  // Notes
  const content = (
    <div>
      <p>{get?.customer?.project[0]?.map[0]?.notes}</p>
    </div>
  );

  interface IRequirement {
    key: string | null | undefined;
    date: string | null | undefined;
    name: string | null | undefined;
    status: string | null | undefined;
    notes: string | null | undefined;
  }

  const data: IRequirement[] = [];

  if (get?.customer?.project[0]?.map?.length > 0) {
    data.push({
      key: "1",
      date: get?.customer?.project[0]?.map[0]?.startDate,
      name: get?.customer?.project[0]?.map[0] ? "Map" : null,
      status: get?.customer?.project[0]?.map[0]?.status,
      notes: get?.customer?.project[0]?.map[0]?.notes,
    });

    columns.push(
      {
        title: "Start Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Req",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Notes",
        dataIndex: "notes",
        key: "notes",
        render: (notes: string) => {
          return (
            <Popover content={content} title="Title" trigger="click">
              <Button>Read Me</Button>
            </Popover>
          );
        },
      },
      {
        dataIndex: "status",
        key: "state",
        render: (status: string) => {
          if (status === "NOT_STARTED") {
            return <Badge status="warning" text="Not Started" />;
          } else if (status === "IN_PROGRESS") {
            return <Badge status="processing" text="In Progress" />;
          } else if (status === "COMPLETED") {
            return <Badge status="success" text="Completed" />;
          }
        },
      },
      {
        key: "action",
        render: () => (
          <>
            <div>
              <span style={{ padding: "0 1rem" }}>
                <EditOutlined />
              </span>
              <span style={{ padding: "0 1rem" }}>
                <DeleteOutlined />
              </span>
            </div>
          </>
        ),
      }
    );
  }

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Requirements;
