import axios from "axios";
import React, { useEffect, useState } from "react";
import "./List.css";
import { Link } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const [pin, setPin] = useState([]);

  useEffect(() => {
    const pinList = JSON.parse(localStorage.getItem("pin"));
    if (pinList) {
      setPin(pinList);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("pin", JSON.stringify(items));
  };

  const addPin = (list) => {
    const pinList = [...pin, list];
    setPin(pinList);
    saveToLocalStorage(pinList);
    window.alert("핀보드에 추가 완료 😉");
  };

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

  return (
    <div className="container animation">
      <h1 className="text-center my-5"># To Do List</h1>
      <table className="table table-hover rounded shadow my-3">
        <thead>
          <tr className="table-success">
            <th scope="col">💚</th>
            <th scope="col" className="title">
              TITLE
            </th>
            <th scope="col" className="title">
              VIEW
            </th>
            <th scope="col" className="title">
              DELETE
            </th>
            <th scope="col" className="title">
              PIN
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((list, index) => (
            <tr key={index}>
              <th scope="row">#{index + 1}</th>
              <td>{list.listName}</td>
              <td>
                <Link
                  to={`/viewlist/${list.id}`}
                  className="btn btn-outline-success mx-1"
                >
                  🌵
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteList(list.id)}
                  className="btn btn-outline-warning px-3 mx-2 button"
                >
                  🌻
                </button>
              </td>
              <td>
                <button
                  onClick={() => addPin(list)}
                  className="btn btn-outline-danger button"
                >
                  📌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
