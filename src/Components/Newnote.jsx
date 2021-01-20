import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../Actions";
import "./Newnote.css";

function Newnote() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function saveNote(e) {
    e.preventDefault();
    dispatch(addNote(title, body));
    setTitle("");
    setBody("");
  }

  return (
    <form className="main" onSubmit={(e) => saveNote(e)}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          required
        />
      </div>
      <div className="textarea-div">
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" className="save-button">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </form>
  );
}

export default Newnote;
