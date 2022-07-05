import { Timeline } from "antd";

const TimelineComponent = () => {
  return (
    <Timeline>
      <Timeline.Item color="green">Clarify Project Requirements</Timeline.Item>
      <Timeline.Item color="green">Design Rough Functionality</Timeline.Item>
      <Timeline.Item color="red">Design Rough Layout</Timeline.Item>
      <Timeline.Item>Decide on Framework and Tools</Timeline.Item>
      <Timeline.Item color="gray">Implement Functionality</Timeline.Item>
      <Timeline.Item color="gray">Implement Design</Timeline.Item>
      <Timeline.Item color="#00CCFF">Client Review</Timeline.Item>
      <Timeline.Item color="#00CCFF">Testing</Timeline.Item>
      <Timeline.Item color="#00CCFF">Deployment</Timeline.Item>
    </Timeline>
  );
};

export default TimelineComponent;
