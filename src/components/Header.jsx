import React from "react";
import "../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../redux/slice/sidebar";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline, IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const { isOpen, activeMenu } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(showSidebar(!isOpen));
  };
  return (
    <div className="header">
      <div className="metaDataSection">
        {isOpen ? null : (
          <div className="burgerIcon">
            <button onClick={handleToggle}>
              <IoMdMenu />
            </button>
          </div>
        )}
        <div className="pageTitle">
          <h1>{activeMenu}</h1>
        </div>
      </div>

      <div className="searchSection">
        <div className="virtualKeyBoard">
          <FaRegKeyboard />
        </div>
        <div className="search">
          <span className="searchIcon">
            <IoSearch />
          </span>
          <input type="text" placeholder="Search Leads" />
          <span className="filterIcon">
            <MdOutlineFilterAlt />
          </span>
        </div>
        <div className="searchMobile">
          <span className="searchIcon">
            <IoSearch />
          </span>
          <span className="filterIconMobile">
            <IoFilterOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
