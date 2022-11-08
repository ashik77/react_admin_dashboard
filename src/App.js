import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";

import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
