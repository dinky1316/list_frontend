import React from "react";

const SearchBox = (props) => {
  const handleChange = (e) => {
    props.setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="listSearch col-md-2 offset-md-5 border rounded p-2 mt-4 shadow text-center"
        value={props.searchValue}
        onChange={handleChange}
        id="keyword"
        placeholder="제목 검색 🔍"
      />
    </div>
  );
};

export default SearchBox;
