import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Popover, Table } from "antd";
import "antd/dist/antd.css";
import { ScalarLeafsRule } from "graphql";
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

  if (get?.customer?.project?.map?.required) {
    data.push({
      key: get?.customer?.project?.map?.name,
      name: get?.customer?.project?.map?.name,
      date: get?.customer?.project?.map?.startDate,
      status: get?.customer?.project?.map?.status,
      notes: get?.customer?.project?.map?.notes,
    });
  }

  if (get?.customer?.project?.blog?.required) {
    data.push({
      key: get?.customer?.project?.blog?.name,
      name: get?.customer?.project?.blog?.name,
      date: get?.customer?.project?.blog?.startDate,
      status: get?.customer?.project?.blog?.status,
      notes: get?.customer?.project?.blog?.notes,
    });
  }

  if (get?.customer?.project?.photoGallery?.required) {
    data.push({
      key: get?.customer?.project?.photoGallery?.name,
      name: get?.customer?.project?.photoGallery?.name,
      date: get?.customer?.project?.photoGallery?.startDate,
      status: get?.customer?.project?.photoGallery?.status,
      notes: get?.customer?.project?.photoGallery?.notes,
    });
  }

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
          <Popover content={content} title="Notes" trigger="click">
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
            <span
              style={{ padding: "0 1rem", cursor: "pointer" }}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <EditOutlined style={{ color: "grey" }} />
            </span>
            <span
              style={{ padding: "0 1rem", cursor: "pointer" }}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />
            </span>
          </div>
        </>
      ),
    }
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Requirements;
