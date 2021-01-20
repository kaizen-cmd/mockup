import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../Actions";
import Expandednote from "./Expandednote";
import "./Notebox.css";

function Notebox({ title, body, id }) {
  const dispatch = useDispatch();
  const [isExpanded, setisExpanded] = useState(false);
  return (
    <>
      {!isExpanded ? (
        <div className="main-note-box">
          <div>
            <div id="title">{title}</div>
            <div>{body.slice(0, 50)}....</div>
          </div>
          <div className="del-btn-div">
            <button onClick={() => setisExpanded(true)}>
              <i className="fas fa-arrow-down"></i>
            </button>
            <button onClick={() => dispatch(removeNote(id))}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      ) : (
        <Expandednote id={id} title={title} body={body} setExpansion={setisExpanded} />
      )}
    </>
  );
}

export default Notebox;
