/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/style.css";

function InputNotes({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = () => {
    if (title !== "" && content !== "") {
      const newNote = {
        id: Date.now(), // Menggunakan timestamp sebagai ID
        title,
        body: content, // Menggunakan 'body' alih-alih 'content'
        archived: false,
        createdAt: new Date().toISOString(),
      };
      onAddNote(newNote);
      setTitle("");
      setContent("");
    }
  };
  

  return (
    <>
      <div className="input-notes">
        <h1 className="title-input-notes">Buat Catatan</h1>

        <input
          className="input-title-notes"
          type="text"
          placeholder="Tulis judul..."
          value={title}
          onChange={handleTitleChange}
        />

        <textarea
          className="input-body-notes"
          type="text"
          placeholder="Tulis catatan..."
          value={content}
          onChange={handleContentChange}
        />

        <button className="btn-addnote" onClick={handleAddNote}>
          Buat
        </button>
      </div>
    </>
  );
}

export default InputNotes;
