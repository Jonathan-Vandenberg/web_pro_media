import { Button, Form, Input } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../Redux hooks/hooks";
import { customerId } from "../slices/customerIdSlice";
import { useAddCustomerMutation } from "../types";

const AddClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useAppDispatch();

  const id = uuid();

  const [createCustomer, { loading }] = useAddCustomerMutation();

  const onFinish = (e: { preventDefault: () => void }) => {
    if (name !== "" && email !== "" && phone !== "") {
      createCustomer({
        variables: {
          input: {
            name: name,
            email: email,
            phone: phone,
            id: id,
          },
        },
      });

      dispatch(customerId(id));

      setName("");
      setEmail("");
      setPhone("");
    }

    return;
  };

  const onFinishFailed = () => {
    console.log("Failed:", Error);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="clientName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="clientEmail"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Mobile"
        name="clientMobile"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 14,
          span: 16,
        }}
      >
        <Button
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "purple",
            border: "none",
          }}
        >
          Add Client
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddClientForm;
