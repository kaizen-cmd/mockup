import React from "react";
import { useSelector } from "react-redux";
import Notebox from "./Notebox";
import "./Notescontainer.css";

function Notescontainer() {
  const Notes = useSelector((state) => state.NotesReducer);
  return (
    <div className="main-notes-container">
      {Notes.map((note, index) => {
        return <Notebox key={index} title={note.title} body={note.note} id={note.id} />;
      })}
    </div>
  );
}

export default Notescontainer;
