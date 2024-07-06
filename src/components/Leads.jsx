import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/leads.css";
import CustomTabs from "./MenuTabs";
import { useDispatch } from "react-redux";
import { detectDeviceType } from "../utils/commonFunctions";
import { setSelectedLead } from "../redux/slice/lead";

const Leads = () => {
  const dispatch = useDispatch();
  const isMobile = detectDeviceType();
  useEffect(() => {
    if (isMobile) {
      console.log("entered");
      dispatch(setSelectedLead(0));
    }
  }, []);
  return (
    <main className="contentWrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <CustomTabs />
      </div>
    </main>
  );
};

export default Leads;
