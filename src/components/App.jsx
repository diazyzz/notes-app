/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import InputNotes from "./InputNotes";
import Notes from "./Notes";
import SearchBar from "./SearchBar";
import data from "../utils/data";
import "../styles/style.css";

function App() {
  // Mengambil data dari local storage saat komponen dimuat
  const [activeNotes, setActiveNotes] = useState(() => {
    const storedData = localStorage.getItem("activeNotes");
    return storedData ? JSON.parse(storedData) : data;
  });

  const [archivedNotes, setArchivedNotes] = useState(() => {
    const storedData = localStorage.getItem("archivedNotes");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [searchText, setSearchText] = useState("");

  // Menggunakan useEffect untuk menyimpan data ke local storage saat data berubah
  useEffect(() => {
    localStorage.setItem("activeNotes", JSON.stringify(activeNotes));
    localStorage.setItem("archivedNotes", JSON.stringify(archivedNotes));
  }, [activeNotes, archivedNotes]);

  const handleAddNote = (newNote) => {
    setActiveNotes([...activeNotes, newNote]);
  };

  const handleDeleteNote = (index, isArchived) => {
    if (isArchived) {
      const newArchivedNotes = [...archivedNotes];
      newArchivedNotes.splice(index, 1);
      setArchivedNotes(newArchivedNotes);
    } else {
      const newActiveNotes = [...activeNotes];
      newActiveNotes.splice(index, 1);
      setActiveNotes(newActiveNotes);
    }
  };

  const handleArchiveNote = (index) => {
    const archivedNote = activeNotes[index];
    const newActiveNotes = [...activeNotes];
    newActiveNotes.splice(index, 1);
    setActiveNotes(newActiveNotes);
    setArchivedNotes([...archivedNotes, archivedNote]);
  };

  const handleRestoreNote = (index) => {
    const restoredNote = archivedNotes[index];
    const newArchivedNotes = [...archivedNotes];
    newArchivedNotes.splice(index, 1);
    setArchivedNotes(newArchivedNotes);
    setActiveNotes([...activeNotes, restoredNote]);
  };

  const filteredActiveNotes = activeNotes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredArchivedNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <SearchBar searchText={searchText} onSearchChange={handleSearchChange} />
      <InputNotes onAddNote={handleAddNote} />
      <Notes
        notes={filteredActiveNotes}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
        onRestore={handleRestoreNote}
      />
      <Notes
        notes={filteredArchivedNotes}
        onDelete={handleDeleteNote}
        onArchive={handleArchiveNote}
        onRestore={handleRestoreNote}
        isArchived={true}
      />
    </>
  );
}

export default App;
