import axios from "axios";
import { Link } from "react-router-dom";
import "./List.css";
import { useEffect, useState } from "react";

const GetList = (props) => {
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

  const deleteList = async (id) => {
    if (window.confirm("진짜 지워요? 🥺")) {
      await axios.delete(`http://localhost:8080/list/${id}`);
      window.alert("삭제 완료 😭");
    }
    window.location.replace("/listcard");
  };

  return (
    <div className="container row row-cols-4 g-4 animation">
      {props.list.map((list) => (
        <div key={list.id}>
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
                  className="btn btn-outline-warning button mx-1"
                >
                  🌻
                </button>
                <button
                  onClick={() => addPin(list)}
                  className="btn btn-outline-danger button"
                >
                  📌
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetList;
