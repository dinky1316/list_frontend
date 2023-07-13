import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewList() {
  const { id } = useParams();

  const [list, setList] = useState({
    listName: "",
    content: "",
    emoji: "",
  });

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { listName, content, emoji, date } = list;

  const loadList = async () => {
    const result = await axios.get(`http://localhost:8080/list/${id}`);
    setList(result.data);
  };

  return (
    <div className="container animation">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h1 className="text-center m-4">🌴 {listName} 🌵</h1>
          <h5 className="text-center m-4">내용</h5>
          <h4 className="content m-4">{content}</h4>
          <h5 className="text-center m-4">이모지</h5>
          <h4 className="content m-4">{emoji}</h4>
          <h5 className="text-center m-4">📆</h5>
          <h4 className="content m-4">{date}</h4>
          <Link
            to={`/editList/${id}`}
            className="btn btn-outline-success mx-1 button "
          >
            EDIT
          </Link>
          <Link to={"/"} className="btn btn-outline-dark mx-1 button ">
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewList;
