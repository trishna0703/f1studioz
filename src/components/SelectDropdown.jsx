import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOwner() {
  const [owner, setOwner] = useState("");

  const handleChange = (event) => {
    setOwner(event.target.value);
  };

  return (
    <div className="selectOwnerDropdown">
      <FormControl fullWidth>
        {owner ? null : (
          <label id="select-owner-label">Select Primary Owner</label>
        )}
        <Select
          labelId="select-owner-label"
          id="select-owner"
          value={owner}
          label="Select Primary Owner"
          onChange={handleChange}
        >
          <MenuItem value={"Owner 1"}>Owner 1</MenuItem>
          <MenuItem value={"Owner 2"}>Owner 2</MenuItem>
          <MenuItem value={"Owner 3"}>Owner 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
