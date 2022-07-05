import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Popover, Table } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useCustomerQuery } from "../../types";

interface Props {
  id: string;
}

const Requirements = ({ id }: Props) => {
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

  // Notes
  const content = (
    <div>
      <p>{get?.customer?.project?.map?.notes}</p>
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
  const columns = [];

  data.push({
    key: "1",
    date: get?.customer?.project?.map?.startDate,
    name: get?.customer?.project?.map ? "Map" : null,
    status: get?.customer?.project?.map?.status,
    notes: get?.customer?.project?.map?.notes,
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
            <Button>Info</Button>
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

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Requirements;
