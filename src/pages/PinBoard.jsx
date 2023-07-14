import React, { useEffect, useState } from "react";
import GetList from "./GetList";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [pin, setPin] = useState([]);

  // 화면 시작할때 로컬 저장소에서 핀 데이터 불러오기
  useEffect(() => {
    const pinList = JSON.parse(localStorage.getItem("pin"));
    if (pinList) {
      setPin(pinList);
    }
  }, []);

  // 로컬저장소에 저장
  const saveToLocalStorage = (items) => {
    localStorage.setItem("pin", JSON.stringify(items));
  };

  // 핀 삭제
  const RemovePin = (id) => {
    const modifyPin = pin.filter((pin) => pin.id !== id);
    localStorage.setItem("pin", JSON.stringify(modifyPin));
    setPin(modifyPin);
    saveToLocalStorage(modifyPin);
    window.location.replace("/pinboard");
  };

  const clear = () => {
    if (window.confirm("핀보드 진짜 다 날려요?! 😮")) {
      window.alert("💥😎 완료");
      window.localStorage.removeItem("pin");
      window.location.replace("/pinboard");
    }
  };

  // 리스트 삭제
  const deleteList = async (id) => {
    if (window.confirm("진짜 지워요? 🥺")) {
      await axios.delete(`http://localhost:8080/list/${id}`);
      window.alert("삭제 완료 😭");
    }
    window.location.replace("/listcard");
  };

  return (
    <div>
      <h1 className="my-5">Pin Board</h1>
      <button
        onClick={() => clear()}
        className="btn btn-danger button col-md-1 offset-md-2"
      >
        CLEAR
      </button>
      <div className="container row row-cols-4 g-4 animation">
        {pin.map((list) => (
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
                    onClick={() => RemovePin(list.id)}
                    className="btn btn-danger button"
                  >
                    📌
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
    </div>
    // </div>
  );
}

export default Home;
