import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactHelp from "../pages/Contact-Help";
import Login from "../pages/Login";
import UserDash from "../pages/User-Dash";
import AdminDash from "../pages/User-Dash";
import ScrollToTop from "./components/ScrollToTop";
import "../styles/Main.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-help" element={<ContactHelp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dash" element={<UserDash />} />
        <Route path="/admin-dash" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
