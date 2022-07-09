import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import AddClientForm from "./AddClientForm";
import AddProjectForm from "./AddProjectForm";
import AddRequirementsForm from "./AddRequirementsForm";

const { Step } = Steps;

const steps = [
  {
    title: "Add Client",
    content: <AddClientForm />,
  },
  {
    title: "Add Project",
    content: <AddProjectForm />,
  },
  {
    title: "Add Options",
    content: <AddRequirementsForm />,
  },
];

const AddClientAndProject = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} style={{ padding: "1rem" }}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AddClientAndProject;
