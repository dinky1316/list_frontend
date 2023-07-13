import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import AddList from "./pages/AddList";
import List from "./pages/List";
import ViewList from "./pages/ViewList";
import EditList from "./pages/EditList";
import ListCard from "./pages/ListCard";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListCard />} />
          <Route path="/addlist" element={<AddList />} />
          <Route path="/list" element={<List />} />
          <Route path="/viewlist/:id" element={<ViewList />} />
          <Route path="/editlist/:id" element={<EditList />} />
          <Route path="/deletelist/:id" element={<EditList />} />
          <Route path="/listcard" element={<ListCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
