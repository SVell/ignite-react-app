import React from "react";
import { Route, Routes } from "react-router-dom";

// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game/:id" exact element={<Home />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
