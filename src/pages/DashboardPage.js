import React from "react";
import Heading from "../components/common/Heading";
import LayoutDashboard from "../layout/LayoutDashboard";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import { v4 } from "uuid";
import Gap from "../components/common/Gap";
import CampaignFeature from "../modules/campaign/CampaignFeature";

const DashboardPage = () => {
  return (
    <div>
      <LayoutDashboard>
        <Heading number={4}>Your Compaign</Heading>
        <CampaignFeature></CampaignFeature>
        <Gap></Gap>
        <Heading>Popular Compaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
        <Gap></Gap>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem key={v4()}></CampaignItem>
            ))}
        </CampaignGrid>
      </LayoutDashboard>
    </div>
  );
};

export default DashboardPage;
