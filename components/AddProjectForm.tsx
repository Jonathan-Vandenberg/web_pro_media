import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../Redux hooks/hooks";
import { projectId } from "../slices/projectIdSlice";
import type { WebsiteCategory, WebsiteType } from "../types";
import { useAddProjectMutation, useAddTimelineMutation } from "../types";

const AddProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [websiteCategory, setWebsiteCategory] = useState("");

  const dispatch = useAppDispatch();

  const { value: customerId } = useAppSelector((state) => state.customerId);

  const id = uuid();
  const timelineId = uuid();

  const [addProject] = useAddProjectMutation();
  const [addTimeline, { loading }] = useAddTimelineMutation();

  if (loading) {
    return <div>Loading...</div>;
  }

  const submitProject = () => {
    if (projectName !== "" && websiteType !== "" && websiteCategory !== "") {
      addProject({
        variables: {
          input: {
            projectName: projectName,
            customerId: customerId,
            id: id,
            websiteType: websiteType as WebsiteType,
            websiteCategory: websiteCategory as WebsiteCategory,
          },
        },
      });

      addTimeline({
        variables: {
          input: {
            customerId: customerId,
            id: timelineId,
          },
        },
      });

      dispatch(projectId(id));

      setProjectName("");
      setWebsiteType("");
      setWebsiteCategory("");
    }

    return;
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={submitProject}
    >
      <Form.Item label="Name" required>
        <Input onChange={(e) => setProjectName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Type" required>
        <Select
          onChange={(value) => {
            setWebsiteType(value);
          }}
        >
          <Select.Option value="BLOG_WEBSITE">Blog website</Select.Option>
          <Select.Option value="BUSINESS_WEBSITE">
            Business Website
          </Select.Option>
          <Select.Option value="ECOMMERCE_WEBSITE">
            Ecommerce Website
          </Select.Option>
          <Select.Option value="EVENT_WEBSITE">Event Website</Select.Option>
          <Select.Option value="INFORMATIONAL_WEBSITE">
            Informational Website
          </Select.Option>
          <Select.Option value="MEMBERSHIP_WEBSITE">
            Membership Website
          </Select.Option>
          <Select.Option value="NONPROFIT_WEBSITE">
            Nonprofit Website
          </Select.Option>
          <Select.Option value="ONLINE_FORUM">Online Forum</Select.Option>
          <Select.Option value="PERSONAL_WEBSITE">
            Personal Website
          </Select.Option>
          <Select.Option value="PORTFOLIO_WEBSITE">
            Portfolio Website
          </Select.Option>
          <Select.Option value="OTHER">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Category" required>
        <Select onChange={(value) => setWebsiteCategory(value)}>
          <Select.Option value="AUTOMOTIVE">Automotive</Select.Option>
          <Select.Option value="BUSINESS_SUPPORT_AND_SUPPLIES">
            Business-Support & Supplies
          </Select.Option>
          <Select.Option value="COMPUTERS_AND_ELECTRONICS">
            Computers & Electronics
          </Select.Option>
          <Select.Option value="CONTRUCTION_AND_CONTRACTING">
            Contruction & Contracting
          </Select.Option>
          <Select.Option value="EDUCATION">Education</Select.Option>
          <Select.Option value="ENTERTAINMENT">Entertainment</Select.Option>
          <Select.Option value="FOOD_AND_DINING">Food & Dining</Select.Option>
          <Select.Option value="HEALTH_AND_MEDICINE">
            Health & Medicine
          </Select.Option>
          <Select.Option value="HOME_AND_GARDEN">Home & Garden</Select.Option>
          <Select.Option value="LEGAl_AND_FINANCIAL">
            Legal & Financial
          </Select.Option>
          <Select.Option value="MANUFACTURING_WHOLESALE_AND_DISTRIBUTION">
            Manufacturing, Wholesale & Distribution
          </Select.Option>
          <Select.Option value="MERCHANTS_AND_RETAIL">
            Merchants & Retail
          </Select.Option>
          <Select.Option value="PERSONAL_CARE_AND_SERVICES">
            PersonalCare & Services
          </Select.Option>
          <Select.Option value="REAL_ESTATE">Real-Estate</Select.Option>
          <Select.Option value="TRAVEL_AND_TRANSPORTATION">
            Travel & Transportation
          </Select.Option>
          <Select.Option value="OTHER">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 12,
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
          Create Project
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProjectForm;
