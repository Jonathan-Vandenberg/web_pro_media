import { Timeline } from "antd";
import { useTimelineQuery } from "../../types";

interface Props {
  id: string;
}

const TimelineComponent = ({ id }: Props) => {
  const { data, loading, error } = useTimelineQuery({
    variables: {
      id: id,
    },
  });

  return (
    <Timeline>
      <Timeline.Item
        color={
          data?.timeline?.clarify?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.clarify?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.functionalityTimeline?.status === "NOT_STARTED"
            ? "grey"
            : "green"
        }
      >
        {data?.timeline?.functionalityTimeline?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.layout?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.layout?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.tools?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.tools?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.implementFunctionality?.status === "NOT_STARTED"
            ? "grey"
            : "green"
        }
      >
        {data?.timeline?.implementFunctionality?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.implementDesign?.status === "NOT_STARTED"
            ? "grey"
            : "green"
        }
      >
        {data?.timeline?.implementDesign?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.review?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.review?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.alterations?.status === "NOT_STARTED"
            ? "grey"
            : "green"
        }
      >
        {data?.timeline?.alterations?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.testing?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.testing?.name}
      </Timeline.Item>
      <Timeline.Item
        color={
          data?.timeline?.deploy?.status === "NOT_STARTED" ? "grey" : "green"
        }
      >
        {data?.timeline?.deploy?.name}
      </Timeline.Item>
    </Timeline>
  );
};

export default TimelineComponent;
