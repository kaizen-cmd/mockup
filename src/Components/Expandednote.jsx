import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../Actions";
import "./Expandednote.css";

function Expandednote({ id, title, body, setExpansion }) {
  const [titles, setTitles] = useState(title);
  const [bodys, setBodys] = useState(body);

  const [editmode, setEditmode] = useState(false);

  const dispatch = useDispatch();

  function saveNote() {
    setEditmode(false);
    dispatch(updateNote(id, titles, bodys));
  }

  return (
    <div className="main-expanded">
      <div className="close-btn-div">
        <button onClick={() => setExpansion(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div id="expanded-note-title">
        {!editmode ? (
          titles
        ) : (
          <input
            type="text"
            value={titles}
            onChange={(e) => setTitles(e.currentTarget.value)}
            placeholder="Title"
          />
        )}
      </div>
      <div id="expanded-note-body" className={!editmode && "overflow-scroll"}>
        {!editmode ? (
          bodys
        ) : (
          <textarea
            value={bodys}
            onChange={(e) => setBodys(e.currentTarget.value)}
            placeholder="Body"
            id="edit-ta"
            className="overflow-scroll"
          ></textarea>
        )}
      </div>
      <div className="save-btn-div">
        {!editmode ? (
          <button className="edit-button" onClick={(e) => setEditmode(true)}>
            Edit
          </button>
        ) : (
          <button className="edit-button" onClick={(e) => saveNote()}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default Expandednote;
