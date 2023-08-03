import React from "react";
import "./Search.css"

export default function SearchBar({
  filteriData,
  setFilterData,
  setInputVal,
  inputVal,
  data
}) {
  const handleSearch = (e) => {
    const value = e.target.value;
    setInputVal(value);
    const searchResults = filteriData.filter(
      (item) =>
        item.fname.toLowerCase().startsWith(value.toLowerCase()) ||
        item.mName.toLowerCase().startsWith(value.toLowerCase()) ||
        item.lname.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilterData(searchResults);
  };
  return (
    <div>
      <div className="search-div">
        <div>
          <p>Showing 1 to {data.length} of {data.length} entries</p>
        </div>
        <input onChange={handleSearch} value={inputVal} placeholder="Search By Name..."/>
      </div>
    </div>
  );
}
