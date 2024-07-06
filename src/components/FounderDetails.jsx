import React from "react";
import Notes from "./Notes";
import Founder from "./Founder";
import "../styles/tabContent.css";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import founders from "../data/founders.json";
import { MdOutlineEdit } from "react-icons/md";
import { TabList, TabContext, TabPanel } from "@mui/lab";

const FounderDetails = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="founderDetailTabs">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Overview" value={"1"} />
            <Tab label="Founder Details" value={"2"} />
            <Tab label="Website" value={"3"} />
            <Tab label="Last Interactions" value={"4"} />
            <Tab label="Notes" value={"5"} />
          </TabList>
        </Box>
        <TabPanel value="1">Coming Soon...</TabPanel>
        <TabPanel value="2" sx={{ padding: "1rem 0 " }}>
          <>
            <div className="tabHeading">
              <h3>Founder Details</h3>
              <MdOutlineEdit />
            </div>
            {founders
              ? founders.map((founder) => (
                  <Founder {...{ founder }} key={founder.id} />
                ))
              : null}
          </>
        </TabPanel>
        <TabPanel value="3">Coming Soon...</TabPanel>
        <TabPanel value="4">Coming Soon...</TabPanel>
        <TabPanel value="5">
          <Notes />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default FounderDetails;
