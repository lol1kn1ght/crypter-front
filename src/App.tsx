import React from "react";
import "css/App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Header } from "components/Header";

function App() {
  return (
    <div className='app'>
      {<Header />}
      <div className='app-body'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
