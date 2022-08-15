import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pendididkan from "./components/Pendididkan";
import Profile from "./containers/Profile";
import Tentang from "./components/Tentang";
import Home from './containers/Home';
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/pendidikan" element={<Pendididkan />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
