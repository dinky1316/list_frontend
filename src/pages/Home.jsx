import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="display-1 my-5">Home</h1>;
      <div className="deco">
        <button type="button" class="btn btn-primary mx-2">
          🌊
        </button>
        <button type="button" class="btn btn-success mx-2">
          🌵
        </button>
        <button type="button" class="btn btn-danger mx-2">
          🍒
        </button>
        <button type="button" class="btn btn-warning mx-2">
          🌻
        </button>
        <button type="button" class="btn btn-light mx-2">
          ⛄
        </button>
        <button type="button" class="btn btn-dark mx-2">
          🌙
        </button>
      </div>
      <div className="col-md-6 offset-md-3 border rounded p-4 shadow animation">
        <h1 className=""># To Do List</h1> <br />
        <h3>아래 버튼을 눌러 주요 기능을 사용해보세요 🐾</h3>
        <br />
        <div className="gogo">
          <Link
            to={"/listCard"}
            className="btn float-right btn-outline-success mx-3"
          >
            🌵 Go to List 🌵
          </Link>
          <Link
            to={"/pinBoard"}
            className="btn float-right btn-outline-danger mx-3"
          >
            📌 Go to Pin Board 📌
          </Link>
          <Link
            to={"/addList"}
            className="btn float-right btn-outline-warning mx-3"
          >
            🌻 Go to Add List 🌻
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
