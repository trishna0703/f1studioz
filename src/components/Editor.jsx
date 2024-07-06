import React, { useRef, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FiBold, FiItalic, FiList, FiUnderline } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../redux/slice/notes";

export default function Editor() {
  const { notes } = useSelector((state) => state.notes);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const editableRef = useRef(null);
  const applyFormat = (format) => {
    document.execCommand(format, false, null);
  };

  const handleInput = (e) => {
    setNote(e.target.innerHTML);
  };
  const formatDateTime = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return now.toLocaleDateString("en-US", options).replace(",", "");
  };
  const handleAddNote = () => {
    const val = editableRef.current.innerHTML;
    const entry = { id: notes.length + 1, value: val, date: formatDateTime() };
    dispatch(setNotes(entry));
    setNote("");
    editableRef.current.innerHTML = "";
  };

  console.log({ note });
  return (
    <div className="editor">
      <div
        contentEditable="true"
        className="editable"
        dangerouslySetInnerHTML={{ __html: note }}
        onChange={handleInput}
        ref={editableRef}
      ></div>
      <div className="controls">
        <ToggleButtonGroup aria-label="text formatting">
          <ToggleButton
            value="bold"
            aria-label="bold"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormat("bold")}
          >
            <FiBold />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormat("italic")}
          >
            <FiItalic />
          </ToggleButton>
          <ToggleButton
            value="underline"
            aria-label="underlined"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormat("underline")}
          >
            <FiUnderline />
          </ToggleButton>
          <ToggleButton
            value="insertUnorderedList"
            aria-label="list"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormat("insertUnorderedList")}
          >
            <FiList />
          </ToggleButton>
        </ToggleButtonGroup>
        <button className="addNotes" onClick={handleAddNote}>
          Add Note
        </button>
      </div>
    </div>
  );
}
