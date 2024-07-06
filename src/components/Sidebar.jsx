import React from "react";
import "../styles/sidebar.css";
import menu from "../data/menu.json";
import { ClickAwayListener } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { detectDeviceType } from "../utils/commonFunctions";
import { showSidebar, setActiveMenu } from "../redux/slice/sidebar";

const Sidebar = () => {
  const { isOpen, activeMenu } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

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
  ) : null;
};

export default Sidebar;
