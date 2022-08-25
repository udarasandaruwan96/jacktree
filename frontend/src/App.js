import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./styles.css";


import Home from "./pages/Home";

function App() {
  return (
    <div>
      <React.Fragment>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="sllider" element={<Slider />} exact/> */}
            </Routes>
          </BrowserRouter>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
