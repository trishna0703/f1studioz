import {
  Button,
  ClickAwayListener,
  Grow,
  MenuList,
  Popper,
  MenuItem,
  Paper,
} from "@mui/material";
import { FaListUl } from "react-icons/fa6";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className="sortSection">
      <span className="mute-color">Sort by</span>
      <div className="latestLeadsDropdown">
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Latest Leads
            <MdArrowDropDown />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: "top right",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Old first</MenuItem>
                      <MenuItem onClick={handleClose}>Some option</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      <div className="viewSection">
        <BsGrid1X2Fill />
        <FaListUl />
      </div>
    </div>
  );
};

export default Sort;
