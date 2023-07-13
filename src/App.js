import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import AddList from "./pages/AddList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addlist" element={<AddList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
