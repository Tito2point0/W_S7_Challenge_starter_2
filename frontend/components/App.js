import React from "react";
import Home from "./Home";
import Form from "./Form";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div id="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="pizza" id="pizza-form">
          Create Your Pizza
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizza" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
