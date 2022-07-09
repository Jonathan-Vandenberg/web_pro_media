import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import SideMenu from "../components/OverviewComponents/NavOverview";
import Overview from "../components/OverviewComponents/Overview";
import Requirements from "../components/OverviewComponents/Requirements";
import TimelineComponent from "../components/Timeline/TImeline";
import { useCustomerQuery } from "../types";

const ProjectOverview = () => {
  const [enableTimeline, setEnableTimeline] = useState(true);
  const [enableClientInfo, setEnableClientInfo] = useState(false);
  const [enableRequirements, setEnableRequirements] = useState(false);
  const [enablePerformance, setEnablePerformance] = useState(false);
  const [enablePayments, setEnablePayments] = useState(false);

  const router: NextRouter = useRouter();
  const { id: slug } = router.query;

  const { data, loading, error } = useCustomerQuery({
    variables: {
      id: slug as string,
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
      case "Client":
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
      ></div>
      {enableTimeline && (
        <TimelineComponent id={data?.customer?.timeline?.id!} />
      )}
      {enableClientInfo && <Overview id={slug as string} />}
      {enableRequirements && <Requirements id={slug as string} />}
    </>
  );
};

export default ProjectOverview;
