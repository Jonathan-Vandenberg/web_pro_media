import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import SideMenu from "../components/OverviewComponents/NavOverview";
import TimelineComponent from "../components/OverviewComponents/Timeline";
import { useGetCustomerQuery } from "../types";

const ProjectOverview = () => {
  const [enableTimeline, setEnableTimeline] = useState(false);
  const [enableClientInfo, setEnableClientInfo] = useState(false);
  const [enableRequirements, setEnableRequirements] = useState(false);
  const [enablePerformance, setEnablePerformance] = useState(false);
  const [enablePayments, setEnablePayments] = useState(false);

  const router: NextRouter = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useGetCustomerQuery({
    variables: {
      id: id as string,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  const onEnable = (val: string) => {
    switch (val) {
      case "Timeline":
        setEnableTimeline(!enableTimeline);
        setEnableClientInfo(false);
        setEnableRequirements(false);
        setEnablePerformance(false);
        setEnablePayments(false);
        break;
      case "ClientInfo":
        setEnableClientInfo(!enableClientInfo);
        setEnableTimeline(false);
        setEnableRequirements(false);
        setEnablePerformance(false);
        setEnablePayments(false);
        break;
      case "Requirements":
        setEnableRequirements(!enableRequirements);
        setEnableTimeline(false);
        setEnableClientInfo(false);
        setEnablePerformance(false);
        setEnablePayments(false);
        break;
      case "Performance":
        setEnablePerformance(!enablePerformance);
        setEnableTimeline(false);
        setEnableClientInfo(false);
        setEnableRequirements(false);
        setEnablePayments(false);
        break;
      case "Payments":
        setEnablePayments(!enablePayments);
        setEnableTimeline(false);
        setEnableClientInfo(false);
        setEnableRequirements(false);
        setEnablePerformance(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <SideMenu onClick={onEnable} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3rem",
        }}
      >
        {enableTimeline && <TimelineComponent />}
      </div>
    </>
  );
};

export default ProjectOverview;
