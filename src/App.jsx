import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Messaging from "./components/Messaging";
import Explore from "./components/Explore";
import Settings from "./components/Settings";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Router>
        <div className="app-flex-container">
        <Sidebar />
          <div>
            <Routes>
              <Route exact path="/" element={<Feed />}></Route>
              <Route path="/messaging" element={<Messaging />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route exact path="/explore" element={<Explore />}></Route>
           
            </Routes>   
          </div>
          <RightSidebar />
        </div>
      </Router>
    </>
  );
}

export default App;
