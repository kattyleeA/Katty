import "./styles.css";
import "./other.css";
import React from "react";
import Home from "./HomePage/Home";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./HomePage/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="home" Component={Home} />
        <Route exact path="about" Component={About} />
        <Route exact path="contact" Component={Contact} />
      </Routes>
    </div>
  );
}
export default App;
