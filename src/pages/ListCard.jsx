import axios from "axios";
import React, { useEffect, useState } from "react";
import "./List.css";
import { Link } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const result = await axios.get("http://localhost:8080/list");
    setList(result.data);
  };

  const deleteList = async (id) => {
    if (window.confirm("진짜 지워요? 🥺")) {
      await axios.delete(`http://localhost:8080/list/${id}`);
      window.alert("삭제 완료 😭");
    }
    loadList();
  };

  const [search, setSearch] = useState("");

  const searchSpace = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center mt-5"># TO DO LIST</h1>
      <input
        type="text"
        className="listSearch col-md-2 offset-md-5 border rounded p-2 mt-4 shadow text-center"
        onChange={searchSpace}
        id="keyword"
        placeholder="제목 검색 🔍"
      />
      <div className="container row row-cols-4 g-4 animation">
        {list.map((list, index) => (
          <div key={index}>
            <div className=" offset-md-11 border rounded p-4 mt-5 shadow card shadow ">
              <div className="card-body">
                <h5 className="card-title">{list.listName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{list.date}</h6>
                <p className="card-text">{list.content}</p>
                <p className="card-text">{list.emoji}</p>
                <div align="right">
                  <Link
                    to={`/viewlist/${list.id}`}
                    className="btn float-right btn-outline-success mx-1"
                  >
                    🌵
                  </Link>
                  <button
                    onClick={() => deleteList(list.id)}
                    className="btn btn-outline-warning button"
                  >
                    🌻
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
