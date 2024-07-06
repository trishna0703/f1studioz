import React, { useEffect, useRef, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NewLeadsList from "./NewLeadsList";
import { detectDeviceType } from "../utils/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLead } from "../redux/slice/lead";
import LeadTabContent from "./LeadTabContent";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import { MdGridView } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import {
  Button,
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuTabs = () => {
  const [value, setValue] = useState("1");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { selectedLead } = useSelector((state) => state.leads);
  const isMobile = detectDeviceType();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log({ isMobile, selectedLead });
  return (
    <Box>
      <TabContext value={value}>
        <div className="tabsWrapper">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New (20)" value={"1"} />
            <Tab label="Pipeline (60)" value={"2"} />
            <Tab label="Rolled off (40)" value={"3"} />
          </TabList>
          <div className="sortSection">
            <small>Sort by</small>
            <div className="latestLeadsDropdown">
              <Button
                id="dropdown-button"
                aria-controls={open ? "filter-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Latest Leads <IoMdArrowDropdown />
              </Button>
              <Menu
                id="filter-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "dropdown-button",
                }}
              >
                <MenuItem onClick={handleClose}>Old first</MenuItem>
                <MenuItem onClick={handleClose}>Some Option</MenuItem>
              </Menu>
            </div>
            <div className="viewSection">
              <span>
                <MdGridView />
              </span>
              <span>
                <RiListView />
              </span>
            </div>
          </div>
        </div>
        <TabPanel value="1" sx={{ padding: 0 }}>
          {!isMobile && selectedLead !== 0 ? (
            <div className="tabContentWrapper">
              <NewLeadsList />
              <LeadTabContent />
              {/* {isMobile && selectedLead == 0 ? null : <LeadTabContent />} */}
            </div>
          ) : null}
          {isMobile && selectedLead !== 0 ? (
            <LeadTabContent />
          ) : (
            <NewLeadsList />
          )}
        </TabPanel>
        <TabPanel value="2">Coming Soon...</TabPanel>
        <TabPanel value="3">Coming Soon...</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MenuTabs;
