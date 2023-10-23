/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/style.css";

function SearchBar({ searchText, onSearchChange }) {
  return (
    <>
      <div className="navbar">
        <h1 className="">Notes</h1>
        <div>
          <input
          className="search-text"
            type="text"
            placeholder="Cari catatan berdasarkan judul..."
            value={searchText}
            onChange={onSearchChange}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBar;