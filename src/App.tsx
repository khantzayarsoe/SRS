import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NewRegistrationForm from "./components/RegistrationForm/NewRegistrationForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegistrationForm" element={<NewRegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
