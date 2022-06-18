import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "./HomePage/HomePage";
import About from "./AboutPage/AboutPage";

function Webpage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default Webpage;
