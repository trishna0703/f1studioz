import "../styles/leadDetail.css";
import leads from "../data/leads.json";
import { CgExpand } from "react-icons/cg";
import SelectOwner from "./SelectDropdown";
import { BiArrowBack } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { setSelectedLead } from "../redux/slice/lead";
import { Button, MenuItem, Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { detectDeviceType } from "../utils/commonFunctions";
import { MdOutlineEdit, MdOutlineEmail } from "react-icons/md";

const LeadDetails = () => {
  const dispatch = useDispatch();
  const { selectedLead } = useSelector((state) => state.leads);
  const [leadDetail, setLeadDetail] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = detectDeviceType();
  const [assignmentState, setAssignmentState] = useState("Unassigned");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    console.log({ event });
    setAssignmentState(event.target.value);
    setAnchorEl(null);
  };

  const handleBackClick = () => {
    dispatch(setSelectedLead(0));
  };

  useEffect(() => {
    if (selectedLead) {
      let activeLead = leads.find((lead) => lead.id == selectedLead);
      setLeadDetail(activeLead);
    }
  }, [selectedLead]);
  return (
    <div className="leadDetail">
      <div className="detailSection">
        <div className="detailSectionHead">
          <div className="leftSection">
            <div className="logoSection">
              {isMobile ? (
                <button className="backBtn" onClick={handleBackClick}>
                  <BiArrowBack />
                </button>
              ) : null}
              <img src={leadDetail?.logo} alt={leadDetail?.name} />
            </div>
            <div className="leadHeading">
              <div>
                <h2>{leadDetail?.name}</h2>
                <div className="marker">SaaS</div>
                <span className="linkedInIcon">
                  <FaLinkedinIn />
                </span>
                <span className="emailIcon">
                  <MdOutlineEmail />
                </span>
              </div>
              <small>
                Source <strong>Research | LinkedIn</strong>
              </small>
              <div className="detailDescription">
                <p>{leadDetail?.metaData}</p>
              </div>
            </div>
          </div>

          <div className="rightSection">
            <CgExpand />
            <MdOutlineEdit />
            <button className="skipBtn">Skip</button>
          </div>
        </div>
      </div>
      <div className="metaDetail">
        <div className="metaDetailWrap">
          <div className="statusWrapper">
            <span className="sectionLabel">
              <small>Status</small>
            </span>
            <div className="status">
              <Button
                id="assignment-button"
                aria-controls={open ? "assignment-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {assignmentState != 2 ? (
                  <span
                    className={`statusActivity ${
                      assignmentState == 1 ? "active" : ""
                    }`}
                  ></span>
                ) : null}
                {assignmentState == 0
                  ? "Unassigned"
                  : assignmentState == 1
                  ? "Assigned"
                  : "Dismissed"}
              </Button>
              <Menu
                id="assignment-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "assignment-button",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  value={0}
                  disabled={assignmentState == 0}
                >
                  Unassigned
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  value={1}
                  disabled={assignmentState == 1}
                >
                  Assigned
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  value={2}
                  disabled={assignmentState == 2}
                >
                  Dismissed
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="selectOwner">
            <span className="sectionLabel">
              <small>Primary Owner</small>
              <small>Assign Myself</small>
            </span>
            <SelectOwner />
          </div>
        </div>
        <div className="metaDetailWrap">
          <div className="secondaryOwner">+ Secondary Owner</div>
          <div className="sendMessage">
            <span className="sectionLabel">
              <small>Send message to all owners (optional)</small>
            </span>
            <div className="messageInput">
              <input type="text" placeholder="Enter message" />
              <span>
                <FaLongArrowAltRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
