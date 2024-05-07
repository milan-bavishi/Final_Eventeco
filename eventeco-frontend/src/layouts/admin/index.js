import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import "./stylesheets/style.css";
import { Outlet } from "react-router";
import ProfileDropdown from "./components/Profile.jsx";
const Index = () => {

  const [toogleNav, setToogleNav] = useState(true);
  function toggleHandler() {
    setToogleNav(!toogleNav);
  }
  return (
    <>
      <>
        <div className="App">
          <div className="sidebar-collapse">
            {toogleNav ? <Sidebar toggleHandler={toggleHandler} /> : <div className="nothing"></div>}
          </div>
          <div className="dashboard">
            <div className="top-nav">
              <button onClick={() => setToogleNav(!toogleNav)} className="dashNavLeftBtn">
                <div className="dashNavStrokeDiv">
                  <div className="dashNavStroke"></div>
                  <div className="dashNavStroke"></div>
                  <div className="dashNavStroke"></div>
                </div>
              </button>
              <ProfileDropdown />
            </div>
            <Outlet />  
          </div>
        </div>
      </>
    </>
  );
};

export default Index;
