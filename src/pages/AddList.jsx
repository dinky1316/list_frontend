import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./List.css";
import axios from "axios";

function AddList() {
  let navigate = useNavigate();

  const [list, setList] = useState({
    listName: "",
    content: "",
    emoji: "",
  });

  const onInputChange = (e) => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };

  const { listName, content, emoji } = list;

  // 폼 이벤트
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addList", list);
    navigate("/listcard");
  };

  return (
    <div className="container animation">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h1 className="text-center m-4">🌴 Add List 🌵</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="listName" className="form-label">
                <h4>제목</h4>
              </label>
              <input
                required
                type="text"
                id="listName"
                value={listName}
                onChange={onInputChange}
                className="form-control"
                placeholder="제목 입력"
                name="listName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="listName" className="form-label">
                <h4>내용</h4>
              </label>
              <input
                required
                type="text"
                id="content"
                value={content}
                onChange={onInputChange}
                className="form-control"
                placeholder="내용 입력"
                name="content"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="listName" className="form-label">
                <h4>이모지</h4>
              </label>
              <input
                required
                type="text"
                id="emoji"
                value={emoji}
                onChange={onInputChange}
                className="form-control"
                placeholder="내용 입력"
                name="emoji"
              />
            </div>
            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-success px-3 mx-2"
                onClick={() => alert("등록 완료 😍")}
              >
                등록
              </button>
              <Link to="/" className="btn btn-outline-dark px-3 mx-2">
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddList;
