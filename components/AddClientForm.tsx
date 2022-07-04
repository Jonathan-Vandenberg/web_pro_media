import { Button, Form, Input } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../Redux hooks/hooks";
import { customerId } from "../slices/counter-slice";
import { useAddCustomerMutation } from "../types";

interface props {
  /**Submits the form */
  onClick: () => void;
}

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
    }
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
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddClientForm;
