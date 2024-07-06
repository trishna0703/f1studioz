import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar, setActiveMenu } from "../redux/slice/sidebar";
import menu from "../data/menu.json";
import "../styles/sidebar.css";
import { HiXCircle } from "react-icons/hi";
import { ClickAwayListener } from "@mui/material";
import { detectDeviceType } from "../utils/commonFunctions";
const Sidebar = () => {
  const { isOpen, activeMenu } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  // const handleToggle = () => {
  //   dispatch(showSidebar(!isOpen));
  // };

  const handleMenuClick = (key) => {
    dispatch(setActiveMenu(key));
    dispatch(showSidebar(false));
  };

  const handleClose = () => {
    let isMobile = detectDeviceType();
    if (isMobile) {
      dispatch(showSidebar(false));
    }
  };

  return isOpen ? (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div className="sidebar">
          <div className="logo-section">
            <img src={"/images/logo.png"} alt="Logo" />
            {/* <button onClick={handleToggle} className="closeSidebar">
              <HiXCircle />
            </button> */}
          </div>
          <div className="menu">
            {menu.map((item) => (
              <button
                className={`menu-items ${
                  activeMenu == item.name ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleMenuClick(item.name)}
              >
                <span className="menu-icon">
                  <img src={item.icon} alt="menu-icon" />
                </span>
                <small>{item.name}</small>
              </button>
            ))}
          </div>
        </div>
      </ClickAwayListener>
    </>
  ) : null;
};

export default Sidebar;
