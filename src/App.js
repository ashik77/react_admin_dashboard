import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
