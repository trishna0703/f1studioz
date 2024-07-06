import "../styles/leads.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CustomTabs from "./MenuTabs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedLead } from "../redux/slice/lead";
import { detectDeviceType } from "../utils/commonFunctions";

const Leads = () => {
  const dispatch = useDispatch();
  const isMobile = detectDeviceType();
  useEffect(() => {
    if (isMobile) {
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
