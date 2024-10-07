import React from "react";

function SearchBar({ onChange }) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Users"
      />
    </>
  );
}

export default SearchBar;
