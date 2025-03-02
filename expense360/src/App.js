import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
