import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Hero, Home } from "./components";
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <React.Fragment>
            <Header />
            <Hero />
          </React.Fragment>
        } />
        <Route exact path="/channels" element={ <Home /> } />
        <Route exact path="/channels/:id" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;