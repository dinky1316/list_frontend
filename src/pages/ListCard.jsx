import axios from "axios";
import React, { useEffect, useState } from "react";
import "./List.css";
import SearchBox from "./SearchBox";
import GetList from "./GetList";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const result = await axios.get("http://localhost:8080/list");
    setList(result.data);
  };

  const [searchValue, setSearchValue] = useState("");

  // 검색어 길이 제한
  useEffect(() => {
    if (searchValue.length == 0 || searchValue == null) {
      loadList();
    }
    if (searchValue.length > 1) getListRequest(searchValue);
  }, [searchValue]);

  const getListRequest = async (searchValue) => {
    const url = `http://localhost:8080/searchList?listName=${searchValue}`;
    const response = await fetch(url);
    const reponseJson = await response.json();

    console.log(reponseJson);

    if (reponseJson) {
      setList(reponseJson);
    } else {
      loadList();
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5"># TO DO LIST</h1>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <GetList list={list} />
    </div>
  );
}

export default List;
