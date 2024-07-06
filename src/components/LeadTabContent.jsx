import React from "react";
import LeadDetails from "./LeadDetails";
import FounderDetails from "./FounderDetails";

const LeadTabContent = () => {
  return (
    <div className="leadDetailwrapper">
      <LeadDetails />
      <FounderDetails />
    </div>
  );
};

export default LeadTabContent;
