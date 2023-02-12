import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";

function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Patient" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default Main;
