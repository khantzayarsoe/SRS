import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/User/Home/Home";
import NewRegistrationForm from "./components/User/RegistrationForm/NewRegistrationForm";
import EditRegistrationForm from "./components/User/RegistrationForm/EditRegistrationForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegistrationForm" element={<NewRegistrationForm />} />
        <Route
          path="/EditRegistrationForm"
          element={<EditRegistrationForm />}
        />
      </Routes>
    </Router>
  );
};

export default App;
