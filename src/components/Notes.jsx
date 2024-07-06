import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import Editor from "./Editor";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/slice/notes";
import { PiTrashSimple } from "react-icons/pi";

const Notes = () => {
  const [showEditor, setShowEditor] = useState(false);
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  console.log({ notes });

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <div className="tabHeading">
        <h3>Notes</h3>
        <CiMenuKebab />
      </div>
      <div className="notesSection">
        {notes?.length > 0 ? (
          notes.map((note) => (
            <div className="displayNotes" key={note.id}>
              <div>
                <p dangerouslySetInnerHTML={{ __html: note.value }}></p>
                <small>{note.date}</small>
              </div>
              <button onClick={() => handleDelete(note.id)}>
                <PiTrashSimple />
              </button>
            </div>
          ))
        ) : (
          <plaintext>
            Start adding notes and tag your team members to start discussion{" "}
          </plaintext>
        )}

        {showEditor ? (
          <Editor />
        ) : (
          <input
            type="text"
            onFocus={() => setShowEditor(true)}
            placeholder="Enter note here and tag team members eg @John"
          />
        )}
      </div>
    </div>
  );
};

export default Notes;
